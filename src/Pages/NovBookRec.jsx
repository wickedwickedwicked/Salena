import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/NovBookRec.jpg';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";
import ReactGA from "react-ga4";



function NovBookRec() {
    useEffect(() => {
      ReactGA.send({
        hitType: "pageview",
        page: "/my-path",
        title: "November Book Recommendations",
      });
         window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
      return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10 ">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">November 18</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">November Book Recommendations</p>
              
              <div className="max-w-[1200px] mx-auto "> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                

                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                            Reading a book has always been a source of enjoyment. When we immerse ourselves in a book,
                            we learn, grow, and escape from our everyday stressors. Yet, why do many of us gravitate
                            towards endless scrolling or doing something mind-numbing instead of reading? Many of us may
                            feel exhausted from daily life and don&#39;t want to engage in a thought-provoking activity, yet these
                            choices can lead to unwanted habits.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                            We were taught the importance of reading as children, but why do we forget the lessons as we
                            grow older? We often go long periods without reading, which is odd considering reading has
                            many benefits, including improving our creativity and assisting us in concentrating on everyday
                            tasks. When we read, we gain wisdom, enhance vocabulary, and help reduce our stress. It
                            increases our mental dictionary, which allows us to articulate our ideas and thoughts, leading us
                            to be better writers, advocates, and conversationalists. Not only this, reading is linked to a
                            lowered risk of dementia and Alzheimer&#39;s! Many forms of reading include books, articles,
                            newspapers, and magazines.
                          </p>

                          <p className="text-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                            Here are some book recommendations to help us out of our reading funk.
                          </p>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">The Stationery Shop of Tehran</span> by Marjan Kamali: This novel is set in Tehran, Iran, and follows
                                  a love story between Roya and Bahman. Their first meeting occurred at a stationery shop in the
                                  1950s, during the expulsion of the prime minister. (I love this book: it is genuinely well-written
                                  and will leave you thinking for days.)
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">The Silent Patient</span> by Alex Michaelides is a psychological thriller. Alicia lives a beautiful life,
                                  yet one evening, she shoots her husband five times in the face and refuses to speak. Theo is a
                                  psychotherapist, determined to get her to talk and uncover the truth. (I love this book! You won&#39;t
                                  be able to put it down. It&#39;s so well written and definitely a top psychological thriller
                                  recommendation.)
                              </p>
                          </div>

                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Fahrenheit 451</span> is a book about an American Society where books are outlawed. The book
                                  comes from the viewpoint of Guy Montag, a &quot;fireman&quot; who goes around burning books and
                                  begins to question everything. (I read it thinking this would be a boring read, yet I was pleasantly
                                  surprised. It is a classic book that makes one appreciate literature.)
                              </p>
                          </div>


                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">The Midnight Library</span> by Matt Haig follows Nora Seed, who finds herself in a library with
                                  rows of books about different lives and choices. Nora gets a chance to make things right. (If you
                                  ever question your choices in life or wonder where specific paths lead, do pick up the book. It&#39;s a
                                  good read.)
                              </p>
                          </div>


                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">The Alchemist</span> by Paulo Coelho follows Santiago, a shepherd boy from Spain who yearns to
                                  travel. Santiago has recurring dreams about treasures lying in the pyramids. His journey leads
                                  him to vast riches beyond his imagination. Does he ever find his prizes in Egypt? (I love this
                                  book so much that I have read it 4 times! The storytelling is beautiful, and it&#39;s a quick read. The
                                  choice of words is filled with wisdom, imagery, and philosophy. Highly Recommend)
                              </p>
                          </div>


                          <div className="mt-5">
                              <p className="text-start text-xl eb-garamond-normal leading-relaxed bullet-point">
                                  <span className="ml-4">&#8226;</span> <span className="bold-text">Man’s Search for Meaning</span> by Viktor Frankl is a memoir and is written about a man who was
                                  in Nazi concentration camps. Viktor is a Psychiatrist, so the book is based on his experiences and
                                  the stories shared by his patients. The book encourages readers to find meaning even through
                                  suffering. The first section tells in detail the horrors he witnessed in the concentration camp,
                                  while the second part is more focused on logotherapy, his therapeutic approach emphasizing
                                  finding meaning in life as a key to resilience and healing, even in the face of suffering. (We will
                                  all experience suffering, yet we have the freedom to choose how we react. I loved reading this
                                  book; it’s so well-written and heartbreaking to read at some points. The book teaches us valuable
                                  lessons that we can apply to our lives.)
                              </p>
                          </div>


                          <p className="text-start text-xl eb-garamond-normal mt-10 leading-relaxed ">
                              Reading offers us a world of knowledge, adventures, and inspiration, helping us grow while
                              giving us a break from the everyday grind. Whether it&#39;s been a while or you&#39;re revisiting an old
                              favorite, remember that each page you turn brings new insights and experiences. Now go pick up
                              a book, a new adventure awaits you :)
                          </p>





                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5" leading-relaxed>
                Best,
                </p>
    
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5">
                Salena 
                </p>
    
              </div>
    
            </div>
          </div>

              <li className="flex items-center justify-end mt-40 mb-20">
                  <Link to="/blog/skincare" className="flex items-center text-4xl eb-garamond-normal custom-bronze mr-0 sm:mr-20 hover:text-current">Favorite Skincare Products

                      <MdArrowForwardIos className="ml-2 text-custom-bronze" /></Link></li>

              
    
          
    
          <Footer></Footer>
    
        </div>
      );
    }
export default NovBookRec