'use client'

import Image from 'next/image'
import Link from "next/link";
import {useEffect, useState} from "react";
import {GetPublicBlogs} from "@/api/blog";
import Moment from "moment/moment";

interface Blog {
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
                setTimeout(() => {
                    r.data.forEach((d: Blog) => {
                        d.url_image = process.env.NEXT_PUBLIC_API_HOST + d.url_image

                        setBlogsData(prevState => ({
                            results: [...prevState.results, d],
                        }));

                    })
                }, 350);
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
                                <div key={"item-" + index}
                                     className="rounded-3xl w-full sm:w-1/2 md:w-1/3 self-stretch mb-2 hover:shadow-2xl border">
                                    <div className="h-full">
                                        <Link href={'/blogs/' + d.slug} className="">
                                            <div className="relative w-full">
                                                <Image className="w-full m-0 lazy rounded-2xl" src={d.url_image}
                                                       width={100}
                                                       height={100}
                                                       quality={100} alt=""
                                                       style={{
                                                           objectFit: 'cover',
                                                       }}
                                                />
                                            </div>

                                        </Link>
                                        <div className="px-6 py-5">
                                            <div className="flex flex-col mb-2">
                                                <Link href={'/blogs/' + d.slug}
                                                      className="font-sans text-xl text-slate-800 font-medium hover:text-slate-600">{d.title}</Link>
                                            </div>
                                            <p className="text-base text-slate-900">
                                                Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                                expeditasi
                                                distincti...
                                            </p>
                                            <div className="flex flex-row justify-between">
                                                <p className="text-base text-slate-500 my-2">
                                                    21 June 2020
                                                </p>
                                                <p className="text-base text-slate-500 my-2">
                                                    Golang, Database
                                                </p>
                                                {/*<span className="text-slate-500 font-normal hover:text-slate-400"></span>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;