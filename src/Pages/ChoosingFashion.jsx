import React, { useEffect } from 'react';
import Header from '../Components/Header';
import myImage from '../assets/Fashion.png';
import myImage2 from '../assets/NavMap.png';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md";

function ChoosingFashion() {
    useEffect(() => {
      document.title = "Choosing Sustainable Fashion";
        window.scrollTo(0, 0); // Scrolls to the top when component mounts
    }, []);
    return (
        <div className='w-full bg-black text-white min-h-screen'>
    
          <Header />
    
          <div className="flex justify-center mr-10 ml-10">
            <div className="space-y-4 mt-10">
              <p className="flex justify-center text-xl text-white mb-2 mt-40">Mar 6</p>
              <p className="text-center flex justify-center text-6xl eb-garamond-normal custom-bronze mb-2">Choosing Sustainable Fashion</p>
              
              <div className="max-w-[1200px] mx-auto"> {/* Adjust the max-width to match your image width */}
                <img src={myImage} alt="" className="mx-auto w-auto h-auto" />

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Our planet is slowly dying, and we have already seen the effects of global warming first hand from the drastic temperature changes to the intense heat waves. In fact, this past summer alone, we experienced more heatwaves, flooding, droughts, and temperature variations than we have in decades, a trend that is only predicted to grow in severity in coming years. A UN Climate Change report said, "More people will be forced out of their homes from weather, disasters, sea level rise, and tropical cyclone" by 2050 (PBS, 2022). In addition, greenhouse gas in the Earth's atmosphere traps heat from the sun and contributes to global warming. Although there is a significant increase in greenhouse gasses, there is still time for us to rectify our actions. However, this will require heavily scrutinizing and challenging the way we consume. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Unsurprisingly, the fashion industry is one of the world's largest polluters and climate change contributors. Data from the United Nations Framework Convention on Climate Change highlights that the fashion industry is responsible for around 10% of global carbon emissions. This is due to several factors, including using fossil fuels to power production, pesticides to cultivate textiles, and releasing microfibers into the ocean from washing synthetic fabrics. The environmental impact comes from the use of raw materials. For example, polyester requires an estimated 342 million barrels of oil annually, while dying demands about 43 million tons of chemicals yearly.                </p>
               

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Moreover, fast fashion is equally a threat to human rights as well. These companies rarely have suitable working conditions and tend to predominantly consist of children or "forced citizens, such as excessive consumer demand, which disadvantages the most vulnerable within [the] society" (Human Rights Pulse, 2021). Therefore, it's unsurprising that most production happens in "developing" countries with little to no labor laws and a lack of protection for laborers.                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                In the past few years, the brand Shein has grown exponentially through social media and fast production, yet it's crucial to note that it infamously remains to be everything wrong with fast fashion today. Not only do many of its garments contain hazardous chemicals, but the brand is also known for its abundance of human rights violations. Additionally, Shein has yet to make any efforts to reduce carbon emissions. Instead, the brand carelessly emits everything from hazardous chemicals to microplastics.   </p>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 leading-relaxed">
                The  most prominent fashion brands criticized for their environmental and social impact are as follows: </p>

                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                H&M: This Swedish fast fashion retailer is one of the world's largest buyers of textiles and garments and has been criticized for its excessive use of water and energy in production and its large amount of textile waste.

                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Zara: This Spanish fast fashion brand has been criticized for lacking transparency in its supply chain and relying on exploitative labor practices.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Nike: This American sportswear company has been criticized for using hazardous chemicals in production and lacking transparency in its supply chain.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Levis: This American denim company has been criticized for its excessive use of water in production and lack of transparency in its supply chain.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                H&M: This Swedish fast fashion retailer is one of the world's largest buyers of textiles and garments and has been criticized for its excessive use of water and energy in production and its large amount of textile waste.

                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Forever 21: This American fast fashion brand has been criticized for lacking transparency in its supply chain and reliance on exploitative labor practices.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Shein: This Chinese fast fashion brand is arguably one of the worst of its kind due to its lack of transparency in the supply chain, exploitative labor practices, hazardous chemicals, and excessive carbon emissions of microplastics. And let's be honest with ourselves…the clothes are poorly-made and consistently perpetuate a throwaway fashion culture. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                I felt overwhelmed when I first started learning about fast fashion and my connection to these well-known brands. I would frequently ask myself: Can I even do anything? What options are available? It's not my problem; someone else can do it, right? But in reality, how will we ever help our planet if we don't do our part? 
                </p>

                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Some good news is that many brands (including some of the above) are trying to create sustainable fashion. This means they're using eco-friendly materials, adopting circular economy models, investing in renewable energy, and improving supply chain transparency to reduce environmental impact.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze">
                What is Sustainable Fashion? 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Sustainable fashion is making clothes, shoes, and accessories that are kinder to the environment and people. It's about reducing waste and pollution using eco-friendly materials and production methods. Think natural fabrics like organic cotton, linen, and hemp using low-impact dyeing and printing methods. But it's not just about the planet. Sustainable fashion also prioritizes ethical and fair labor practices so that workers are treated well and paid fairly.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                This helps promote social and economic sustainability, which is just as important as environmental sustainability. By making fashion more sustainable, we can help protect our planet and those who make our clothes. Plus, it feels good knowing where our clothes come from and how we are making a positive impact through our choices.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-bold mt-10 custom-bronze">
                What are Some Ways You Can Help? 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Did you know that just because you donate your clothes doesn't necessarily mean they will be used? According to the National Institute of Standards and Technology, only 15% of these items are reused or recycled, with the overwhelming majority (85%) ending up in landfills or incinerated. Though this is disappointing and jarring since we grew up with the misconception that overconsumption can simply be solved through regular donation, there are many substantial ways that we can still do our part!
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                First and foremost, we must limit and/or stop buying from fast-fashion brands. Even though I listed some reasons above, many more will require us to do further research on our own! Though entirely stopping our consumption of these brands may not be feasible for everyone, we should all consider asking ourselves the following before swiping our cards: can I see myself wearing this for the next couple of years, or am I buying it because it's fashionable for now? 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Secondly, try to steer clear of fast-fashion trends as they are very cyclical and lack longevity. Just because something is popular today doesn't mean it will be tomorrow, nor does it mean you need to buy it. Instead, choose quality over quantity while shopping and aim for pieces you can wear for years.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Finally, check out the thrifting or vintage options for high-quality clothing. This is an eco-friendly, sustainable, and socially responsible way to find pieces that fit your budget and current style.
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                It is time for us to make a difference and prioritize reusing, reducing, recycling, and making conscious decisions about what we buy. There are plenty of ways to help reduce the worsening effects of climate change, so let's do our part to positively impact our Earth since it's the only one we have. 
                </p>

                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-10 leading-relaxed">
                Ps. Special thanks to Menna Ibrahim for their invaluable help editing this post! 
                </p>

                
                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Love,                 </p>


                <p className="text-start flex justify-start text-xl eb-garamond-normal mt-5 leading-relaxed">
                Salena                  </p>






             
    
              </div>
    
            </div>
          </div>


        <div className="mt-40 mb-20 flex justify-between">
        {/* Left link */}
        <Link to="/blog/navigating-istanbul" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <MdArrowBackIosNew className="ml-10 mr-2 text-custom-bronze" />
            <span className="hidden sm:inline">Navigating Istanbul</span>
        </Link>

        {/* Right link */}
        <Link to="/blog/what-will-people-say" className="flex items-center text-4xl eb-garamond-normal custom-bronze hover:text-current">
            <span className="hidden sm:inline">What Will People Say?</span>
            <MdArrowForwardIos className="mr-10 ml-2 text-custom-bronze" />
        </Link>
        </div>

    
          <Footer></Footer>
    
        </div>
      );
    }



export default ChoosingFashion