import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./arrow";



type SliderProp ={
  sliders: string[];
}

const SmallCarousal = ({ sliders }:SliderProp) => {


  const [slide, setSlide] = useState(2)

  const prev = () => setSlide((curr) => curr === 0 ? sliders.length - 1 : curr - 1)
  const next = () => setSlide((curr) => curr === sliders.length - 1 ? 0 : curr + 1)
  
  return (
    <div  className="w-full h-full xl:aspect-[10/4] flex flex-col relative delay-1000 ease-in-out">
        <img src={sliders[slide]} alt="Section" className="w-full h-full object-cover object-top opacity-70 " />
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

export default SmallCarousal;