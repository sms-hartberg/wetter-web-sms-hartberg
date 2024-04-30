"use client";

import React from 'react'
import Footer from '../components/footer'
import Logo from '../components/logo'

const page = () => {
    return (
        <div>
            <div className='z-[2]'>
                <Logo/>
            </div>
            <div className='z-[4] bg-'>

            </div>
            <div className='z-[3]'>
                <Footer/>
            </div>
        </div>
    )
}

export default page