import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-[100vw] h-[100vh] absolute z-[3] flex justify-start items-end'>
            <div className='bg-slate-700 bg-opacity-80 w-[100vw] h-[3vh]'>
                <Link href={"/impressum"}>Impressum</Link>
            </div>
        </div>
    )
}

export default Footer