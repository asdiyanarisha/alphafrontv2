import Image from 'next/image'
import Link from "next/link";

const Blogs: React.FC = () => {
    return (
        <div className="my-20 container flex justify-center">
            <div className="w-4/5 flex flex-row">
                <div className="w-3/4" id="list-blog">
                    <h1>Blogs</h1>
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <Link href="/blogs/cobagas">
                                    <Image className="w-full m-0 rounded-t lazy" src="/typography.png" width="100"
                                           height="100" alt=""></Image>
                                </Link>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <Link href="/blogs/cobagas" className="text-slate-900 font-bold hover:text-slate-700">Typhography</Link>
                                    </div>
                                    <p className="text-slate-700 mb-1.5">
                                        21 June 2020 08:04 AM
                                    </p>
                                    <p className="text-slate-800">
                                        Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi
                                        distincti...
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <Link href="">
                                    <Image className="w-full m-0 rounded-t lazy" src="/typography.png" width="100"
                                           height="100" alt=""></Image>
                                </Link>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <Link href="" className="text-slate-900 hover:text-slate-700">Typhography</Link>
                                    </div>
                                    <p className="text-slate-700 mb-1">
                                        21 June 2020 08:04 AM
                                    </p>
                                    <p className="text-slate-800">
                                        Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi
                                        distincti...
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="w-1/4" id="list category">
                    <h1>Categories</h1>
                </div>
            </div>
        </div>
    )
}

export default Blogs;