'use client'

import './style.css'
import ProjectsCard from "@/app/(main)/projects/card";

const Projects: React.FC = () => {

    return (
        <div className="mt-10 ml-10 min-h-screen">
            <div className="w-full">
                <div className="my-10 font-sans xl:ml-2 lg:ml-36 ml-20 justify-center">
                    <h1 className="text-4xl font-bold text-slate-600 font-sans">My Projects</h1>
                </div>
                <div className="gap-2 mb-14 xl:w-[1380]">
                    <section className="blog text-gray-700 body-font">
                        <div className="container px-5 py-12 mx-auto">
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <ProjectsCard/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Projects;