import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Blog} from "@/app/(main)/blogs/page";
import Moment from 'moment';


const CardBlog = ({ d }: {d: Blog}) => {
    return (
        <div className="rounded-3xl xl:basis-1/4 lg:basis-1/3 self-stretch mx-1 mb-2 hover:shadow-2xl border shadow-lg border-1">
            <div className="h-full">
                <Link href={'/blogs/' + d.slug} className="">
                    <div className="relative w-full">
                        <Image className="m-0 lazy rounded-t-2xl h-52 w-96" src={d.url_image}
                               width={400}
                               height={30}
                               quality={75} alt=""
                               style={{
                                   objectFit: 'cover',
                               }}
                        />
                    </div>
                </Link>

                <div className="px-5 py-4">
                    <div className="flex flex-col mb-2">
                        <Link href={'/blogs/' + d.slug}
                              className="font-sans text-xl text-slate-800 font-medium hover:text-slate-600 capitalize">{d.title}</Link>
                    </div>
                    <div className="my-1 h-20 md:h-30 text-base text-slate-900 text-wrap">
                        <p>{d.description}</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-base text-slate-500 my-2">
                            {Moment(d.created_at).format("DD MMM YYYY")}
                        </p>
                        <p className="text-base text-slate-500 my-2">
                            {d.tags.join(",")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardBlog;