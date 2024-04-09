

const Celebrate = () => {
  return (
    <>
        <section className="bg-white grid grid-rows-3 grid-cols-3 sm:grid-cols-4 gap-4 p-2">
          <div className=" w-full grid   col-span-2 bg-black">
            <img src="https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618541/tgj2lcrcflh64aydmrnf.jpg" alt="gallery image" className="w-full h-full object-cover"/>
          </div>
          <div className=" w-full  grid-cols-subgrid bg-black">
            <img src="https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618565/am98zzqex1emnutz6xqe.jpg" alt="gallery image" className="w-full h-full object-cover"/>
          </div>
          <div className=" w-full  grid gap-2 col-span-2 sm:col-span-1 row-span-2 bg-black">
            <img src="https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618580/uzsjufuzuo6qa94ripzu.jpg" alt="gallery image" className="w-full h-full object-cover"/>
          </div>
          <div className=" w-full  grid  gap-2  row-span-2 bg-black">
            <img src="https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618562/p5pd8t8iemfpnjgmsb3p.jpg" alt="gallery image" className="w-full h-full object-cover"/>
          </div>
          <div className=" w-full  grid gap-2 col-span-3 sm:col-span-2  text-black p-10">
                    <div className="text-2xl lg:text-5xl sectionHeader2 py-2 lg:pt-32 md:pt-12 pt-6">
                        We celebrate 
                        <span className="text-[#F36F2B]"> success</span>
                    </div>
                    <div className=" w-full aspect-[4/1] flex flex-col gap-8 ">
                        <p className="sectionPara3 lg:text-xl">
                            At CaSE we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                            celebrating these moments because they underscore the commitment and effort put into each project.

                        </p>
                        <p className="sectionPara3 lg:text-xl">
                            Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                            team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference. 
                        </p>
                    </div>
          </div>
          <div className=" w-full  grid gap-2 col-span-3 bg-black">
            <img src="https://res.cloudinary.com/dxmtvj93m/image/upload/v1712695384/uzgjpg9jidjyr9pvrrab.jpg" alt="gallery image" className="w-full h-full object-cover"/>
          </div>
          
        </section>
    </>
  )
}

export default Celebrate