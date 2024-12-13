import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
      <div className="md:mb-0 lg:mt-36 mt-10 relative z-10 mb-8 text-center">
          <div className="flex justify-center items-center">
              <div className="flex-row font-sans">
                  <h1 className="text-5xl"><span className="font-bold font-mono">Hello,</span> My name is Risha.</h1>
                  <h1 className="text-5xl">I'm a <span className="font-bold font-mono">Backend Engineer.</span></h1>
                  <div className="flex items-center justify-center font-sans mt-5 w-1/2">
                      <div>
                          <Avatar className="w-[10rem] h-[10rem]">
                              <AvatarImage src="https://avatars.githubusercontent.com/u/19662749?v=4" />
                              <AvatarFallback>RAR</AvatarFallback>
                          </Avatar>
                      </div>
                      <div className="w-1/2">
                          <p className="text-xl">As a backend engineer, I specialize in developing secure, scalable, and
                              high-performance server-side systems. From API development to database optimization, I
                              ensure
                              your applications run flawlessly while supporting your business goals. My expertise lies
                              in
                              languages like Golang, Python, and Node.js, with a focus on delivering clean, maintainable
                              code.</p>
                      </div>
                  </div>
                  <Button>Here you arround</Button>
              </div>
          </div>
      </div>

  );
}
