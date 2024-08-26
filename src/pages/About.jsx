import React from 'react'
import Header from '../Components/Header'
import AboutText from '../Components/AboutText'
import Subscribe from '../Components/Subscribe';
import Footer from '../Components/Footer';


const About = () => {
  return (
    <>
    <div className="w-full h-auto bg-[#1e1629]">
      <Header/>
    </div>
    <div  className="w-full min-h-screen px-4 md:px-20 bg-[#1e1629]" >
    <AboutText/>
    <Subscribe />
    </div>
    <div className="w-full h-auto bg-[#170f22] "  >
      <Footer/>
    </div>
  </>
  )
}

export default About