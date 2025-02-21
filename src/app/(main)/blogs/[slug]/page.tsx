'use client'

import { useParams } from "next/navigation";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {GetPublicBlog} from "@/api/blog";
import './styles.css'

interface BlogData {
    title: string;
    content: string;
    imageUrl: string;
}

const DetailBlog: React.FC = () => {
    const params = useParams();
    const { slug } = params;
    const [blogData, setBlogData] = useState<BlogData>(
        {
            title: "",
            content: "",
            imageUrl: "",
        }
    );

    useEffect(() => {
        const fetchDataPublic = async () => {
            GetPublicBlog(slug).then(r => {
                setBlogData({title: r.data.title, content: r.data.content, imageUrl: r.data.url_image});
            })
        };

        fetchDataPublic().then();

        return () => {};
    }, [slug])

    return (
        <div className="mx-7 lg:mx-6 mt-20 mb-10 flex-grow">
            <article className="max-w-5xl mx-auto">
                <header className="mb-14">
                    <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">{ blogData.title }</h1>
                    <div className="text-center">Published on 21 June 2020 08:04 AM</div>
                    <div className="mt-3 text-center">
                        <Link href="" className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5">#popular</Link>
                        <Link href="" className="inline-block bg-slate-200 rounded-full px-3 py-1 text-sm font-medium text-slate-700 m-0.5">#sample</Link>
                    </div>
                    <div className="mt-10 -mx-7 md:mx-0">
                        <Image className="w-full max-w-2xl mx-auto" src="/typography.png" width="960"
                               height="500" alt=""></Image>
                    </div>
                </header>
                <div className="content flex flex-col gap-6 text-slate-800 max-w-none indent-8 font-sans"
                     dangerouslySetInnerHTML={{__html: blogData.content}}
                />
            </article>
        </div>
    )
};

export default DetailBlog;