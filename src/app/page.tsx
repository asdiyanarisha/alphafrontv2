import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
      <>
          <div className="md:mt-24 lg:mt-60 mt-36 text-center h-80 mb-40 lg:mb-40">
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

          <div className="mt-52 pt-36">
              <div className="flex items-center justify-center font-sans bg-black text-white">
                  <div className="w-1/2 my-20">
                      <div className="flex flex-row justify-center">
                          <Avatar className="w-[10rem] h-[10rem]">
                              <AvatarImage src="https://avatars.githubusercontent.com/u/19662749?v=4"/>
                              <AvatarFallback>RAR</AvatarFallback>
                          </Avatar>
                      </div>
                      <div className="my-5">
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
                      <div className="flex pt-6 pb-3 justify-center" id="icon">
                          <div className="flex flex-row gap-4 w-1/2 justify-center">
                              <LinkedInLogoIcon className="h-8 w-8"/>
                              <GitHubLogoIcon className="h-8 w-8"/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>

  )
      ;
}
