'use client'

import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import LoginSubmitAction from "@/api/auth";
import { useToast } from "@/hooks/use-toast"
import {ToasterCustom} from "@/components/ui/toaster"
import {cn} from "@/lib/utils";
import {redirect} from "next/navigation";

interface errorFormLogin {
    email?: string;
    password?: string;
}

interface formDataInterface {
    email?: string;
    password?: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<formDataInterface>({});
    const [isDisableSubmit, setIsDisableSubmit] = useState(true);
    const [isDisablePassword, setIsDisablePassword] = useState(true);
    const [error, setError] = useState<errorFormLogin>({});
    const { toast } = useToast()

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        if (name == 'email') {
            await handleEmail(value);
        }

        if (name == 'password') {
            await handlePassword(value);
        }

        let isDisableSubmit = true;
        if (error.email == undefined) {
            isDisableSubmit = false;
        }

        if (error.password == undefined  && !isDisableSubmit)  {
            isDisableSubmit = false;
        }

        if (formData.email != undefined && formData.password != undefined && !isDisableSubmit) {
            setIsDisableSubmit(isDisableSubmit);
        }
    }

    const submitLogin = async () => {
        const res = await LoginSubmitAction(formData.email!, formData.password!);
        if (res.code == 401) {
            await triggerToast("Invalid email or password")
            return
        }

        redirect('/admin');
    }

    const triggerToast = async (message: string) => {
        toast({
            title: "Failed",
            description: message,
            variant: "destructive",
            duration: 1000,
            className: cn(
                'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
            ),
        })
    }

    const handleEmail = async (value: string) => {
        if (value == "") {
            setError({...error, email: "Please enter a valid email !"});
        } else {
            const regexEmail = new RegExp("^[A-z.]{1,100}\\@[A-z]{1,10}\\.[A-z]{1,5}", "gm");
            if (!regexEmail.test(value)) {
                setError({...error, email: "Invalid email address !"});
            } else {
                setError({...error, email: undefined});
                setFormData({...formData, email: value});
                setIsDisablePassword(false);
            }
        }
    }

    const handlePassword = async (value: string) => {
        if (value == "") {
            setError({...error, password: "Please fill the password !"});
        } else {
            const rePassword = new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$", "gm");
            if (!rePassword.test(value)) {
                setError({...error, password: "Minimum 6 characters, at least 1 letter and 1 number!"});
            } else {
                setError({...error, password: undefined});
                setFormData({...formData, password: value});
            }
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <Input type="email" name="email" id="email"
                                       onChange={handleChange}
                                       className="
                                       h-10 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-slate-600
                                       focus:border-slate-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com"/>
                                {error.email &&
                                    <p className='text-sm mt-1 text-red-500'>{error.email}</p>}
                            </div>
                            <div>
                            <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <Input type="password" name="password" id="password" onChange={handleChange} placeholder="••••••••" disabled={isDisablePassword}
                                       className="h-10 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {error.password &&
                                    <p className='text-sm mt-1 text-red-500'>{error.password}</p>}
                            </div>
                            <Button onClick={submitLogin}
                                    size="default"
                                    className={`w-full text-white bg-slate-950 hover:bg-slate-700 focus:ring-4
                                    focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5
                                    text-center dark:bg-slate-600 dark:hover:bg-primary-700 dark:focus:ring-slate-800`}
                                    disabled={isDisableSubmit}
                            >Sign in</Button>
                        </div>
                    </div>
                </div>
            </div>
            <ToasterCustom />
        </section>
    );
}

export default Login;