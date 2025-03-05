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
                <div className="flex flex-col font-sans mt-10 mb-5">
                    <h1 className="text-4xl font-bold text-slate-700">My Work</h1>
                    <span className="mt-1 ml-1 text-slate-600 text-base">This section is for my journey</span>
                </div>
                <ul className="divide-y font-sans">
                    {
                        MyWorks.map((item, index) => (
                            <li className="flex flex-col my-1 bg-slate-100 mb-6 rounded-md shadow-md" key={"work-" + index}>
                                <div className="m-5">
                                    <div className="flex justify-between mt-1">
                                        <div className="font-bold text-lg text-slate-800">{item.companyName}</div>
                                    </div>
                                    {
                                        item.histories.map((history, historiesIndex) => (
                                            <div id="histories" className="" key={"history-" + historiesIndex}>
                                                <div className="flex justify-between mt-1 mb-2 text-slate-700">
                                                    <div
                                                        className="mt-3 text-base capitalize">{history.role}</div>
                                                    <div className="text-base italic">{history.period}</div>
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
                                            </div>
                                        ))
                                    }
                                    <div className="mt-3 text-sm flex flex-row mb-3">
                                        <span className="text-base font-medium mr-2 mt-1">Skills : </span>
                                        <ul className="flex flex-row gap-1.5 text-white">
                                            {
                                                item.skills.map((skill, indexSkill) => (
                                                    <li className="bg-black rounded p-1 px-2"
                                                        key={"skill-" + indexSkill}>
                                                        <span>{skill}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Works;