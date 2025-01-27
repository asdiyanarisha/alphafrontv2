import React from "react";
import {cookies} from "next/headers";

const Admin: React.FC = async () => {
    const sessionRes =(await cookies()).get('session')?.value
    console.log(sessionRes);

    return (
        <h1>Test</h1>
    );
}

export default Admin;