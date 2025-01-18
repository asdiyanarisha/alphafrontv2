import Welcome from "@/components/sections/home/welcome"
import Summary from "@/components/sections/home/summary";
import Headline from "@/components/sections/home/headline";
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
                  <Headline/>
              </div>
          <Footer/>
      </>

  )
      ;
}
