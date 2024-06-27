import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/WhatWillPeople.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";

function WhatWillPeople() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Aug 29</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">What Will People Say?</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                A common phrase that is often overlooked but remains devastating to our autonomy is "What will people say" (Log Kya Kahenge). This expression, which is often spoken in South Asian households, heavily deteriorates one's autonomy and leads to unparalleled consequences. Log Kya Kahenge is considered an accusation, "one that exposes how often surveillance (of self, and of others) plays into brown communities" (Roisin, 2019). Through this self-monitoring, one may not realize the limitations of free will or how one lives according to what others deem fit. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                It is upsetting that our existence can be confined by how others perceive us. We might think we can escape this phrase and be somewhere else, yet the sentiment will remain the same and follow us everywhere. However, I feel like many of us would have lived better lives without the unnecessary, ongoing pressure brought upon us by this phrase. The burden of attempting to please those who will always remain unimpressed is a weight that continues to drown us no matter how far we swim. It makes us wonder if we have ever truly lived for ourselves or if we have only been influenced by others instead. Why do we care so much about how others perceive us?                 </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                In our communities, we must acknowledge that our existence is complex and is filled with many emotions; some we cherish, others we attempt to escape. We are beings of struggle, consequences, and beautiful failures. We cannot exist without sorrow, grief, frustration, and exhaustion; we are not beings of constant happiness. We are beings of battle who will make mistakes, have differing desires from those around us, and, above all, are complicated. We shouldn't be told to exist in a way that aligns with how others perceive us. This blanket of silence makes it difficult to work through mistakes—in fact, I believe we end up suffering more than by submitting to our own truths.                 </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                It would be selfish to say to be loved, cherished, and accepted, we must align with others' wants and needs. You are loved even if you choose a non-traditional path; simply existing is enough. The scarcity of autonomy is far more perplexing than our imaginations.                 </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                On another note, in our communities, you will find toxic traits, such as body shaming, stringent gender roles, and success and worth, determined by the position one holds or the amount of money one makes. Individuals who choose to speak out against these toxic behaviors are deemed disrespectful or seen as a failure.                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Similarly, our relationships with our parents may be affected by us feeling like imposters when they refuse to see us for who we truly are and who we are growing up to be. While I understand that it is easier to blame specific individuals for their behaviors and flaws, it's crucial to note that they've been passed down over generations.                 </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Considering that perhaps our loved ones didn't have their individuality and free will recognized is crucial to understanding why it is often so difficult for them to see the value and importance of our autonomy. This is especially true for the women in our communities, most of whom were taught to make sacrifices for others from a young age while living under the constraints of a patriarchal society. This often meant that male figures in our communities were given more free will to do and be as they pleased while she had to take care of others. For example, if she is asked to sacrifice her needs for others—whether it be her brothers, parents, or husband—it would be tough to go against "the people" and demand respect and the sustenance of her needs. Therefore, in hindsight, how can one decide for herself when almost all decisions have been predetermined by others?                 </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Naturally, growing up, I used to think being successful meant pleasing those who remained unimpressed. It meant that my worth would be defined by my materialistic achievements, the amount of disrespect I was willing to accept, and the speed at which I could meet traditional/cultural norms. The individuality of being isn't seen, so what ends up happening is we are conflicted in making decisions. We place our worth in the hands of those who seem unimpressed and question the purpose of simply existing. In turn, we are constantly chasing the things we are not and trying to please everyone, including ourselves, with everything but our own being.                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                I understand it is easier said than done.; I struggle with making my own decisions, which will remain a challenge of trial and error. I'm not saying that you should not seek guidance from others or that you should resent those who have loved you; However, will we ever get to the point of recognizing our autonomy if we do not make some changes to the voices we prioritize? And will we ever end up not caring about "What will people say" (Log Kya Kahenge)?                </p>

              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/choosing-sustainable-fashion" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">Choosing Sustainable Fashion</span>
        </Link>

        {/* Right link */}
        <Link to="/blog/pleasure-of-ones-company" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <span className="hidden sm:inline">The Pleasure of One’s Company</span>
            <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }



export default WhatWillPeople