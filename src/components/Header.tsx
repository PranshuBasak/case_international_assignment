import { FaBars } from "react-icons/fa"


const Header = () => {
  return (
    <header className="flex items-center justify-between border border-x-0 border-t-0 headContainer px-8">
        <section className="visible md:hidden py-2">
          <button>
            <FaBars size={30}/>
          </button>
        </section>
        <section className=" hidden md:visible md:flex md:gap-10">
            <h3>PROJECTS</h3>
            <h3>EXPERTISE</h3>
            <h3>ABOUT US</h3>
            <h3>PEOPLE</h3>
        </section>
        <section className="hidden md:visible md:flex">
            <img src="/assets/hero.svg" alt="" />
        </section>
        <section className=" flex gap-3">
            <h3>CAREERS</h3>
            <h3>AU</h3>
        </section>

    </header>
  )
}

export default Header