
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ReactGA from 'react-ga';

function Contact() {
  useEffect(() => {
     // Track page view using ReactGA
     ReactGA.set({ page: window.location.pathname, title: 'Contact' });
     ReactGA.pageview(window.location.pathname + window.location.search);


    window.scrollTo(0, 0); // Scrolls to the top when component mounts
}, []);
  return (
    <div className="contact">
      <Header />
      <div className='flex flex-col items-center mt-40'>
        <h1 className="eb-garamond-normal custom-bronze fade-in text-6xl mt-10">Contact Details</h1>
        <div className='flex flex-col items-center mt-10 text-2xl custom-bronze eb-garamond-normal'>
        <a href="https://www.instagram.com/salena_writes/" className="custom-bronze hover:underline hover:text-white">Instagram</a>
          <a href="https://www.linkedin.com/in/salena-chaudhry/" className=" custom-bronze hover:underline mt-2 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
