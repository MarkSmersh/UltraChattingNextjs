'use client'
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Chat() {
    const { data } = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/")
        },
    })
    
    return (
      <div>
          <h1>Loged in as: </h1>
          <p className="text-white">{data?.user?.name}</p>
          <img height={100} width={100} src={data?.user?.image as string} alt="avatar" />
          <button onClick={() => signOut()}>Log Out</button>
      </div>
    )
}
