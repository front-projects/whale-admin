"use client"

import { logout } from "../auth/actions";

export default function Page(){
    return <div>Only for auth

        <button onClick={()=> logout()}>Logout</button>
    </div>
}