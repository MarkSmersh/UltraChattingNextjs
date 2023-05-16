
'use client'

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faBuffer } from "@fortawesome/free-brands-svg-icons"
import { signIn } from "next-auth/react";

const providerIcon: Record<string, IconDefinition> = {
    google: faGoogle,
}

export default function LoginWith({ provider }: { provider: keyof typeof providerIcon }) {
    return (
        <div onClick={() => signIn(provider)} className="rounded-default w-full flex flex-start bg-general my-s transition hover:cursor-pointer hover:scale-110">
            <div className="w-20 h-16 rounded-default bg-google flex justify-center items-center"> 
                <FontAwesomeIcon icon={providerIcon[provider] || faBuffer} size="2x" className="text-white" />
            </div>
            <div className="min-h-full w-full px-b rounded-e-default flex justify-start items-center">Sign in with {provider.split("").map((v, i) => (i === 0) ? v.toUpperCase() : v).join("")}</div>
        </div>
    )
}