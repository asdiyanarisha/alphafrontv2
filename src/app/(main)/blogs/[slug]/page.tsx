'use client'

import { useParams } from "next/navigation";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {GetPublicBlog} from "@/api/blog";
import './styles.css'
import BeatLoader from "react-spinners/BeatLoader";
import Moment from 'moment';

interface BlogData {
    title: string;
    content: string;
    imageUrl: string;
    tags: string[];
    createdAt: string;
}

const DetailBlog: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const { slug } = params;
    const [blogData, setBlogData] = useState<BlogData>(
        {
            title: "",
            content: "",
            imageUrl: "",
            tags: [],
            createdAt: "",
        }
    );

    useEffect(() => {
        const fetchDataPublic = async () => {
            GetPublicBlog(slug).then(r => {
                setTimeout(() => {
                    setBlogData({
                        title: r.data.title,
                        content: r.data.content,
                        imageUrl: process.env.NEXT_PUBLIC_API_HOST + r.data.url_image,
                        tags: r.data.tags,
                        createdAt: Moment(r.createdAt).format("DD MMM YYYY HH:mm"),
                    });

                    setLoading(false);
                }, 350);
            })
        };

        fetchDataPublic().then();

        return () => {};
    }, [slug])

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
            <div className="mx-7 lg:mx-6 mt-20 mb-10 flex-grow">
                <article className="max-w-5xl mx-auto">
                    <header className="mb-14">
                        <h1 className="text-4xl font-sans text-center font-bold leading-normal text-slate-900 mt-0 mb-3 capitalize">{blogData.title}</h1>
                        <div className="text-center">Published on {blogData.createdAt}</div>
                        <div className="mt-3 text-center">
                            {
                                blogData.tags.map((item, index) => (
                                    <Link href="" key={"item-" + index}
                                          className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5">
                                        #{item}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="mt-10 -mx-7 md:mx-0">
                            {blogData.imageUrl && (
                                <Image className="w-full max-w-2xl mx-auto" src={blogData.imageUrl} width="960"
                                       height="500" alt="" priority/>
                            )}
                        </div>
                    </header>
                    <div className="flex items-center justify-center">
                        <div className="content flex flex-col gap-6 text-slate-800 max-w-none font-sans"
                             dangerouslySetInnerHTML={{__html: blogData.content}}
                        />
                    </div>
                </article>
            </div>
        </div>
    )
};

export default DetailBlog;