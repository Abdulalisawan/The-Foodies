import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {

      const dishes = [
    {
      id: 1,
      title: "Spicy Kacchi Biriyani",
      desc: "Traditional Bangladeshi dish with layered rice and juicy mutton.",
      img: "/src/Asstes/kacchi.png",
    },
    {
      id: 2,
      title: "Green Salad Delight",
      desc: "Fresh and healthy salad with mint and lemon dressing.",
      img: "/src/Asstes/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zNV9waG90b19vZl9wYW5pX3B1cmlfcmVjaXBlX3RvcF92aWV3X2lzb2xhdGVkX19hMzRlN.jpg",
    },
    {
      id: 3,
      title: "Prawn Curry Magic",
      desc: "Rich prawn curry with coconut milk and herbs.",
      img: "/src/Asstes/pngtree-top-view-of-thanksgiving-roasted-chicken-on-plate-with-other-dishes-png-image_13673245.png",
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
      { opacity: 1, x: -0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, [index]);

  const Next=()=>setindex((prev)=>(prev+1)% dishes.length )
  const previous =()=>setindex((prev)=> (prev-1 + dishes.length)%dishes.length)

    return (
        <>
        
     

         <section className="  bg-white w-[95vw] md:w-[75vw]  lg:w-[70vw] mx-auto mt-10  flex flex-col  md:flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-10 rounded-3xl shadow-md overflow-hidden">
     
      <div ref={TextRef} className="flex flex-col items-start text-left space-y-5 ">
        

        <h1  className=" text-4xl md:text-6xl font-extrabold text-black leading-tight">
          {dishes[index].title}
        </h1>

        <p  className="text-black  leading-relaxed max-w-md">
          {dishes[index].desc}
        </p>

        {/* --- CTA Buttons --- */}
        <div className="flex hero items-center gap-4">
          <button  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300">
            View Details
          </button>
          
        </div>

       
       
      </div>

     
      <div className="relative flex justify-center mt-10 lg:mt-0 items-center md:mt-10 ">
  {/* Gradient Circle Background */}
  <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full bg-gradient-to-r from-white to-red-100"></div>

  {/* Circular Image Wrapper */}
  <div className="relative z-10 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full overflow-hidden shadow-xl flex justify-center items-center bg-white">
    <img
      ref={imgRef}
      src={dishes[index].img}
      alt={dishes[index].title}
      className="h-full w-auto object-cover object-center"
      style={{ aspectRatio: '1 / 1', transform: 'scale(1.3)' }} 
    />
  </div>
</div>

    </section>
    <div className='flex gap-2 mt-2 justify-center'>
    <button
    onClick={Next}
  className="
    relative overflow-hidden 
    px-8 py-3 
    border-2 border-[#2c2c2c] 
   
    text-white text-[1.2rem] font-bold 
    rounded-[30px] 
    cursor-pointer 
    outline-none 
    transition-all duration-500 ease-in-out
    hover:border-[#666] hover:bg-[#292929]
    group
  "
>
  <span
    className="
      absolute inset-0 
      scale-0 
      rounded-[30px]
      bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]
      transition-transform duration-500 ease-in-out 
      group-hover:scale-[4]
    "
  ></span>

  <span className="relative z-10"><FaLongArrowAltLeft className='text-black'></FaLongArrowAltLeft></span>
</button>

   <button
        onClick={previous}
  className="
    relative overflow-hidden 
    px-8 py-3 
    border-2 border-[#2c2c2c] 
    
    text-white text-[1.2rem] font-bold 
    rounded-[30px] 
    cursor-pointer 
    outline-none 
    transition-all duration-500 ease-in-out
    hover:border-[#666] hover:bg-[#292929]
    group
  "
>
  <span
    className="
      absolute inset-0 
      scale-0 
      rounded-[30px]
      bg-[radial-gradient(circle,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]
      transition-transform duration-500 ease-in-out 
      group-hover:scale-[4]
    "
  ></span>

  <span className="relative z-10"><FaLongArrowAltRight className='text-black'></FaLongArrowAltRight></span>
</button>
</div>

    <div>

     
        
    </div>
    
    



            
        </>
    );
};

export default Hero;