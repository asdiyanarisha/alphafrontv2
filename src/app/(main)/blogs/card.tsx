import React from "react";
import Link from "next/link";
import Image from "next/image";
import {Blog} from "@/app/(main)/blogs/page";


const CardBlog = ({ d }: {d: Blog}) => {

    return (
        <div className="rounded-3xl xl:basis-1/4 lg:basis-1/3 self-stretch mx-1 mb-2 hover:shadow-2xl border shadow-lg border-1">
            <div className="h-full">
                <Link href={'/blogs/' + d.slug} className="">
                    <div className="relative w-full">
                        <Image className="m-0 lazy rounded-2xl h-52 w-96" src={d.url_image}
                               width={400}
                               height={30}
                               quality={75} alt=""
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
    );
}

export default CardBlog;