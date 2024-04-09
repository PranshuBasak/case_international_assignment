
import Believe from './components/Believe'
import Carousal from './components/Carousal'
import Celebrate from './components/Celebrate'
import Stay from './components/ConnectedSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Info from './components/Info'
import MapSection from './components/MapSection'
import ReviewCarousal from './components/ReviewCarousal'
import SmallCarousal from './components/SmallCarousal'

export const slides = [
  "https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618550/g5vjndr0nawbyremnt6d.jpg",
  "https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618556/n1fimkesqckmhsw7ypar.jpg",
  "https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618509/ptgu5aatix3uxyytsmzl.jpg",
  "https://res.cloudinary.com/dxmtvj93m/image/upload/v1712618585/x8nfadckzkkxhaajxaod.png",
]

function App() {
  
 
  return (
    <>
      <main className='flex flex-col'>

        <nav className='absolute w-full  z-10'>
          <Header/>
        </nav>

        <section className='w-full m-0'>
          <Carousal sliders={slides}/>
        </section>


        <section className='flex gap-1  flex-col sm:flex-row '>
          <Info id={"01"} text={"We stay connected"}/>
          <Info id={"02"} text={"We believe in diversity & inclusion"}/>
          <Info id={"03"} text={"We celebrate success"}/>
        </section>

        <section className='flex flex-col sm:flex-row'>
          <div className="bg-white w-full aspect-[4/1]">
            <Stay />
          </div>
          <div className="bg-[#112C41] w-full aspect-[4/1]">
            <SmallCarousal sliders={slides}/>
          </div>
        </section>
        <section className="bg-[#112C41] flex flex-col">
          <div className='flex flex-col sm:flex-row'>
            <Believe />
          </div>
          <img src="/assets/graph.svg" alt="" />
        </section>
        <Celebrate />
        <ReviewCarousal sliders={slides} />
        <MapSection />
        <Footer />
      </main>
      
    </>
  )
}

export default App
