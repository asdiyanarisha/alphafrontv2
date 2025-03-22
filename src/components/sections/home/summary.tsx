'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon} from "@radix-ui/react-icons";
import {useEffect, useRef, useState} from 'react';
import "./styles.css";
import Link from "next/link";
import {MyWorksNew} from "@/data/works";

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
        <div ref={domRef} className={`mt-52 pt-36 shadow-2xl mb-10 fade-in-section ${isVisible ? 'is-visible' : ''}`} id="about-me">
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

                        {
                            MyWorksNew.map((item, index) => (
                                <div key={index}
                                    className="content-summary hover:bg-gradient-to-br hover:from-neutral-900 hover:to-gray-600 hover:drop-shadow-2xl hover:rounded-xl hover:border-b-gray-900 mt-5">
                                    <Link href={item.url} target="_blank" className="m-5 mt-3">
                                        <div className="flex flex-col lg:flex-row mb-5 mt-3" id="experience">
                                            <div className="lg:w-1/4 text-base">
                                                <span>{item.period}</span>
                                            </div>
                                            <div className="lg:w-3/4 flex flex-col">
                                                <h2 className="text-base font-semibold">
                                                    {item.title}
                                                </h2>
                                                <p className="text-wrap mt-1.5 text-base leading-6">
                                                    {item.description}
                                                </p>
                                                <div
                                                    className="mt-5 w-full flex flex-row flex-wrap gap-1.5 text-amber-50 font-sans">
                                                    {
                                                        item.skills.map((skill, skillIdx) => (
                                                            <div key={skillIdx}
                                                                className="bg-gray-600 rounded-xl p-1 px-2 text-sm">
                                                                {skill}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                    <div className="">
                        <div className="w-full flex justify-center my-10">
                            <h2 className="text-2xl font-semibold text-slate-300">Let's Connect Me!</h2>
                        </div>
                        <div className="flex pb-3 justify-center" id="let-connect">
                            <div className="flex flex-row gap-5 w-1/2 justify-center">
                                <Link href="https://www.linkedin.com/in/asdiyanarisha/" target="_blank" className="bg-white hover:border-white hover:bg-black rounded-full">
                                    <LinkedInLogoIcon className="h-12 w-12 p-2 text-black hover:text-white"/>
                                </Link>
                                <Link href="#let-connect" onClick={() => window.location = 'mailto:asdiyanarisha@gmail.com'} className="bg-white hover:border-white hover:bg-black rounded-full">
                                    <EnvelopeClosedIcon className="h-12 w-12 p-2 text-black hover:text-white"/>
                                </Link>
                                <Link href="https://github.com/asdiyanarisha" target="_blank" className="bg-white hover:border-white hover:bg-black rounded-full">
                                    <GitHubLogoIcon className="h-12 w-12 p-2 text-black hover:text-white"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;