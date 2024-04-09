import { ArrowRight } from "./arrow"


const Info = ({id, text}:{id: string, text: string}) => {
  return (
    <div className="bg-[#112C41] w-full aspect-[6/1] flex flex-row justify-between items-center text-center p-2  ">   
        <div className=""> 
            <div className="text-[#6B6B6B] text-sm md:text-lg text-left flex flex-row justify-between ">
                <div className="grow-0">{id}</div>
                <div className="grow"></div>
            </div>
            <div className="text-sm font-semibold mg:text-xl pb-2">
                {text}
            </div>
        </div>
        <div>
            <button>
                <ArrowRight size={30} color={"#fff"} />
            </button>
        </div>
    </div>
  )
}

export default Info