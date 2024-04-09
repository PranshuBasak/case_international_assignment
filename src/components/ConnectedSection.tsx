import { LuPresentation } from "react-icons/lu"
import { PiChats } from "react-icons/pi"
import { RiContactsBook2Line } from "react-icons/ri"



const Stay = () => {
  return (
    <div className="text-black flex flex-col justify-between gap-5 md:gap-10 lg:gap-20 items-top p-10">
        <div className="text-2xl lg:text-6xl sectionHeader">
            We 
            <span className="text-[#F36F2B]"> stay connected</span>
        </div>
        <div className="sectionSpacing">
            <LuPresentation size={20}/>
            <div className="sectionBody text-sm md:text-lg lg:text-2xl">
                Quarterly Business Updates
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
            <div className="w-full h-full">

            </div>
            <div className="sectionPara text-sm lg:text-xl px-2 text-left">
                We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn&#39;t just a benefit—it&#39;s essential.
            </div>
        </div>
        <div className="sectionSpacing">
            <PiChats />
            <div className="sectionBody text-sm md:text-lg lg:text-2xl">
                Industry Events & Networking
            </div>
        </div>
        <div className="sectionSpacing pb-2 md:pb-10 lg:pb-20">
            <RiContactsBook2Line />
            <div className="sectionBody text-sm md:text-lg lg:text-2xl">
                Associations Memberships
            </div>
        </div>
    </div>
  )
}

export default Stay