import Welcome from "@/components/sections/home/welcome"
import Summary from "@/components/sections/home/summary";
import Navbar from "@/components/sections/navbar/navbar";
import React from "react";
import Footer from "@/components/sections/footer/footer";

export default function Home() {
  return (
      <>
          <Navbar/>
          <div className="flex flex-col items-center justify-center mb-auto">
              <Welcome/>
              <Summary/>

              {/*<div className="py-14 w-2/3">*/}
              {/*    <div className="w-full flex justify-center my-10">*/}
              {/*        <h2 className="text-2xl font-bold text-slate-900">Let's be Connect!</h2>*/}
              {/*    </div>*/}
              {/*    <div className="flex pb-3 justify-center" id="icon">*/}
              {/*        <div className="flex flex-row gap-4 w-1/2 justify-center">*/}
              {/*            <LinkedInLogoIcon className="h-8 w-8"/>*/}
              {/*            <GitHubLogoIcon className="h-8 w-8"/>*/}
              {/*            <EnvelopeClosedIcon className="h-8 w-8"/>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
          </div>
          <Footer/>
      </>

  )
      ;
}
