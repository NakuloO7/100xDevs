import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js'

export const Hero = ()=>{

    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">
                    GROWING WITH DATA ANALYTICS
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Grow with data.
                </h1>
                <div className="flex justify-center items-center">
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                        Fast, flexible financing for
                    </p>
                    <TypedComponent />
                </div>
                <p className="md:text-2xl text:xl font-bold text-gray-500 pt-5">
                    Monitor your data analytics to increase revenue for BTB, BTC, SASS platforms.
                </p>
            </div> 
        </div>
    )
}

const TypedComponent = ()=>{
    const el = useRef(null);
    
        useEffect(()=>{
            const typed = new Typed(el.current, {
                strings : ['BTB', 'BTC', 'SASS'],
                typeSpeed :120,
                 backSpeed :140,
                 loop : true,
            })
    
            return () => {
                // Cleanup Typed.js instance on component unmount
                typed.destroy();
            };
    
        },[])
        return <span className={'md:text-5xl sm:text-4xl text-xl font-bold pl-2'} ref={el}></span>; // Attach the ref here  

}