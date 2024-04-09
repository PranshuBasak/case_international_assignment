import { useState } from "react";
import { ArrowLeft, ArrowRight } from "./arrow";



type SliderProp ={
  sliders: string[];
}

const Carousal = ({ sliders }:SliderProp) => {


  const [slide, setSlide] = useState(0)

  const prev = () => setSlide((curr) => curr === 0 ? sliders.length - 1 : curr - 1)
  const next = () => setSlide((curr) => curr === sliders.length - 1 ? 0 : curr + 1)
  
  return (
    <div  className="w-full aspect-[10/6] xl:aspect-[10/4] flex flex-col relative delay-1000 ease-in-out">
        <img src={sliders[slide]} alt="Hero" className="w-full h-full object-cover object-top opacity-30 " />
        <div className="absolute bottom-0 md:bottom-5 lg:bottom-10  p-10 flex flex-col gap-0">
          <p className="text-sm md:text-xl lg:text-2xl">Home / Why work with us</p>
          <p className="text-2xl md:text-6xl lg:text-8xl">Headline #1</p>
          <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur.</p>
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

export default Carousal