import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/Skincare.jpg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";



function Skincare() {
    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Favorite Skincare Products",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
      return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10 ">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">August 22</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Favorite Skincare Products</p>
              
              <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                

                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                              I’m passionate about skincare and willing to invest in it. Growing up, I struggled with various
                              skincare concerns, from acne to dark circles, which often made me feel ashamed. It&#39;s fascinating
                              how people will give you unsolicited advice or point out your insecurities. Where do some of
                              y&#39;all find the audacity? However, these experiences ultimately led me to understand skincare
                              better and discover products that truly work.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              Like many teenagers, I tried numerous products, hoping my skin issues would disappear, yet
                              they never worked. I didn’t understand that most of these products only worsened my skin and
                              caused more damage. It’s essential to note that teen acne is primarily caused by hormonal
                              changes during puberty, specifically the increase in testosterone, which triggers acne by
                              enlarging oil glands and affecting the skin. Other factors that can irritate the skin include stress,
                              diet, genes, medication, and the products we use. Most people will experience acne well into
                              their 20s and even into adulthood.
                          </p>



                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                Beauty of Joseon Relief Sun
                </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              This sunscreen has quickly become one of my favorites. It doesn’t leave a white cast and blends
                              seamlessly into the skin. With SPF 50, it provides excellent sun protection while feeling light
                              and comfortable on the face! (Normal to dry skin)
                          </p>


                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                Abib Quick Sunscreen Stick
                </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              A great choice for sun protection, offering SPF 50 with no white cast and not a greasy feel. It has
                              a curved design, making it easy to apply to both the face and body. Doesn&#39;t have a smell and can
                              be easily applied over makeup. (Recommended for dry skin)
                          </p>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                The Beauty of Joseon Matte Sun Stick
                </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              Ideal for those with oily skin, this matte sun stick offers an easy and effective sun protection
                              solution. A non-greasy formula will help avoid clumping like many traditional sunscreens. (Oily
                              skin)
                          </p>




                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                              Pine Calming Cica Pads
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              After a long day, I love using these pads. They are both hydrating and gently remove the day&#39;s
                              residue. For those with acne, applying a pad to a pimple for 3-5 minutes can accelerate its
                              healing and reduce redness. These pads are especially great for sensitive skin, offering calming
                              relief that will minimize irritation.
                          </p>


                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                              Haruharu Wonder Black Rice Bakuchiol Eye Cream
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              I’ve been using this eye cream for the last 9 months, and it works. It helps get rid of dark circles
                              and is a great moisturizer for nighttime. With retinol in the formula, it’s perfect for night use and
                              also helps with fine lines. I’d definitely buy this eye cream again—it&#39;s lasted me over 9 months!
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                              Advanced Snail 92 All-in-One Cream
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              This moisturizer is enriched with 92% snail mucin, providing deep nourishment and repair for
                              the skin. I enjoyed using the cream in the winter; it layers well with other skincare products.
                              Given my dry skin, I preferred this cream over the COSRX Snail Mucin 96% Essence. The essence has a thinner formula, which might be better suited for normal to oily skin, while the all-
                              in-one cream is more effective for dry skin in my experience.
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                              Advanced Snail 92 All-in-One Cream
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              This moisturizer is enriched with 92% snail mucin, providing deep nourishment and repair for
                              the skin. I enjoyed using the cream in the winter; it layers well with other skincare products.
                              Given my dry skin, I preferred this cream over the COSRX Snail Mucin 96% Essence. The

                              essence has a thinner formula, which might be better suited for normal to oily skin, while the all-
                              in-one cream is more effective for dry skin in my experience.
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5">
                            Hand Cream
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                          COSRX Balancium Comfort Ceramide Hand Crème Intense
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              I used this hand cream all winter, and let me tell you, my hands were incredibly soft. This hand
                              crème is perfect for keeping your hands hydrated and feeling soft.
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                          Trader Joe’s Ultra Moisturizing Hand Cream
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              This hand cream is a great dupe for the L’Occitane hand cream. Feels fantastic on your hands
                              and provides excellent moisture. Its thick consistency makes it perfect for keeping your hands
                              hydrated, especially during winter. (Highly recommend)
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 ">
                          Bonus Hair Oil
                          </p>

                          <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                          Parachute Oil
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              Last summer, I went to Pakistan, where I discovered this hair oil! It is 100% coconut oil and
                              smells amazing. It makes my hair feel so soft and has led to more hair growth. (Highly
                              recommend)
                          </p>






                         


                       

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
                Love,
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5">
                Salena 
                </p>
    
              </div>
    
            </div>
          </div>

              <li className="flex items-center justify-end mt-40 mb-20">
                  <Link to="/blog/palestine" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">Palestine

                      <MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>

              
    
          
    
          <Footer></Footer>
    
        </div>
      );
    }
export default Skincare