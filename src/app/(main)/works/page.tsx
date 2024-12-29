"use client"

import {MyWorks} from "@/data/works";
import {useEffect, useRef, useState} from "react";

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
            <div className="flex flex-col">
                <h1 className="text-xl font-bold mt-8">My Work</h1>
                <ul className="divide-y font-sans">
                    {
                        MyWorks.map((item, index) => (
                            <li className="flex flex-col mb-5" key={"work-" + index}>
                                <div className="flex justify-between mt-8">
                                    <div className="font-bold">{item.companyName}</div>
                                    <div className="text-xs">{item.period}</div>
                                </div>
                                <div className="mt-3 text-sm">{item.role}</div>
                                <ul className="mt-2 list-disc pl-10 text-sm">
                                    {
                                        item.descriptions.map((desc, indexDesc) => (
                                            <li className="mt-1.5"  key={"desc-" + indexDesc}>
                                                {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="mt-3 text-xs">
                                    <ul className="flex flex-row gap-1.5 text-white">
                                        {
                                            item.skills.map((skill, indexSkill) => (
                                                <li className="bg-black rounded p-1 px-2" key={"skill-" + indexSkill}>
                                                    <span>{skill}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
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