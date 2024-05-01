import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-start items-end'>
            <div className='bg-slate-700 bg-opacity-80 w-[100vw] flex flex-row justify-evenly flex-wrap items-center'>
                <Link href={"/impressum"} className='text-blue-400'><u>Impressum</u></Link>
                <Link href={"https://www.sms-hartberg.at/"} className='text-blue-400'><u>MS/SMS Hartberg</u></Link>
                <Link href={"/credits"} className='text-blue-400'><u>Wirkende</u></Link>
            </div>
        </div>
    )
}

export default Footer