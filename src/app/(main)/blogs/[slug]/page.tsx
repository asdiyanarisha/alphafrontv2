'use client'

import { useParams } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const DetailBlog: React.FC = () => {
    const params = useParams();
    const { slug } = params;

    return (
        <div className="mx-7 lg:mx-6 mt-20 mb-10 flex-grow">
            <article className="max-w-5xl mx-auto">
                <header className="mb-14">
                    <h1 className="text-3xl text-center font-bold leading-normal text-slate-900 mt-0 mb-3">Typhography</h1>
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
                <div className="flex flex-col gap-6 text-slate-800 max-w-none indent-8 font-sans">
                    <p>Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilse impedit quo minus id quod amets untra dolor amet sad. Sed ut perspser iciatis unde omnis iste natus error sit voluptatem accusantium doloremque laste. Dolores sadips ipsums sits.</p>
                    <p>Nunc tristique velit ligula. Phasellus vel massa a lorem facilisis interdum ut ac erat. Sed convallis a nisi non elementum. Vivamus ac ultricies dolor. Fusce in erat rhoncus, ultrices ante placerat, vulputate odio. Aliquam porta varius enim vitae tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur augue mauris, in scelerisque mauris dictum nec. Pellentesque a venenatis est. Curabitur ut quam tempus, dictum elit nec, vehicula dui. Nunc vestibulum lorem ac finibus consequat.</p>
                </div>
            </article>
        </div>
    )
};

export default DetailBlog;