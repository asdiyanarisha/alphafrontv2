'use client'

import React, {useEffect, useState} from "react";
import {GetPublicBlogs} from "@/api/blog";
import CardBlog from "@/app/(main)/blogs/card";

export interface Blog {
    title: string;
    slug: string;
    url_image: string;
    tags: string[];
    createdAt: string;
}

interface ResponseBlogs {
    results: Blog[]
}

const Blogs: React.FC = () => {
    const [blogsData, setBlogsData] = useState<ResponseBlogs>(
        {results: []}
    );

    useEffect(() => {
        const fetchDatasPublic = async () => {
            GetPublicBlogs().then(r => {
                r.data.forEach((d: Blog) => {
                    d.url_image = process.env.NEXT_PUBLIC_API_HOST + d.url_image

                    setBlogsData(prevState => ({
                        results: [...prevState.results, d],
                    }));

                })
            })
        };

        fetchDatasPublic().then();

        return () => {};
    }, [])

    return (
        <div className="mt-20 min-h-screen container flex flex-row justify-center">
            <div className="w-3/4 flex flex-row">
                <div className="w-full" id="list-blog">
                    <div className="flex flex-col my-10 font-sans">
                        <h1 className="text-4xl font-bold text-slate-700">Blogs</h1>
                        <span className="mt-1 ml-1 text-slate-600">Collection of My Stories</span>
                    </div>
                    <div className="flex flex-wrap grid-cols-3 gap-5">
                        {
                            blogsData.results.map((d, index) => (
                                <CardBlog key={index} d={d}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;