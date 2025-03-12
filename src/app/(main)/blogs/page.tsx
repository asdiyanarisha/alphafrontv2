'use client'

import React, {useEffect, useState} from "react";
import {GetPublicBlogs} from "@/api/blog";
import CardBlog from "@/app/(main)/blogs/card";
import BeatLoader from "react-spinners/BeatLoader";

export interface Blog {
    title: string;
    slug: string;
    url_image: string;
    description: string;
    tags: string[];
    created_at: string;
}

interface ResponseBlogs {
    results: Blog[]
}

const Blogs: React.FC = () => {
    const [blogsData, setBlogsData] = useState<ResponseBlogs>(
        {results: []}
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDatasPublic = async () => {
            GetPublicBlogs().then(r => {

                setTimeout(() => {
                    r.data.forEach((d: Blog) => {
                        d.url_image = process.env.NEXT_PUBLIC_API_HOST + d.url_image

                        setBlogsData(prevState => ({
                            results: [...prevState.results, d],
                        }));
                        setLoading(false);
                    })
                }, 350)
            })
        };

        fetchDatasPublic().then();

        return () => {};
    }, [])

    return (
        <div>
            {
                loading && (
                    <div className="overlay-global flex justify-center">
                        <BeatLoader
                            size={10}
                            loading={loading}
                            color={"#62748e"}
                        />
                    </div>
                )
            }
            <div className="mt-10 ml-10 min-h-screen container flex flex-row justify-center">
                <div className="flex flex-row">
                    <div className="w-full" id="list-blog">
                        <div className="flex flex-col my-10 font-sans xl:ml-36 lg:ml-36 ml-12">
                            <h1 className="text-4xl font-bold text-slate-700">Blogs</h1>
                            <span className="mt-1 ml-1 text-slate-600">Collection of My Stories</span>
                        </div>
                        <div className="flex flex-wrap gap-8 mb-14 justify-center">
                            {
                                blogsData.results.map((d, index) => (
                                    <CardBlog key={index} d={d}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;