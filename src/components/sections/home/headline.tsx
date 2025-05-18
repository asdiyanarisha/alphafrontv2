'use client'

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
import { Progress } from "@/components/ui/progress"
import {MySkills, MyExperiences} from "@/data/headline";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area"


const Headline = () => {
    return (
        <div className="w-full md:w-full lg:w-1/2 lg:justify-center my-20 flex flex-col lg:flex-row lg:gap-10">
            <MyWork/>
            <Expriences/>
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
                <CardContent className="h-[250]">
                    <ol className="mt-6 space-y-4">
                            {
                                MyExperiences.map((item, index) => (
                                    <li className="flex gap-4" key={"experience-" + index}>
                                        <div
                                            className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                            <Image src={item.company_logo} width="30" height="30" alt=""></Image>
                                        </div>
                                        <div className="flex flex-auto flex-wrap gap-x-2">
                                            <div
                                                className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{item.company_name}
                                            </div>
                                            <div className="text-xs text-zinc-500 dark:text-zinc-400">{item.role}
                                            </div>
                                            <div
                                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">{item.period}
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
                        Download My Resume
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

const Expriences = () => {
    return (
        <div id="my-skill" className="w-full">
            <Card>
                <CardHeader>
                    <CardTitle className="font-sans scroll-m-20 text-xl font-bold tracking-tight">
                        Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[250]">
                        <ol className="mt-6 space-y-4 pr-4">
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
                    </ScrollArea>
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