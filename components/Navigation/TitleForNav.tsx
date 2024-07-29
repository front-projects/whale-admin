"use client"

import { usePathname } from "next/navigation"

export default function TitleForNav(){
    const pathname = usePathname();
   
    const title = pathname.startsWith('/menu/users') ? 'USERS' : pathname.startsWith('/menu/deposits') ? 'DEPOSITS' : 'LOGS'

    return <div>{title}</div>
}