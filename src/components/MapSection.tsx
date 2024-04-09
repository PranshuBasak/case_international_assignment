import { IoArrowForwardCircleOutline } from "react-icons/io5"


const MapSection = () => {
    return (
      <>
          <div className="bg-white flex flex-col text-black">
            <div className="flex flex-col p-10 justify-center items-center">
                <div className="text-2xl lg:text-4xl  sectionHeader4 py-2 md:px-20 lg:pt-32 md:pt-12 pt-6">
                    As a 
                    <span className="text-[#F36F2B]"> global business, </span>
                    we encourage you to contact us no matter where you are located in the world.
                </div>
                <div className="p-5">  
                    Browse our job opportunities across the globe.
                </div>
                <div className="flex justify-center items-center text-[#F36F2B] text-xl">  
                    OPEN ROLES
                    <button className="pl-5 text-[#F36F2B]">
                        <IoArrowForwardCircleOutline size={30}/>
                    </button>
                </div>
            </div>
            
            <div className="p-2 md:p-10 lg:p-20">
                <img src="/assets/map.svg" alt="" className="object-cover w-full h-full"/>
            </div>
          </div>
      </>
    )
  }
  
  export default MapSection