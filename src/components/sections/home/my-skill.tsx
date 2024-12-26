import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import { Progress } from "@/components/ui/progress"
import {MySkills} from "@/data/my-skill";
import Image from "next/image";


const Headline = () => {
    return (
        <div className="w-full md:w-full lg:w-1/2 lg:justify-center my-20 flex flex-col lg:flex-row lg:gap-10">
            <MyWork/>
            <MySkill/>
        </div>
    )
}

const MyWork = () => {
    return (
        <div id="my-work" className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="font-sans scroll-m-20 text-xl font-bold tracking-tight">
                        Work</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="mt-6 space-y-4">
                        <li className="flex gap-4">
                            <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                Logo
                            </div>
                            <div className="flex flex-auto flex-wrap gap-x-2">
                                <div
                                    className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Komerce
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Backend Engineer
                                </div>
                                <div className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">Sept 2022 - Dec
                                    2023
                                </div>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                Logo
                            </div>
                            <div className="flex flex-auto flex-wrap gap-x-2">
                                <div
                                    className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Komerce
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Backend Engineer
                                </div>
                                <div className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">Sept 2022 - Dec
                                    2023
                                </div>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                Logo
                            </div>
                            <div className="flex flex-auto flex-wrap gap-x-2">
                                <div
                                    className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Perveks
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Backend Engineer
                                </div>
                                <div className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">Jan 2023 - Mar
                                    2023
                                </div>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                Logo
                            </div>
                            <div className="flex flex-auto flex-wrap gap-x-2">
                                <div
                                    className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Atmatech
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer
                                </div>
                                <div className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">Sept 2018 - Nov
                                    2022
                                </div>
                            </div>
                        </li>


                        <li className="flex gap-4">
                            <div
                                className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                Logo
                            </div>
                            <div className="flex flex-auto flex-wrap gap-x-2">
                                <div
                                    className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Ebdesk
                                    Teknologi
                                </div>
                                <div className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer
                                </div>
                                <div className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">Jun 2016 - Aug 2018
                                </div>
                            </div>
                        </li>
                    </ol>
                </CardContent>
                <CardFooter>
                    <a href="https://www.linkedin.com/in/asdiyanarisha/"
                       className="font-sans inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-black font-medium text-white hover:bg-white hover:text-black hover:border-black hover:border active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full">
                        Download My Resume
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

const MySkill = () => {
    return (
        <div id="my-skill" className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="font-sans scroll-m-20 text-xl font-bold tracking-tight">
                        Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="mt-6 space-y-4">
                        {
                            MySkills.map((item, index) => (
                                <li className="flex gap-4" key={"item-" + index}>
                                    <div
                                        className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                        <Image src={item.img_path} width="30" height="30" alt=""></Image>
                                    </div>
                                    <div className="flex flex-auto flex-wrap gap-x-2">
                                        <div
                                            className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.name}
                                        </div>
                                        <div className="w-full flex flex-row">
                                            <div
                                                className="basis-11/12 pt-1 text-xs text-zinc-500 dark:text-zinc-400 overflow-visible">
                                                <Progress value={item.point}/>
                                            </div>
                                            <div
                                                className="basis-1/12 text-right text-xs text-black dark:text-zinc-500">{item.point}%
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </CardContent>
                <CardFooter>
                    <a href="https://www.linkedin.com/in/asdiyanarisha/"
                       className="font-sans inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-black font-medium text-white hover:bg-white hover:text-black hover:border-black hover:border active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full">
                        View My Linkedin
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Headline;