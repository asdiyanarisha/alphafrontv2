import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {CirclePlus, Ellipsis} from "lucide-react";

import "./styles.css";

const Blogs: React.FC = async () => {
    return (
        <div className="w-full relative h-full flex flex-auto flex-col px-4 sm:px-6 py-4 sm:py-6 md:px-8">
            <Card className="font-sans">
                <CardHeader className="flex flex-row justify-between">
                    <div>
                        <CardTitle>
                            <h1 className="text-3xl font-bold">Blogs</h1>
                        </CardTitle>
                        <CardDescription className="text-sm text-slate-600 pt-1">
                            List of blogs
                        </CardDescription>
                    </div>
                    <div className="pr-2">
                        <Link className="flex flex-row px-4 py-2.5 min-w-[120px] text-[16px] text-center text-slate-900 border border-slate-800 rounded-md hover:bg-slate-800 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
                           href="/download">
                            {/*<span><CirclePlus/></span>*/}
                            <CirclePlus size="16" className="mt-1 mr-1"/>
                            <span>Create a post</span>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="pr-5 pl-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">
                                            <input type="checkbox" className="checkbox peer text-primary" />
                                        </div>
                                    </th>
                                    <th className="col-title">
                                        <div className="font-semibold text-left">Title</div>
                                    </th>
                                    <th className="col-table">
                                        <div className="font-semibold text-left">Tags</div>
                                    </th>
                                    <th className="col-table">
                                        <div className="font-semibold text-left">Created At</div>
                                    </th>
                                    <th className="col-table">
                                        <div className="font-semibold text-center">Action</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="pr-5 pl-2">
                                        <div className="font-semibold text-left">
                                            <input type="checkbox" className="checkbox peer text-primary"/>
                                        </div>
                                    </td>
                                    <td className="col-title">
                                        <div className="text-left font-bold">Fundamental of beatifulsoup for python</div>
                                    </td>
                                    <td className="col-table">
                                    <div className="text-left">Python,Scrapper,Crawler</div>
                                    </td>
                                    <td className="col-table">
                                        <div className="text-left font-medium text-green-500">20 Aug 2024</div>
                                    </td>
                                    <td className="col-table">
                                        <div className="text-lg flex justify-center">
                                            <Ellipsis/>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Blogs;