import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import AboutPic from './../assets/AboutPic.png';
import Footer from '../Components/Footer';
import ReactGA from 'react-ga';


function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts


    // Track page view with custom title and path
    ReactGA.pageview(window.location.pathname);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className='w-full bg-black text-white min-h-screen'>
      <Header />
      {/* Adding a margin to the top of the main content */}
      <div className='mt-10 sm:mt-20 flex flex-col items-center'>
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center max-w-7xl'>
          <div className='text-left p-6 max-w-lg'>
            <h1 className='eb-garamond-normal text-4xl sm:text-6xl mb-4 sm:mb-8'>Little Bit About Me!</h1>
            <p className='eb-garamond-normal text-lg sm:text-2xl mb-4 sm:mb-8 leading-relaxed'>
              As a first-generation Pakistani American and first-generation college student, I am proud to have graduated with a Bachelor of Arts in Public Policy and a minor in International Development and Conflict Management. My policy interests are centered around women's rights, immigration, and human rights, and I am passionate about advocating for these issues. In my free time, I enjoy writing, reading, traveling, and spending quality time with my loved ones. I am always looking for new opportunities to learn and grow, and am excited about future possibilities.
            </p>
          </div>
          <img
            src={AboutPic}
            className={`w-full sm:w-auto max-w-3xl mb-8 sm:mb-0 ml-0 sm:ml-12 smooth-image ${imageLoaded ? 'loaded' : ''}`}
            alt="Picture"
            onLoad={handleImageLoad}
          />
        </div> 
      </div>
      <Footer />
    </div>
  );
}

export default About;
