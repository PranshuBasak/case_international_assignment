import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./arrow";
import { FaQuoteLeft } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";



type SliderProp ={
  sliders: string[];
}

const ReviewCarousal = ({ sliders }:SliderProp) => {


  const [slide, setSlide] = useState(3)

  const prev = () => setSlide((curr) => curr === 0 ? sliders.length - 1 : curr - 1)
  const next = () => setSlide((curr) => curr === sliders.length - 1 ? 0 : curr + 1)
  
  return (
    <div  className="bg-[#112C41] w-full h-full flex flex-col md:flex-row justify-center items-center gap-4 lg:gap-10 relative delay-1000 ease-in-out p-6 md:p-10 lg:p-20">
        <div className="grow-0">
            <img src={sliders[slide]} alt="Section" className="aspect-[1/1] w-[90vw] object-cover" />
        </div>
        <div className="flex flex-col p-2 lg:p-10">
            <div className="text-[#F36F2B]">
                <FaQuoteLeft size={20}/>
            </div>
            <div className="p-5 lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdie
                <br />
                <br />
                Title 
                <br />
                <br />
                Name
                <br />
                <br />
                <div className="flex ">
                    <button className="pr-5">
                        <IoArrowForwardCircleOutline size={30}/>
                    </button>
                     Read My Story
                </div>
            </div>
        </div>
        <div className="absolute bottom-2 md:bottom-10 right-10 flex gap-8 ">
            <button onClick={prev} className="carousalBtn">
                <ArrowLeft size={30} color={"#F36F2B"}/>
            </button>
            <button onClick={next} className="carousalBtn" >
                <ArrowRight size={30} color={"#F36F2B"}/>
            </button>
        </div>
    </div>
  )
}

export default ReviewCarousal;