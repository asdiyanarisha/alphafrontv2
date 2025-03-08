'use client'

import './style.css'

const Projects: React.FC = () => {

    return (
        <div className="mt-10 ml-10 min-h-screen">
            <div className="w-full">
                <div className="my-10 font-sans xl:ml-16 lg:ml-36 ml-20 justify-center">
                    <h1 className="text-4xl font-bold text-slate-600 font-sans">My Projects</h1>
                </div>
                <div className="gap-2 mb-14 w-[1380]">
                    <section className="blog text-gray-700 body-font">
                        <div className="container px-5 py-12 mx-auto">
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                                    {/*<div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>*/}
                                    <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"}}></div>

                                    <div className="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                                        <div className="header-content flex flex-row gap-1">
                                            <div className="inline-flex">
                                                <div
                                                    className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                                                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500"></div>
                                                </div>
                                                <div className="category-title flex-1 text-sm"> GOLANG</div>
                                            </div>
                                            <div className="inline-flex">
                                                <div
                                                    className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-slate-100">
                                                    <div className="h-2 w-2 rounded-full m-1 bg-slate-500"></div>
                                                </div>
                                                <div className="category-title flex-1 text-sm"> MYSQL</div>
                                            </div>
                                        </div>
                                        <div className="mt-1 title-post font-sans font-medium text-base">Komcards</div>
                                        <div className="summary-post text-base text-justify mt-1.5">Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore
                                            possimus iure.
                                            <button
                                                className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
                                            <span className="">Read More</span></button>
                                        </div>

                                    </div>
                                </div>

                                <div
                                    className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                                    {/*<div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1543966888-7c1dc482a810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>*/}
                                    <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"></div>

                                    <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                                        <div className="header-content inline-flex">
                                            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                                                <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 " ></div>
                                            </div>
                                            <div className="category-title flex-1 text-sm"> JS</div>
                                        </div>
                                        <div className="title-post font-medium">Mon titre</div>

                                        <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                                            <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Lire plus</span></button>
                                        </div>

                                    </div>
                                </div>

                                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                                    {/*<div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style="background-image: url(https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"></div>*/}
                                    <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"></div>

                                    <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                                        <div className="header-content inline-flex ">
                                            <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                                                <div className="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                                            </div>
                                            <div className="category-title flex-1 text-sm"> Vue</div>
                                        </div>
                                        <div className="title-post font-medium">Mon titre</div>

                                        <div className="summary-post text-base text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore possimus iure.
                                            <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"><span className="">Lire plus</span></button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Projects;