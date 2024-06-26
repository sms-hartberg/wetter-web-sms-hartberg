import React from 'react'
import Logo from '../components/logo'
import Footer from '../components/footer'

const Credits = () => {
    return (
        <main className='h-[100dvh] w-[100dvw] flex flex-col bg-[#00d4ff] font-poppins'>
            <Logo/>
            <div className='flex h-full text-2xl max-w-full ml-4 mr-4'>
                <div className='m-auto'>
                    <div>
                        <p className='font-extrabold'>ENTWICKLER</p>
                        Tobias Schweighofer (Schüler)<br/><br/>
                        <p className='font-extrabold'>MITWIRKENDE</p>
                        Dipl.-Päd. Margit Großschedl<br/>
                        Mathias Neuherz, BEd<br/>
                        Dir. Bianka Neuwirth, BEd
                    </div>
                    <div className='mt-12'>
                        <a className='font-extrabold text-blue-700' href='https://github.com/tobix88/wetter-web-sms-hartberg'><u>SOURCE CODE GIBT ES HIER</u></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Credits