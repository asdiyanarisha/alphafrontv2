'use server'

import {cookies} from "next/headers";

const SessionGet = async () => {
    const sessionRes =(await cookies()).get('session')?.value
    console.log(sessionRes);
    return sessionRes
}

export default SessionGet;
