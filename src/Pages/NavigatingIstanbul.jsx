
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/NavTop.png';
import myImage2 from '../assets/NavMap.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

function NavigatingIstanbul() {
    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Navigating Istanbul",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Aug 9</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Navigating Istanbul</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Turkiye remains one of my favorite places, specifically Istanbul. My first visit was summer of 2022, staying 1.5 weeks! Returning a year later, I can't help myself from wanting to stay longer. Turkiye is a country filled with beautiful architecture, landscapes, incredible history, delicious cuisine, and the kindest people! As a Muslim, I find much comfort in hearing the Adhan (call to prayer) resound five times a day and enjoying a wide range of halal food. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                However, Turkiye encounters its share of challenges and difficulties like any other nation. The continuous decline of the lira can be attributed to a combination of factors, primarily the inflation problem and the implementation of highly questionable policies. As visitors, we may not fully grasp the hardships faced by the working class in this country. The relentless increase in product prices and stagnant salaries causes multiple negative externalities.
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze">
                Istanbul's Various Transportation Systems
                </p>
    
               

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Navigating Istanbul is easier than you might think! You can travel from the European to the Asian side in many ways. Istanbul has diverse transportation options, including metro buses, taxis, metro lines, buses, and ferries, all readily available to facilitate seamless travel across the city. One of the most delightful ways to explore Istanbul is by boat, easily accessible through the numerous ferry stations scattered across the city! These ferries offer convenient access to many fascinating destinations, including Beshkitas, Kadkoy, Uskadar, and countless other exciting locations to discover! Now for those who harbor a fear of ships, there's a convenient alternative: the Marmaray. This high-speed metro line connects Istanbul's European and Asian sides through a tunnel beneath the majestic Bosphorus. With numerous connecting stations like Sirkeci in Europe, Üsküdar, Ayrılık Çeşmesi, and others in Asia, the Marmaray extends to Gebze. This allows you to swiftly travel from historic Old Istanbul in Europe to the vibrant Asian shore of the Bosphorus in just a matter of minutes. 
                </p>

                 {/* {BULLET POINTS} */}

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze"> 
                Below is the Marmaray and Metro Map</p>

                <div className="max-w-[1200px] mx-auto mt-10"> {/* Adjust the max-width to match your image width */}
                <img src={myImage2} alt="" className="mx-auto w-auto h-auto" />
                </div>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze"> Tips and Tricks for Visitors </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Navigating Taxis: During my previous travels to Istanbul, I vividly remember the constant challenges I faced with a few taxi drivers who often employed deceptive tactics. It was frustrating to encounter situations where they refused to pick me up unless I negotiated the fare in advance, particularly in Takism. 
                </p>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    As per the law, taxi drivers are required to activate their meters before commencing the ride.
                    </p>
                </div>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    Following your maps to ensure a smooth journey is advisable, as this will prevent unnecessary detours and save time! 
                    </p>
                </div>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    Remember to pay once your ride is done, adhering to the meter reading.
                    </p>
                </div>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    It's always nice to have cash on you; some don't take cards, so feel free to ask beforehand. 
                    </p>
                </div>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    If you feel uncomfortable with a taxi driver take a photo of the license plate and identification number on the passenger side. This is as a precaution. 
                    </p>
                </div>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze"> Turkish Tourist Transporation Card </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                If you plan to stay long and want to go all over Istanbul, the smartest thing you can do is purchase a transportation card, which you can buy a transportation station, aka metro! These cards are easy to use and can be used for public transportation, excluding taxis.                 </p>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    Make sure to refill them; many refill stations take cash only, with some having credit card refill options.                     </p>
                </div>

                <div className="mt-5">
                    <p className="text-start text-xl eb-garamond-normal leading-relaxed">
                    <span className="ml-4">&#8226; </span>
                    Remember, you can use it on Ferries, Marmaray, Metrobus, Metro lines, and ferries.</p>
                </div>
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Google Maps can be helpful, but it sometimes takes you on longer routes, making you take unnecessary 15-minute walks when the destination is close by. Keep a close eye on the navigation dots, and trust yourself. Look for shortcuts to make your walk shorter, even if it initially seems tricky. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Ferries will always hold a special place as one of my favorite ways to travel. Not only are they reasonably priced at 20-50 Turkish Lira, but they also offer one of the most picturesque and secure travel experiences. Glimpsing the stunning Bosphorus aboard the ferry is an unforgettable sight, making it one of the most enchanting travel methods.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                The ferries arrive every 20-50 minutes (depending on the schedule), so keep an eye on the schedule. Some ferries make multiple stops, so be attentive to ensure you get off at your destination. If you ever find yourself needing clarification, feel free to ask someone for assistance or use Google Translate; people are generally friendly and willing to help! To fully immerse yourself in the experience, sit upstairs in the open-air area to savor the journey.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Love, Salena
                </p>

             
    
              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/review-of-as-long-as-the-lemon-trees-grow" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">Review of As Long as the Lemon Trees Grow</span>
        </Link>

        {/* Right link */}
        <Link to="/blog/choosing-sustainable-fashion" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <span className="hidden sm:inline">Choosing Sustainable Fashion</span>
            <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }

export default NavigatingIstanbul