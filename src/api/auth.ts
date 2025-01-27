'use server'
import axiosInstance from "@/lib/axios";
import {cookies} from "next/headers";


const storeToCookies = async (token: string) => {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000)
    const cookieStore = await cookies()
    cookieStore.set('session', token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

const LoginSubmitAction = async (email: string, password: string) => {
    return await axiosInstance.post("/login", {
        username: email, password: password,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async function (response) {
        await storeToCookies(response.data.token);
        return {code: response.status, status: "success", token: response.data.token};
    }).catch(function (err) {
        if (err.response.status == 401) {
            return {code: err.response.status, status: "unauthenticated"};
        }

        return {code: err.response.status, status: "failed"};
    });
}

export default LoginSubmitAction;