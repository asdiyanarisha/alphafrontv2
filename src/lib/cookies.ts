'use server'

import {cookies} from "next/headers";

const SessionGet = async () => {
    return (await cookies()).get('session')?.value
}

export default SessionGet;
