import Welcome from "@/components/sections/home/welcome"
import Summary from "@/components/sections/home/summary";
import MySkill from "@/components/sections/home/my-skill";

export default function Home() {
  return (
      <>
          <div className="flex flex-col items-center justify-center">
              <Welcome/>
              <Summary/>
              <MySkill/>
          </div>
      </>

  )
      ;
}
