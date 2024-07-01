'use client';

import { CreateSpaceForm } from "./create-space-form";

export default function CreateSpacePage(){
    return(
        <div className="container mx-auto flex flex-col gap-8 pt-12 pb-24">
            <h1 className="text-4xl font-bold">Create Room</h1>
            <CreateSpaceForm />
        </div>
    )
}