import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/PostGrad.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";

function PostGrad() {
    useEffect(() => {
      ReactGA.initialize('G-L199GYGVZ2');
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Post-Graduation Anxiety",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Oct 5</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Post-Graduation Anxiety</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Hi, My name is Salena. I am of Pakistani heritage. I am the oldest child and a first-generation college student. Here are my thoughts on being a senior who is about to graduate in December! 
                </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
               Being a senior, the pressure of having everything figured out is overwhelming, to say the least. Moreover, having been asked, "what are you planning on doing next" can make one want a formulated response. Sometimes, there can be tremendous pressure to meet expectations, find the perfect job, or have everything figured out before graduation, but that's unrealistic!  </p>



                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Another thing I noticed is how much people's opinion of what they think you should do weighs on our decisions. For example, one might feel that they have to earn the approval of their parents while meeting the consent of their peers, friends, and individuals from university. Yet, as students, we are expected to have found employment or further expand our education. Similarly, many immigrant parents want their children to have a high-paying position or pursue higher education. Does not having everything figured out make us less worthy? Does not having a high-paying job decrease our value? Lastly, if we don't pursue education in the traditional sense, does it reduce our market value?  </p>


                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                It is hard to meet parents' and loved ones' expectations while pursuing something outside the traditional sense. But, going back to the questions above, I don't believe one's value is decreased for not choosing the conventional path laid out. I want to mention that there isn't anything wrong with pursuing higher education or working right after college, of course, if you really want to or have circumstances where you must. But what is it that you really wanna do, or what are you interested in trying?                     </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Many of us can feel that we are running on a hamster wheel, where we constantly have to move. We go from one thing to the next, high school to university, to a conventional path, whether a Master's degree or straight-up employment. One reason being we don't exactly know what we want to do. We must continue down a rabbit hole because we don't know what we want in life. Do you genuinely want to get a Master's degree, or do you think you must? Likewise, do we want to pursue a job that aligns with our degree description but is not something we are very much interested in? For example, the traditional path for many from my degree, public policy, is being a policy analyst and working in D.C, but I don't find that very appealing. For the most part, I have come to enjoy what I'm studying, and I aspire to use my education to further my interests.  </p>
               
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Now I am not trying to say, be selfish and sever relationships in the means of pursuing one's own goals. Rather be selective on whose voice matters in your life and what you want to accomplish. So I'm trying to make the point that it is okay to choose something that doesn't meet other people's expectations or isn't in the traditional sense. </p>
                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Doing something that makes you happy can be easier said than done, but please don't let other people's approval and opinion unbearably weigh you down. Instead, be patient with yourself and try to enjoy the present moment on hand!

</p>

                
              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/pleasure-of-ones-company" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">The Pleasure of One’s Company</span>
        </Link>

        {/* Right link */}
        <Link to="/blog/a-hrefhttpssalenachaudhrywordpresscom20210831the-pandemic-has-affected-the-way-we-socializethe-pandemic-has-affected-the-way-we-socializea" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <span className="hidden sm:inline">The Pandemic has Affected the Way We Socialize</span>
            <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }


export default PostGrad