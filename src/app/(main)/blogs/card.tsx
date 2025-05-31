import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Blog} from "@/api/models/blog";
import Moment from 'moment';


const CardBlog = ({ d }: {d: Blog}) => {
    return (
        <div className="rounded-2xl w-80 mx-2 mb-6 hover:shadow-2xl border border-slate-600 shadow-lg overflow-hidden">
            <div className="h-full">
                <Link href={'/blogs/' + d.slug}>
                    <div className="relative w-full h-48 overflow-hidden">
                        <Image src={d.url_image} alt="" fill quality={75} className="object-cover" />
                    </div>
                </Link>
                <div className="px-5 py-4">
                    <div className="font-mono text-base text-slate-700 italic">
                        <span>
                            {Moment(d.created_at).format("MMM DD,YYYY")}
                        </span>
                    </div>
                    <div className="flex flex-col mb-2">
                        <Link href={'/blogs/' + d.slug}
                              className="font-sans text-xl text-slate-800 font-semibold hover:text-slate-600 capitalize">{d.title}</Link>
                    </div>
                    <div className="h-20 md:h-30 text-base text-slate-900 text-wrap">
                        <p>{d.description}</p>
                    </div>
                    <div className="flex flex-row justify-end">
                        <div className="flex gap-1 text-base text-white">
                            {
                                d.tags.map((val, indexTag) => (
                                    <div key={"tag-"+indexTag}
                                    className="bg-black rounded-3xl capitalize border border-solid border-slate-950">
                                        <span className="m-3">
                                            #{val}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBlog;