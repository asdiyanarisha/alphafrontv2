'use client'
import Image from "next/image";
import {usePathname} from "next/navigation";

const Footer = () => {
    let pathName = usePathname() || '';
    const pathNameSplit = pathName.split("/")
    if (pathNameSplit.length > 2) {
        pathName = "/" + pathNameSplit[1]
    }

    return (
        <section className="flex justify-center mt-auto">
            <div className="lg:w-2/3 w-full bg-black rounded-t-lg shadow-lg">
                <footer className="row-start-3 mt-4 mb-3 pt-1">
                    <div className="flex flex-row justify-between lg:items-center mx-20 text-sm font-sans">
                        <div className="text-white">© 2024 By Risha Asdiyana Rifi | All Right Reserved.</div>
                        <div className="flex flex-row text-white gap-2">
                            <div className="mt-1">
                                Made with
                            </div>
                            <div className="w-20">
                                <Image className="rounded-full border border-gray-300 bg-white" src="/nextjs.svg" alt="" width="30" height="30"/>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;
