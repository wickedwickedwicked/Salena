
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PandemicSocialize.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";


const lines1 = [
    "Your beauty tempts my soul",
    "Love, why engulf yourself in hatred?",
    "A rare diamond is hidden in great sorrow"
];

const lines2 = [
    "Do you not see the beauty that's withered in pain?",
    "With each step you take, the earth sings in delight",
    "Your words capture and surrender beating hearts"
];

const lines3 = [
    "Do you not see the worth you carry?",
    "Love, you are the moon guiding when lost",
    "Regardless of what phase, specks of light remain indifferent to dusk"
];

const lines4 = [
    "The universe would collapse if you dared to pass",
    "Tears fill oceans with howling commotions",
    "Love your worth is more than all the thoughts that leave you torn"
];



function BeautyPoem() {
    useEffect(() => {
        
        ReactGA.send({
          hitType: "pageview",
          page: "/my-path",
          title: "Beauty",
        });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Dec 27</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal  custom-bronze mb-2">Beauty</p>

                    <div className="text-center flex flex-col text-xl eb-garamond-normal mt-10 space-y-5">
                        {lines1.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    <p>‎</p>


                    <div className="text-center flex flex-col text-xl eb-garamond-normal mt-10 leading-relaxed space-y-5">
                        {lines2.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    <p>‎</p>

                    <div className="text-center flex flex-col text-xl eb-garamond-normal mt-10 leading-relaxed space-y-5">
                        {lines3.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                    <p>‎</p>

                    <div className="text-center flex flex-col text-xl eb-garamond-normal mt-10 leading-relaxed space-y-5">
                        {lines4.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    
                    <p>‎</p>
                    <p className="text-center flex flex-col text-xl eb-garamond-normal mt-10 leading-relaxed space-y-5">So please stay</p>

              </div>
    
        
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        </div>

        
      <li className="flex items-center justify-end mt-40 mb-20">
     <Link to="/poems/composure" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">Composure<MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>
          <Footer></Footer>
    
        </div>
      );
    }

    export default BeautyPoem