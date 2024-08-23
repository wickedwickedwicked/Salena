import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/Palestine.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";



function Palestine() {
    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "Palestine",
      });
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
      return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10 ">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">August 7</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Palestine</p>
              
              <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                Let&#39;s Talk About Palestine: Ways to Support and Advocate 
                </p>

                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                              Studying public policy has allowed me to understand the complexities that exist when it comes
                              to making change. It has taught me that protesting, educating ourselves, and reaching out to
                              representatives can push for collective transformation. By using our voices, we can rewrite
                              policies and stand up against injustices; after all, the United States is a democracy. Yet, why do
                              many of us find ourselves discouraged and feel that our voices are being suppressed?
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                            Months have turned into days and days into seconds, with the genocide continuing in Palestine.
                            The Palestinian death toll has surpassed 40,000; however, <a href="https://www.npr.org/2024/02/29/1234159514/gaza-death-toll-30000-palestinians-israel-hamas-war" className="text-blue-500 underline">thousands remain unaccounted for — either missing under the rubble, buried hastily in side streets, or decomposing in areas that can&#39;t be safely reached.</a> To this day, Israel continues destroying Palestinian land and has committed
                            numerous violations of international human rights. Israeli forces have unlawfully attacked
                            residential buildings, medical facilities, and aid workers. They have used starvation as a weapon
                            of war in the Gaza Strip, targeted and killed journalists, and subjected Palestinians to cruel
                            torture. These actions represent violations of international human rights law and are publicly
                            documented.
                        </p>

                        <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              Despite the slow pace of change, I believe in the power of our voices and actions. We must
                              continue to fight against genocide and oppression, regardless of the discomfort it may bring to
                              others or ourselves.
                        </p>


                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-5 custom-bronze">
                Here are some ways we have made a difference and how we can continue to create change:
                </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                          <strong>Boycott:</strong> There is a push for a larger Boycott, Divestment, and Sanctions (BDS) campaign
                              targeting Israeli-friendly brands, such as McDonald’s, Starbucks, and Coca-Cola. The boycotts
                              are raising awareness and seeking to mobilize international pressure on Israel to end its
                              occupation of Palestinian territories. The BDS movement <a href="https://www.stimson.org/2024/consumers-protest-the-gaza-war-by-boycotting-us-goods/" className="text-blue-500 underline">&quot;encourages boycotting Israeli products and services, divesting from Israeli companies, and sanctioning the Israeli government&quot;.</a>
                              The boycotting of Starbucks has led to immense pressure, resulting in an $11 billion loss in
                              profits, and many stores shutting down throughout the Middle East. Boycotting is a form of
                              expression, and even though it can be overwhelming to avoid all brands associated with
                              unethical practices, it’s not about changing everything at once. Instead, it’s about gradually
                              finding alternatives and questioning brands that support harmful activities, such as ongoing
                              genocides. Deliberately removing yourself from these brands allows you to be more conscious of
                              your consumption and its impact.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              <strong>Protesting:</strong> Protesting: Protesting is important because it disrupts everyday routines, raises awareness, and
                              draws attention to issues, making it a crucial tool for calling out injustices and driving change.
                              The Palestine protests have raised awareness, influenced public opinion, and garnered worldwide
                              attention, highlighting human rights issues, displacement, violations of international laws, and
                              forced removals. Protesting has led to more community and grassroots movements, such as
                              organized events, educational campaigns, advocacy efforts, and getting more people to recognize
                              fundamental Palestinian rights. Furthermore, protesting comes in many forms, including online
                              activism, rallies, boycotting, signing petitions, and picketing. Remember, your voice matters.

                              Despite attempts to suppress Palestinian voices on social media, there are always ways to
                              circumvent these obstacles. Although there hasn&#39;t been a definitive end to the genocide, standing
                              up and protesting has successfully raised awareness, influenced political discourse, and
                              positively impacted policies worldwide.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              <strong>Education:</strong> To understand what is happening in Palestine, it&#39;s crucial to learn the history and
                              stay updated on recent developments. I&#39;m not always the best at keeping up to date, and at times,
                              it can be overwhelming. In a world where we often feel desensitized to the horrors we witness on
                              screens, this is a common challenge. However, I believe that keeping ourselves informed and
                              understanding what is unfolding in Palestine will allow us to better communicate with others and
                              advocate for meaningful change. Education comes in many forms, including social media
                              content, books, and even on-the-ground WhatsApp chats.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                              <strong>Skills:</strong>We all have our strengths, so I encourage you to utilize them in advocating for Palestine.
                              Recently, I saw a local interview where there was a gas station robbery, and the owner used his
                              name &#39;Hura Palestine,&#39; which means &#39;Free Palestine.&#39; Since there is a lack of coverage for
                              Palestine, it was his way of speaking out. Additionally, I have seen people create websites to
                              showcase which brands support genocide or create art to raise funds for Palestine.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed mb-5">
                              It can be easy to overlook what&#39;s happening and put it in the back of our minds, especially as we
                              get consumed by everyday life. But that&#39;s not how change happens. With discomfort comes
                              resilience, so continue fighting against injustices. For those who feel like they aren&#39;t doing much
                              or even feel hopeless, remember: that the simple act of doing something is much greater than
                              doing nothing at all.
                          </p>

                        
                          <style jsx>{`
                            .text-gradient {
                            background: linear-gradient(90deg, red, white, green);
                            background-size: 100%;
                            background-clip: text;
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            display: inline;
                                        }
                            `}</style>


                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed text-gradient ">
                         <strong> FREE PALESTINE </strong>
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

           
          <div className="mt-40 mb-20 flex justify-between">
            {/* Left link */}
            <Link to="/blog/skincare" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
              <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
              <span className="hidden sm:inline">Favorite Skincare Products</span>
            </Link>

            {/* Right link */}
            <Link to="/blog/ocean-city" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
              <span className="hidden sm:inline">A Local's Guide to Ocean City's Best Spots</span>
              <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
            </Link>
          </div>

              
    
          
    
          <Footer></Footer>
    
        </div>
      );
    }
export default Palestine