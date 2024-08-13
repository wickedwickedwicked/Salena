
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/OceanCity.jpg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";

import ReactGA from 'react-ga';


function OceanCity() {
    useEffect(() => {
        ReactGA.initialize('G-L199GYGVZ2');
        ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "A Local's Guide to Ocean City's Best Spots",
      });
     
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
      return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10 ">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">July 21</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">A Local's Guide to Ocean City's Best Spots</p>
              
              <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                Ocean City is a hotspot on the East Coast, attracting more than 8 million tourists year-round.
Known for its beautiful beach and vibrant boardwalk attractions, it entices visitors like the wind
blows. If you enjoy fishing and seafood, OC is known as the &quot;White Marlin Capital of the
World.&quot; To many, it&#39;s a visit destination, a pitstop of sorts, yet for the locals, it&#39;s a place we
associate with home.
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Tourists scatter across Ocean City&#39;s shore like crabs along the dunes, seeking out mysteries
unknown to shells. Ocean City has many great attractions, yet I encourage people to seek out the
hidden gems along the city. You may be surprised that OC is beyond its beaches, waterpark, and
boardwalk.   </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Here are some of my local recommendations if you are coming down to visit:
                </p>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Mione's Pizza & Italian Restaurant</span>: If you want great pizza or delicious sandwiches, come here! They have a couple of locations, but my favorite is in the Ocean City Outlets shopping center.
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Flagship Cinema:</span>: A local theater with comfortable reclining chairs, great to visit if you
                                  are eager to watch the latest film. Conveniently located in the OC outlets.
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Island Creamery:</span>:If you want high-quality ice cream that tastes amazing, you must
                                  come here. Started in 1975, it is known for its various handmade ice cream flavors. The
                                  ice cream tastes so good, and it&#39;s conveniently located in Downtown Berlin.
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Downtown Berlin:</span>:If you enjoy antique and vintage shopping and want a place to
                                  explore, here it is! A small town immersed in history, easily walkable, with many
                                  different stores including local eating joints and a cool toy store.
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Candy Kitchen:</span>:Established in 1937 in Ocean City, known for its handmade sweets like
                                  saltwater taffy, fudge, and chocolates. You won&#39;t miss the signs; the iconic pink and
                                  white striped stores have become a beloved part of Ocean City, attracting tourists and
                                  locals for yummy treats.
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Rise Up Coffee:</span>:Started back in 2005, it is a brand dedicated to sustainable coffees, plus
                                  it is Certified Organic and Fair Trade. Seriously, if you are craving matcha, a smoothie,
                                  or delicious coffee, you must check out Rise Up located in Ocean City.
                              </p>
                          </div>

                          


               
    
                          <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                              Now, go explore the boardwalk and venture beyond the main attractions. Trust me, you&#39;re bound
                              to discover hidden gems. Here are some of my favorite local recommendations for when you
                              visit Ocean City. Whether you&#39;re strolling the iconic boardwalk or encountering lesser-known
                              treasures, Ocean City has something special for everyone. Happy exploring!
                          </p>
    
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
                Love,
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5">
                Salena Chaudhry 
                </p>
    
              </div>
    
            </div>
          </div>

             

        <div className="mt-40 mb-20 flex justify-between">
                  {/* Left link */}
                  <Link to="/blog/palestine" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
                      <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
                      <span className="hidden sm:inline">Palestine</span>
                  </Link>

                  {/* Right link */}
                  <Link to="/blog/review-of-as-long-as-the-lemon-trees-grow" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
                      <span className="hidden sm:inline">Review of As Long as the Lemon Trees Grow</span>
                      <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
                  </Link>
      </div>

              
    
          
    
          <Footer></Footer>
    
        </div>
      );
    }
export default OceanCity