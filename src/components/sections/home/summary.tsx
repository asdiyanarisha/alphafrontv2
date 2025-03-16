'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon} from "@radix-ui/react-icons";
import {useEffect, useRef, useState} from 'react';
import "./styles.css";
import Link from "next/link";

const Summary = () => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

    }, []);

    return (
        <div ref={domRef} className={`mt-52 pt-36 shadow-2xl fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center justify-center font-sans bg-black text-white">
                <div className="xl:w-1/2 my-20 mt-20 w-full">
                    <div className="flex flex-row justify-center">
                        <Avatar className="w-[10rem] h-[10rem]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/19662749?v=4"/>
                            <AvatarFallback>RAR</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col justify-center my-5 font-sans">
                        <div className="w-full flex justify-center my-10">
                            <h2 className="text-2xl font-semibold text-slate-300">About Me</h2>
                        </div>
                        <div
                            className="content-summary">
                            <p className="text-wrap">
                                Hello my name Risha Asdiyana Rifi, and you can call me Risha :).
                                I am a software engineer with 8+ years eperiences in full-stack development.
                                with experties in Go, Python, NodeJs, Java, React, Docker, MongoDB and Sql Databases.
                                Experienced in troubleshooting and optimizing application performance to ensure seamless
                                user experiences.
                            </p>
                            <p className="text-wrap mt-8">
                                Currently, I’m a Senior Backend Engineer at&nbsp;
                                <Link href="https://komerce.id" target="_blank"
                                      className="font-bold hover:bg-white hover:text-black text-white">Komerce</Link>
                                , where I have contributed to the development of multiple products, including&nbsp;
                                <Link href="https://www.komcards.id/" target="_blank"
                                      className="font-bold hover:bg-white hover:text-black text-white">Komcards</Link>
                                —a virtual debit card platform designed to simplify online payments for businesses.
                                I focus on building scalable backend architectures, integrating secure payment APIs,
                                and optimizing performance load process api.
                            </p>
                            <p className="text-wrap mt-8">
                                Outside of work, I enjoy staying up to date with emerging technologies and have built
                                side projects exploring frontend technologies such as react and tailwind.
                            </p>
                        </div>
                    </div>
                    <div className="py-14">
                        <div className="w-full flex justify-center my-10">
                            <h2 className="text-2xl font-semibold text-slate-300">My Experience</h2>
                        </div>
                        <div
                            className="content-summary">
                            <Link href="https://komerce.id" target="_blank">
                                <div className="flex flex-col lg:flex-row mb-5" id="experience">
                                    <div className="lg:w-1/4 text-base">
                                        <span>2023 — Present</span>
                                    </div>
                                    <div className="lg:w-3/4 flex flex-col">
                                        <h2 className="text-base font-semibold">
                                            <div className="hover:text-black hover:bg-white">
                                                Senior Backend Engineer - Komerce
                                            </div>
                                        </h2>
                                        <p className="text-wrap mt-1 text-base">
                                            Outside of work, I enjoy staying up to date with emerging technologies and
                                            have
                                            built
                                            side projects exploring frontend technologies such as react and tailwind.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="py-14">
                        <div className="w-full flex justify-center my-10">
                            <h2 className="text-2xl font-semibold text-slate-300">Let's be Connect!</h2>
                        </div>
                        <div className="flex pb-3 justify-center" id="icon">
                            <div className="flex flex-row gap-4 w-1/2 justify-center">
                                <LinkedInLogoIcon className="h-8 w-8"/>
                                <GitHubLogoIcon className="h-8 w-8"/>
                                <EnvelopeClosedIcon className="h-8 w-8"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;