import { db } from "@/src/db";

export default async function Home() {

  const spaces = await db.query.space.findMany();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {
      spaces.map((space) =>{
        return <div key={space.id}>{space.name}</div>
      })
     }
    </main>
  );
}
