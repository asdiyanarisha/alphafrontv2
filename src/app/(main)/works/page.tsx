"use client"

import {MyWorks} from "@/data/works";
import React, {useEffect, useRef, useState} from "react";

const Works: React.FC = () => {
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
        <div className={`w-3/4 px-24 pt-10 mb-8 global-fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            <div className="flex flex-col xl:ml-1 lg:ml-36 ml-12">
                {/*<h1 className="text-xl font-bold mt-8">My Work</h1>*/}
                <div className="flex flex-col font-sans mt-10">
                    <h1 className="text-4xl font-bold text-slate-700">My Work</h1>
                    <span className="mt-1 ml-1 text-slate-600">This section is about my histories</span>
                </div>
                <ul className="divide-y font-sans">
                    {
                        MyWorks.map((item, index) => (
                            <li className="flex flex-col my-8" key={"work-" + index}>
                                <div className="flex justify-between mt-3">
                                    <div className="font-bold text-lg">{item.companyName}</div>
                                </div>
                                {
                                    item.histories.map((history, historiesIndex) => (
                                        <div id="histories" className="mt-1" key={"history-" + historiesIndex}>
                                            <div className="flex justify-between mt-3 mb-2">
                                                {/*<div className="text-xs">{item.period}</div>*/}
                                                <div className="mt-3 text-base text-slate-700">{history.role}</div>
                                                <div className="text-base">{history.period}</div>
                                            </div>
                                            <ul className="mt-2 list-disc pl-10 text-base font-normal mb-5">
                                            {
                                                    history.descriptions.map((desc, indexDesc) => (
                                                        <li className="my-2.5" key={"desc-" + indexDesc}>
                                                            {desc}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="mt-3 text-sm">
                                                <ul className="flex flex-row gap-1.5 text-white">
                                                    {
                                                        history.skills.map((skill, indexSkill) => (
                                                            <li className="bg-black rounded p-1 px-2"
                                                                key={"skill-" + indexSkill}>
                                                                <span>{skill}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Works;