import Welcome from "@/components/sections/home/welcome"
import Summary from "@/components/sections/home/summary";
import Headline from "@/components/sections/home/headline";

export default function Home() {
  return (
      <>
          <div className="flex flex-col items-center justify-center mb-auto">
              <Welcome/>
              <Summary/>
              <Headline/>
          </div>
      </>

  )
      ;
}
