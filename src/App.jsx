import { FaCoffee } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import Coffecard from './component/Coffecard'
import { useState } from 'react'
import icon1 from './assets/icons/1.png'
import icon2 from './assets/icons/2.png'
import icon3 from './assets/icons/3.png'
import icon4 from './assets/icons/4.png'
import cup1 from './assets/cups/Rectangle 9.png'
import cup2 from './assets/cups/Rectangle 10.png'
import cup3 from './assets/cups/Rectangle 11.png'
import cup4 from './assets/cups/Rectangle 12.png'
import cup5 from './assets/cups/Rectangle 13.png'
import cup6 from './assets/cups/Rectangle 14.png'
import cup7 from './assets/cups/Rectangle 15.png'
import cup8 from './assets/cups/Rectangle 16.png'
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  const loadedcoffees = useLoaderData()
  const [coffees, setcoffes] = useState(loadedcoffees)


  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <div className="flex items-center justify-center bg-banner_image bg-cover h-[550px]">
        <div className="w-full md:w-[50%]"></div>
        <div className="w-full md:w-[50%] md:ml-10 md:text-left text-white">
          <h1 className='font-semibold md:text-2xl'>Would you like a Cup of Delicious Coffee?</h1>
          <p className='text-sm opacity-90 md:w-9/12 my-2'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
          <div className="flex gap-x-3">
            <button className='bg-[#E3B577] px-4 py-2 mt-2 md:mt-0'>Learn More</button>
            <Link to='/signin' className='bg-[#E3B577] px-4 py-2 mt-2 md:mt-0'>Sign In</Link>
            <Link to='/users' className='bg-[#E3B577] px-4 py-2 mt-2 md:mt-0'>Users </Link>
          </div>
        </div>
      </div>
      <div className=' bg-[#ECEAE3] grid grid-cols-2 gap-4 md:grid-cols-4 px-4 py-6 md:py-8 md:px-16'>
        <div className='space-y-1'>
          <img src={icon1} className='w-12 h-12' alt="" />
          <p>Awesome Aroma</p>
          <p className='w-56'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='space-y-1'>
          <img src={icon2} className='w-12 h-12' alt="" />
          <p>High Quality</p>
          <p className='w-56'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='space-y-1'>
          <img src={icon3} className='w-12 h-12' alt="" />
          <p>Pure Grades</p>
          <p className='w-56'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='space-y-1'>
          <img src={icon4} className='w-12 h-12' alt="" />
          <p>Proper Rosting</p>
          <p className='w-56'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
        
      </div>
      <section className="bg-card_background bg-cover bg-center">
        <div className="space-y-1 mt-10">
          <p className='text-center'> --- Sip & Savor ---</p>
          <h1 className='text-3xl text-center'>Our Popular Products</h1>
          <Link to='/addcoffee' className='bg-[#E3B577] flex items-center w-28 gap-x-1 mx-auto px-3 py-1'>Add Coffee <FaCoffee/></Link>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-9/12 mx-auto py-10" >
          {
            coffees.map(coffee => <Coffecard key={coffee._id} coffees={coffees} setcoffes={setcoffes} coffee={coffee} ></Coffecard>)
          }
        </div>
      </section>
      <section>
        <div className="space-y-1 mt-10">
          <p className='text-center'>Follow us Now</p>
          <h1 className='text-3xl text-center'>Follow on Instagram</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-9/12 gap-2 md:mx-auto mt-10">
          <img className="object-cover" src={cup1} alt="" />
          <img className="object-cover" src={cup2} alt="" />
          <img className="object-cover" src={cup3} alt="" />
          <img className="object-cover" src={cup4} alt="" />
          <img className="object-cover" src={cup5} alt="" />
          <img className="object-cover" src={cup6} alt="" />
          <img className="object-cover" src={cup7} alt="" />
          <img className="object-cover" src={cup8} alt="" />
        </div>
      </section>
      <footer className="mt-16">
        <Footer/>
      </footer>
    </>
  )
}

export default App
