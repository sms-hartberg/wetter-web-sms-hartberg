import React from 'react'
import Footer from '../components/footer'
import Logo from '../components/logo'
import styles from "../main.module.css"

const page = () => {
    return (
        <div className={'w-screen h-screen flex-col flex'}>
            <div className='fixed top-0'>
                <Logo/>
            </div>
            <div className='flex flex-col flex-grow'>
                <div className='flex-col flex justify-center h-full'>
                    <div className='max-h-full h-full overflow-y-scroll'>
                        <p className='font-extrabold text-4xl'>
                            IMPRESSUM
                        </p>
                        <br/>
                        <div className='flex flex-col'>
                            <b>Mittelschule und Sportmittelschule Hartberg mit IT-Schwerpunkt</b>
                            <br/>
                            Dir. Bianka Neuwirth, BEd
                            <br/>
                            Edelseegasse 18<br/>8230 Hartberg
                            <span>    
                                <div className='font-bold pt-2 flex-wrap flex'>E-Mail:&nbsp; <a href="mailto:ms-sms-it@hartberg.at" className='text-blue-600 font-normal'>ms-sms-it@hartberg.at</a></div>
                                <div className='font-bold pt-2 flex-wrap flex'>Telefon:&nbsp; <a href="tel:03332603440" className='text-blue-600 font-normal'>+43(0)3332/603 440</a></div>
                                <div className='font-bold pt-2 flex-wrap flex'>Webseite:&nbsp; <a href="https://www.sms-hartberg.at/" className='text-blue-600 font-normal'>www.sms-hartberg.at</a></div>
                            </span>
                            <p className={'pt-8 ' + styles.blue_links}>
                                <b>Rechtliches</b><br/>
                                Das Hintergrundbild auf der Such- und Ergebnisseite wurde auf <a href='https://www.pixabay.com/'>Pixabay</a> erworben und fällt somit in die Pixbay Content License.
                                Die SVG-Icons auf der Ergebnisseite, die unter anderem die Wetterbedingungen bildlich veranschaulichen, werden vom Projekt <a href="https://github.com/react-icons/react-icons">React Icons</a> verwendet
                                und sind laut Lizenz frei verwendbar.
                                <br/><br/>
                                Die Inhalte und externe Links sowie externe Hyperlinks auf dieser Webseite wurden sorgfältig untersucht, jedoch übernehmen Ersteller sowie Betreiber dieser Webseite KEINE Haftung für diese. Für die verlinkten
                                Inhalte sind ausschließlich deren Betreiber verantwortlich.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fixed bottom-0'>
                <Footer/>
            </div>
        </div>
    )
}

export default page