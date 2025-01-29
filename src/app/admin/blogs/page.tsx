import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {CirclePlus} from "lucide-react";

const Blogs: React.FC = async () => {
    return (
        <div className="w-full relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
            <Card className="font-sans">
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle>
                            <h1 className="text-3xl font-bold">Blogs</h1>
                        </CardTitle>
                        <CardDescription className="text-sm text-slate-600">
                            List of blogs
                        </CardDescription>
                    </div>
                    <div className="pr-2">
                        <Link className="flex flex-row px-8 py-2.5 min-w-[120px] text-center text-lg text-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                           href="/download">
                            {/*<span><CirclePlus/></span>*/}
                            <CirclePlus size="20" className="mt-1 mr-1"/>
                            <span>Create a post</span>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Blogs;