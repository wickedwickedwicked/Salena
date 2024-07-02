
import React, { useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Blogs from '../Components/Blogs'



function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
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