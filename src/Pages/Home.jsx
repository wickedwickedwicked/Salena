
import React, { useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'



function Home() {
  useEffect(() => {
    // Track page view using ReactGA
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    // Optionally, you can also set the page title for better analytics
    document.title = 'Home Page';
    
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

return (
  <div className='w-full bg-black text-white min-h-screen'>
    <div className='header'>
      <Header />
    </div>
    <div className='fade-in'>
      <Blogs />
    </div>
    <Footer />
  </div>
);
}

export default Home