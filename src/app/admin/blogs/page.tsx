'use client'

import React, {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";
import {CirclePlus, Ellipsis, Pen, Trash2, User} from "lucide-react";
import {ResponseBlogs} from "@/api/dto/blog";
import {GetPublicBlogs} from "@/api/blog";
import {Blog} from "@/api/models/blog";
import Moment from "moment/moment";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button";

const Blogs: React.FC =  () => {
    const [blogsData, setBlogsData] = useState<ResponseBlogs>(
        {results: []}
    );

    useEffect(() => {
        const fetchDatasPublic = async () => {
            GetPublicBlogs().then(r => {

                setTimeout(() => {
                    r.data.forEach((d: Blog) => {
                        d.url_image = process.env.NEXT_PUBLIC_API_HOST + d.url_image

                        setBlogsData(prevState => ({
                            results: [...prevState.results, d],
                        }));
                        // setLoading(false);
                    })
                }, 350)
            })
        };

        fetchDatasPublic().then();

        return () => {};
    }, [])


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
                           href="/admin/blogs/create">
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
                                {
                                    blogsData.results.map((d, index) => (
                                        <tr key={index}>
                                            <td className="pr-5 pl-2">
                                                <div className="font-semibold text-left">
                                                    <input type="checkbox" className="checkbox peer text-primary"/>
                                                </div>
                                            </td>
                                            <td className="col-title">
                                                <div className="text-left font-bold">
                                                    {d.title}
                                                </div>
                                            </td>
                                            <td className="col-table">
                                                <div className="text-left">
                                                    {d.tags.join(",")}
                                                </div>
                                            </td>
                                            <td className="col-table">
                                                <div className="text-left font-medium text-green-500">
                                                    {Moment(d.created_at).format("MMM DD, YYYY")}
                                                </div>
                                            </td>
                                            <td className="col-table">
                                                <div className="text-lg flex justify-center">
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button variant={"outline"} className="px-2 py-1">
                                                                <Ellipsis className="text-black"/>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent className="w-16">
                                                            <DropdownMenuItem>
                                                                <Pen />
                                                                <span className={"text-base"}>Edit</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Trash2 />
                                                                <span className={"text-base"}>Delete</span>
                                                            </DropdownMenuItem>

                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
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