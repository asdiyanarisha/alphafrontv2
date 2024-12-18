import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";


const Summary = () => {
    return (
        <div className="mt-52 pt-36 shadow-2xl">
            <div className="flex items-center justify-center font-sans bg-black text-white">
                <div className="w-1/2 my-20">
                    <div className="flex flex-row justify-center">
                        <Avatar className="w-[10rem] h-[10rem]">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/19662749?v=4"/>
                            <AvatarFallback>RAR</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-row justify-center my-5">
                        <div className="w-full md:w-3/4 md:text-justify text-center">
                            <p className="text-xl text-wrap">As a backend engineer, I specialize in developing secure,
                                scalable,
                                and
                                high-performance server-side systems. From API development to database optimization, I
                                ensure
                                your applications run flawlessly while supporting your business goals. My expertise
                                lies
                                in
                                languages like Golang, Python, and Node.js, with a focus on delivering clean,
                                maintainable
                                code.</p>
                        </div>
                    </div>
                    <div className="flex pt-6 pb-3 justify-center" id="icon">
                        <div className="flex flex-row gap-4 w-1/2 justify-center">
                            <LinkedInLogoIcon className="h-8 w-8"/>
                            <GitHubLogoIcon className="h-8 w-8"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;