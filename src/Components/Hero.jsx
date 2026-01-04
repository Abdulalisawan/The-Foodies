import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router';

const Hero = () => {

      const dishes = [
    {
      id: 1,
      title: "Spicy Kacchi Biriyani",
      desc: "Traditional Bangladeshi dish with layered rice and juicy mutton.",
      img: "https://images.unsplash.com/photo-1596040441256-218e7dde126b?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Meat Kebab Skewer",
      desc: "Fresh and healthy grilled meat with aromatic spices.",
      img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Prawn Curry Magic",
      desc: "Rich prawn curry with coconut milk and fresh herbs.",
      img: "https://images.unsplash.com/photo-1626082927389-6cd097cfd330?w=400&h=400&fit=crop",
    },
  ];
    const imgRef = useRef(null);
    const TextRef = useRef(null);
    const [index ,setindex]=useState(0)
      useEffect(() => {
    gsap.to(imgRef.current, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

   useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );
    tl.fromTo(
      TextRef.current.children,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, [index]);

  const Next=()=>setindex((prev)=>(prev+1)% dishes.length )
  const previous =()=>setindex((prev)=> (prev-1 + dishes.length)%dishes.length)

    return (
        <>
        
     

         <section className="bg-white dark:bg-gray-800 w-full md:w-[90vw] lg:w-[80vw] mx-auto my-8 md:my-12 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-16 rounded-3xl shadow-lg overflow-hidden transition-colors duration-200">
     
      <div ref={TextRef} className="flex flex-col items-start text-left space-y-6 lg:flex-1">
        

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {dishes[index].title}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-md">
          {dishes[index].desc}
        </p>

        {/* --- CTA Buttons --- */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/reviews"
            className="px-8 py-3 bg-emerald-600 dark:bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-300"
          >
            Explore Reviews
          </Link>
          <Link
            to="/Alldeals"
            className="px-8 py-3 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors duration-300"
          >
            View Deals
          </Link>
        </div>

       
       
      </div>

     
      <div className="relative flex justify-center mt-10 lg:mt-0 items-center lg:flex-1">
  {/* Gradient Circle Background */}
  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-800"></div>

  {/* Circular Image Wrapper */}
  <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl flex justify-center items-center bg-white dark:bg-gray-700 border-8 border-emerald-50 dark:border-gray-600">
    <img
      ref={imgRef}
      src={dishes[index].img}
      alt={dishes[index].title}
      className="h-full w-full object-cover"
    />
  </div>
</div>

    </section>
    
    {/* Navigation Buttons */}
    <div className='flex gap-4 mt-6 justify-center pb-8'>
    <button
    onClick={previous}
    className="p-3 md:p-4 rounded-full bg-emerald-600 dark:bg-emerald-700 text-white hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg"
    title="Previous"
  >
    <FaLongArrowAltLeft className='w-5 h-5 md:w-6 md:h-6'></FaLongArrowAltLeft>
  </button>

   <button
        onClick={Next}
    className="p-3 md:p-4 rounded-full bg-emerald-600 dark:bg-emerald-700 text-white hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all duration-300 hover:scale-110 shadow-lg"
    title="Next"
  >
    <FaLongArrowAltRight className='w-5 h-5 md:w-6 md:h-6'></FaLongArrowAltRight>
  </button>
</div>

    {/* Dots Indicator */}
    <div className="flex gap-2 justify-center pb-8">
      {dishes.map((_, i) => (
        <button
          key={i}
          onClick={() => setindex(i)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            i === index
              ? 'bg-emerald-600 dark:bg-emerald-400 w-8'
              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
          }`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>

    
    



            
        </>
    );
};

export default Hero;