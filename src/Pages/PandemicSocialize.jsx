import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PandemicSocialize.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from 'react-ga';

function PandemicSocialize() {
    // useEffect(() => {
    //   // document.title = "The Pandemic has Affected the Way We Socialize";
    //   ReactGA.send({
    //     hitType: 'pageview',
    //     page: window.location.pathname + window.location.hash,
    //     title: 'Test',
    //   });
    //     window.scrollTo(0, 0); // Scrolls to the top when component mounts
    // }, []);

    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Custom Title",
      });
    });
    
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Sep 21</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">The Pandemic has Affected the Way We Socialize</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                It is no surprise that the Pandemic has affected the way we socialize. Of course, the spectrum of effects varies on a person-to-person basis, but how we interacted and communicated with individuals has drastically changed.                 </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            As a student, most of our meetings were conducted online, whether through Zoom or over text. However, as I am integrating back into society, I have noticed that we are somewhat awkward with eye contact through my coworkers and friends. There are multitudes of reasons why this is happening. First, when we communicate through screens, we are not really making eye contact but instead are staring at the person’s face. Secondly, the lack of socializing every day, whether through going out to get coffee, grocery shopping, or meeting with friends, has rusted our communication skills.  </p>



                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Lastly, through the lack of human connection during the Pandemic, there had been a rise to loneliness.  Jeremy Nobel says that “loneliness is the gap between the social connections you would like to have and the ones you feel you already do have.” I definitely felt more lonely during the height of the Pandemic compared to now. Although technology permits us to connect with our loved ones or meet new people, it is not enough to fulfill our social needs; face-to-face interaction is crucial in thriving. Therefore, to navigate through loneliness is to increase your sense of connection. </p>


                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                As we return to normalcy, we should be patient with ourselves and others. It is okay to be somewhat awkward while socializing with others; we will get better at communicating with due practice. Similarly, we should attempt to get outside our comfort zone by trying to find that meaningful connection. Perhaps joining a club, volunteering, or even reaching out to old friends with whom you may have lost touch.  </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Thank you for reading!</p>

                <a  href ="https://www.youtube.com/watch?v=TvSRZpiSN-U&ab_channel=HarvardUniversity" className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Video</a>
               
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Love,</p>
                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Salena
                </p>

                
              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/post-graduation-anxiety" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">Post-Graduation Anxiety</span>
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }


export default PandemicSocialize