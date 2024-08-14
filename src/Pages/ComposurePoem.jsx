import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PandemicSocialize.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

const lines = [
    "Contentment that shines through beams of sunlight",
    "Beholding a smile that engraves a scene of joy",
    "Emulating a fragrance of pure pleasure",
    "An encouraging touch uplifting to melancholy",
    "Yet dusk advances, submerging one to the depth of sorrow",
    "Eyes withholding the blood that tempts to drop",
    "Movement halted as limbs fell short of breath",
    "The heart lies still shattered to the fragility",
    "Lingering desolation in the company of loved ones",
    "A contrast that beacons to break apart a created equilibrium"
];


function ComposurePoem() {
    useEffect(() => {
      
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Composure",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Aug 26</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Composure</p>

                    <div className="text-center flex flex-col text-xl eb-garamond-normal mt-10 leading-relaxed space-y-5">
                        {lines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

              </div>
    
        
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/poems/beauty" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">Beauty</span>
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }

export default ComposurePoem
