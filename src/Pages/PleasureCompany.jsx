import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PleasureCompany.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

function PleasureCompany() {
    useEffect(() => {
      ReactGA.initialize('G-L199GYGVZ2');
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "The Pleasure of One’s Company",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Nov 17</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">The Pleasure of One’s Company</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Enjoying one's company is beyond comprehension until one deliberately seeks it out. In the last couple of years, I have come to enjoy my own company rather than constantly being surrounded by people. While I don't do it as often as I should, spending quality time with myself is delightful. So, what does it mean to enjoy one's presence, and why does it even matter?                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                We are living in an era where we are susceptible to distractions. Even when we are alone, we are occupied by our phones or are multi-tasking, making it difficult to enjoy the present moment on hand. When we have time to ourselves, many of us turn to our screens. We deliberately avoid our own thoughts or feel uncomfortable with being seen alone. These are among the many reasons why we choose to spend time on our screens, such as wanting an instant dopamine release or distracting ourselves from a task.                </p>



                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                As a matter of fact, a recent research study found that the average time spent on phones is about 5-6 hours per day. This honestly isn't surprising; we use our phones for everything, whether listening to music, aimlessly scrolling on social media, googling something, or even just watching Netflix. Likewise, We have 24 hours a day; a good portion goes towards sleeping, eating, and commuting, leaving us with little time. If we are constantly looking down, we will miss everything around us. When we are disconnected from ourselves, we lose sight of what really matters.                   </p>


                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Enjoying one's company means being comfortable with the idea of being alone while engaging in various experiences that only you share. Although it may look distinctive for everyone, it is essential in the progression of one's development. For example, I enjoy taking myself out for dinner, visiting museums, or even going on a walk. When I am making an effort for myself, I tend to reconnect and center myself. Some advantages of solitude are reworking and solving problems in your life while getting to know yourself better. You will be surprised at all the benefits of allowing your mind to wander. The first step to spending time with yourself begins by putting away your phone. Then, take time to dine alone, go on a walk, create something, or go visit that place you've always wanted to go to!             
                     </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                When you first start, you may find it uncomfortable and unappealing to be with yourself. Trust me, you can be alone yet not be lonely as you begin to find enjoyment in your own company. Now, I'm not trying to say cut off all relationships, be alone, and have no technology. Instead, allocate time for yourself, where you will hopefully emerge in the present moment. </p>
               
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                On a similar note, I have realized that there is significant pressure to constantly surround ourselves with people. For example, in college, we are pushed to be productive, and it's considered exceptional to keep ourselves busy throughout the day. This mentality is a bit silly because, believe it or not, we aren't machines. We need space to process, reflect, and allow ourselves a moment to breathe. </p>
                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                I know that I may seem repetitious, but the enjoyment of one's own company is so perplexing that I can't describe it. Honestly, you just have to try it for yourself, and if it's been a minute since you've done it, I encourage you to choose yourself!                     </p>

                <a  href ="https://www.statista.com/statistics/1224510/time-spent-per-day-on-smartphone-us/" className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Research</a>


                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Love,</p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Salena </p>
              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/what-will-people-say" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">What Will People Say?</span>
        </Link>

        {/* Right link */}
        <Link to="/blog/post-graduation-anxiety" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <span className="hidden sm:inline">Post-Graduation Anxiety</span>
            <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }


export default PleasureCompany