import { LuPresentation } from "react-icons/lu"
import { PiChats } from "react-icons/pi"
import { RiContactsBook2Line } from "react-icons/ri"



const Stay = () => {
  return (
    <div className="text-black flex flex-col justify-between gap-8 items-top p-10">
        <div className="">
            <div className="text-2xl lg:text-5xl sectionHeader">
                We 
                <span className="text-[#F36F2B]"> stay connected</span>
            </div>
        </div>
        <div className="sectionSpacing">
            <LuPresentation />
            <div className="sectionBody text-sm">
                Quarterly Business Updates
            </div>
        </div>
        <div className="flex justify-between items-center gap-2">
            <div className="w-full h-full">

            </div>
            <div className="sectionPara text-sm px-2 text-left">
                We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn&#39;t just a benefit—it&#39;s essential.
            </div>
        </div>
        <div className="sectionSpacing">
            <PiChats />
            <div className="sectionBody text-sm">
                Industry Events & Networking
            </div>
        </div>
        <div className="sectionSpacing">
            <RiContactsBook2Line />
            <div className="sectionBody text-sm">
                Associations Memberships
            </div>
        </div>
    </div>
  )
}

export default Stay