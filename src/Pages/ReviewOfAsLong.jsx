
import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/LemonTreesPicture.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"

function ReviewOfAsLong() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when component mounts
}, []);
  return (
    <div className='w-full bg-black text-white min-h-screen'>

      <Header />

      <div className="flex justify-center mr-10 ml-10">
        <div className="space-y-4 mt-10 ">
          <p className="flex justify-center text-xl text-white mb-2 mt-40">Feb 13</p>
          <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Review of As Long as the Lemon Trees Grow</p>
          
          <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
            <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
              Descend into "As Long as the Lemon Trees Grow," and get ready for a rollercoaster of emotions. It'll make you blush, bring tears to your eyes, and keep you hooked, eagerly anticipating what comes next until the very end. The book does a great job of capturing a reader's attention with beautifully painted words. Zoulfa Katouh uses imagery and wordplay to keep readers engaged. The novel showcases the sorrows of Salma's reality, where she is surrounded by encapsulating destruction, where a tomorrow isn't promised. Spotlighting the hardships of revolution and involuntary displacement while also showcasing the resilience and beauty inherent in the human endeavor.
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            Zoulfa's writing serves as a reminder of the reality of people around the world. We live in a world where atrocities are committed to those who seek freedom, justice, and fundamental human rights. A profound commitment, where people risk their lives for the hope of something much greater, something that extends beyond their immediate years and beyond themselves.             </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            “Every lemon will bring forth a child, and the lemons will never die out.” 
            </p>
          
            <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
            Quick Overview: 
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
            Salama Kassab is a pharmacy student living her teenage life, with her family, friends, and hobbies  After the cries for freedom broke out in Syria, she helps out at a hospital in Homs where she sees all types of patients from wounded soldiers, gunshot victims, to children suffering from malnutrition. As Salama's desperation to leave Syria grows, her PTSD takes the physical shape of a compansion known as Khawf which haunts her breathing moments. 
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            "Might. What a word. It holds infinite possibilities of a life that could have been. So many options stacked one on top of the other, like cards waiting for a player to pick and choose.”  - Zoulfa Katouh 
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            This was a beautiful novel filled with many different emotions and various lessons for readers to learn. Zoulfa Katouh's love for Syria is shown through her character's eyes and it is clear that Syrians have a strong sense of cultural identity. This book prompts you to question your moral compass, forcing you to reconsider how you would navigate a life plagued by constant horrors.
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
            Unfolding of Recent Events 
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            "As Long as the Lemon Trees Grow" stirred a powerful connection within me. The current atrocities unfolding demand urgent attention; they surpass mere human rights violations. It's a call to acknowledge the profound and urgent need to address the situation, to stand against injustice, and to advocate for a world where the rights and dignity of all individuals, including those in Gaza, are respected and protected.
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
            When reading about revolutions and wars, we often focus on the number of casualties and killed, but it's crucial to recognize individual lives. Numbers often fall short of capturing the depth of human stories. Behind each statistic are real lives, each with its complex tapestry of family, history, and personal journey. When we talk about Palestinians, we should recognize that these are individuals- with vibrant lives, unique family bonds, and stories that deserve to be heard and understood. 
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
            In conclusion, I highly recommend reading As Long as the Lemon Trees Grow. Not only will you find yourself unable to put the book down, you will end up falling in love with the characters. In addition, amid the ongoing genocide against the Palestinians, let us redouble our efforts to educate ourselves, advocate, donate, and continue to boycott companies that profit from the genocide of the Palestinians.  
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
            Ps. A perfect book for those who enjoyed The Book Thief, A Thousand Splendid Suns, and And The Mountains Echoed.
            </p>

            <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5">
            Salena 
            </p>

          </div>

        </div>
      </div>
      
      <li className="flex items-center justify-end mt-40 mb-20">
     <Link to="/blog/navigating-istanbul" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">Navigating Istanbul<MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>

      

      <Footer></Footer>

    </div>
  );
}

export default ReviewOfAsLong;
