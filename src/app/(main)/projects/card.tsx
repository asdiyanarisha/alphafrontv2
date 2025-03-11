export interface Project {
    projectName: string;
    desc: string;
    imgUrl: string;
    tags: string[];
}

const ProjectsCard = ({ item }: {item: Project}) => {

    return (
        <div
            className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm">
            <div
                className={"bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"}
                style={{ backgroundImage: `url(${item.imgUrl})` }}
            ></div>

            <div className="w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5 h-64">
                <div className="header-content flex flex-row gap-1">
                    <div className="inline-flex">
                        <div
                            className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                            <div className="h-2 w-2 rounded-full m-1 bg-blue-500"></div>
                        </div>
                        <div className="category-title flex-1 text-sm"> Go</div>
                    </div>
                    <div className="inline-flex">
                        <div
                            className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-slate-100">
                            <div className="h-2 w-2 rounded-full m-1 bg-slate-500"></div>
                        </div>
                        <div className="category-title flex-1 text-sm"> MySQL</div>
                    </div>
                    <div className="inline-flex">
                        <div
                            className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-orange-100">
                            <div className="h-2 w-2 rounded-full m-1 bg-orange-500"></div>
                        </div>
                        <div className="category-title flex-1 text-sm"> RabbitMQ</div>
                    </div>
                </div>
                <div className="mt-1 title-post font-sans font-medium text-base">{item.projectName}</div>
                <div className="summary-post text-base text-justify my-1.5">
                    {item.desc}
                </div>

            </div>
        </div>
    );
}

export default ProjectsCard;