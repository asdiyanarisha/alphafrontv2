import {Button} from "@/components/ui/button";
import "./styles.css";

const Welcome = () => {
    return (
        <div className="md:mt-24 lg:mt-60 mt-36 text-center h-80 mb-40 lg:mb-40 welcomeClass">
            <div className="flex justify-center items-center py-20">
                <div className="flex flex-col font-sans">
                    <h1 className="text-5xl"><span className="font-bold font-serif">Hello,</span> My name is Risha.
                    </h1>
                    <h1 className="text-5xl">I'm a <span className="font-bold font-serif">Software Engineer</span>.
                    </h1>
                    <p className="text-lg mt-1">Code. Optimize. Scale. Deliver.</p>
                    <div className="flex flex-row mt-5 gap-2 justify-center">
                        <Button className="border-black rounded-none bg-white border-2 text-black hover:text-white">View
                            My Work</Button>
                        <Button className="border-black rounded-none hover:bg-white hover:border-2 hover:text-black">My
                            Latest Blog</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;