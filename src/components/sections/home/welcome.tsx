'use client'

import "./styles.css";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const Welcome = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Backend Engineer.", "Software Engineer.", "Fullstack Engineer.", "Data Engineer.", "Crawler Engineer."],
        []
    );
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="md:mt-24 lg:mt-60 mt-36 text-center h-80 mb-40 lg:mb-40 welcomeClass">
            <div className="flex justify-center items-center py-20">
                <div className="flex flex-col font-sans">
                    <h1 className="text-5xl"><span className="font-bold font-serif">Hello,</span> My name is <span className="font-semibold">Risha</span>.
                    </h1>
                    <h1 className="text-5xl flex lg:flex-row flex-col mt-1 lg:ml-7 ml-1">
                        <span className="font-serif">I'm a </span>
                        <span
                            className="relative font-serif flex overflow-hidden text-center lg:pl-3 pl-8 pb-[60] pr-[435] whitespace-nowrap">
                        {titles.map((title, index) => (
                            <motion.span
                                key={index}
                                className="absolute font-semibold text-center"
                                initial={{opacity: 0, y: "-100"}}
                                transition={{type: "spring", stiffness: 50}}
                                animate={
                                    titleNumber === index
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                        }
                                        : {
                                            y: titleNumber > index ? -150 : 150,
                                            opacity: 0,
                                        }
                                }
                            >
                                {title}
                            </motion.span>
                        ))}
                        </span>
                    </h1>
                    <p className="text-lg mt-1">Code. Optimize. Scale. Deliver.</p>
                    <div className="flex flex-row mt-5 gap-2 justify-center">
                        <Link href={`#about-me`}
                              className="text-sm px-4 py-1.5 hover:bg-black border-black rounded-none bg-white border-2 text-black hover:text-white align-middle">
                            <span className="mt-10">About Me</span></Link>
                        <Link href={`/blogs`}
                              className="text-sm px-4 py-1.5 hover:bg-white border-black rounded-none bg-black border-2 text-white hover:text-black align-middle">My
                            Latest Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;