'use client'
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-sdk'
import "@stream-io/video-react-sdk/dist/css/styles.css";
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Space } from '@/src/db/schema'
import { generateTokenAction } from './actions';
import { useRouter } from 'next/navigation';

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!
// const token = ''

export function DevspaceVideo ({space}: {space: Space}) {
  const session = useSession();

  const [client, setClient] = useState<StreamVideoClient | null>(null)
  const [call, setCall] = useState<Call | null>(null)

  const router = useRouter();

  useEffect(() => {
    if(!space){
      return;
    }
    if (!session.data) {
      return
    }
    const userId = session.data?.user?.id;
    console.log("userId", userId)
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: session.data?.user?.name ?? undefined,
        image: session.data?.user?.image ?? undefined,
      },
      tokenProvider: () => generateTokenAction(),
      // token,
    })
    setClient(client);
    const call = client.call('default', space.id)
    call.join({ create: true })
    setCall(call)

    return () => {
      call.leave().then(() => client.disconnectUser()).catch(console.error);
    };
  }, [session, space])
  return (
    client &&
    call && (
      <StreamVideo client={client} >
        <StreamTheme >
          <StreamCall call={call}>
            <SpeakerLayout />
            <CallControls onLeave={() =>{
              router.push("/");
            }}/>
            <CallParticipantsList  onClose={()=>undefined} />
          </StreamCall>
        </StreamTheme>
      </StreamVideo>
     
    )
  )
}

function getSpaceSession () {
  throw new Error('Function not implemented.')
}
