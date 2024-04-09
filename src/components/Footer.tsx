import { Custom } from "./arrow"



const Footer = () => {
  return (
    <div className="bg-white flex flex-col gap-[1px]">
        <div className="flex flex-col lg:flex-row justify-center items-top gap-[1px] ">
            <div className="w-full lg:w-1/2 flex justify-center items-center p-10 bg-black">
                <img src="/assets/icon.svg" alt="" />
            </div>
            <div className="w-full lg:w-1/2 p-10 bg-black">
                <h2 className="py-2">Expertise</h2>
                <p className="sectionPara4">Design</p>
                <p className="sectionPara4">Specialist Expertise</p>
                <p className="sectionPara4">Commercial Advice</p>
                <p className="sectionPara4">Traffic & Transport</p>
            </div>
            <div className="w-full lg:w-1/3 p-10 bg-black">
                <h2 className="py-2">Sectors</h2>
                <p className="sectionPara4">Road</p>
                <p className="sectionPara4">Tunner</p>
                <p className="sectionPara4">Bridge</p>
                <p className="sectionPara4">Others +</p>
            </div>
            <div className="w-full flex justify-start items-top p-5 xl:p-10  gap-10 md:gap-20 bg-black">
                <div className="">
                    <p className="sectionPara4">Our Business</p>
                    <p className="sectionPara4">Work With Us</p>
                    <p className="sectionPara4">Projects</p>
                    <p className="sectionPara4">News</p>
                </div>
                <div className="">
                    <p className="sectionPara4">Design</p>
                    <p className="sectionPara4">Specialist Expertise</p>
                    <p className="sectionPara4">Commercial Advice</p>
                    <p className="sectionPara4">Traffic & Transport</p>
                </div>
            </div>
        </div>
        <div className="bg-black p-5 pb-10 flex flex-col md:flex-row justify-between  items-center px-10">
            <div className="footerSection">
                © 2021 Case International. All right reserved.
            </div>
            <Custom />
            <div className="flex gap-4">
                <div className="footerSection">Terms & Condition</div>
                <div className="footerSection">Privacy Policy</div>
            </div>
        </div>
    </div>
  )
}

export default Footer