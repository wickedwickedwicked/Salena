
import React, { useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Poems from '../Components/Poems'



function PoemsPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
}, []);
  return (
    <div className='w-full bg-black text-white min-h-screen'>
        <Header/>
        <Poems></Poems>
        <Footer></Footer>
    </div>
  )
}

export default PoemsPage