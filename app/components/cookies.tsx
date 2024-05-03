"use client";

import React, { createRef } from 'react'

const CookieBanner = () => {
    let divElement = React.createRef<HTMLDivElement>();

    const handleClick = () => {
        if(divElement.current !== null){
            divElement.current.classList.add("hidden");
        }
    }

    return (
        <div className='h-[100dvh] w-[100dvw] absolute z-[3] bg-black bg-opacity-60 flex' ref={divElement}>
            <div className='bg-slate-400 bg-opacity-85 h-[50%] w-full m-auto flex flex-col text-2xl font-poppins'>
                <div className='h-full w-full flex items-center justify-center text-center'>
                    Diese Webseite verwendet keine Cookies!
                </div>
                <div className='h-full w-full flex items-center justify-center'>
                    <button className='bg-slate-600 p-5 rounded-xl' onClick={handleClick}>Verstanden!</button>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner