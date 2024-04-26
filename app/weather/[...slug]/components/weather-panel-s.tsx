import React, { useEffect, useState } from 'react'
import { WeatherData, returnIcon, returnText, WMOCode } from '../lib/vars'

interface componentProps {
    data: WeatherData,
    day: number,
    wmoText: WMOCode[],
}

const WeatherPanelSmall = ({ data, day, wmoText } : componentProps) => {

    const [dayText, setDayText] = useState("UNAVAILABLE");

    useEffect(() => {
        switch(day){
            case 36:
                setDayText("MORGEN");
                break;
            
            case 60:
                setDayText("ÜBERMORGEN");
                break;
            
            case 84:
                setDayText("IN DREI TAGEN");
                break;
    
            case 108:
                setDayText("IN VIER TAGEN");
                break;
    
            default:
                setDayText("UNAVAILABLE");
        }
    }, []);

    return (
        <div className='flex flex-col w-[20%] bg-slate-700 bg-opacity-80 rounded-2xl p-4 aspect-square'>
            <div className='text-2xl font-bold text-gray-300'>
                {dayText}
            </div>
            <div className='flex flex-col text-xl font-semibold text-gray-300'>
                <div>
                    Regenwahrsch.: {data?.preciprob[day]} %<br/>
                    Wind: {data?.windspeed[day]} km/h<br/>
                    Wolken: {data?.cloudcov[day]} %<br/>
                    Regenmenge: {data?.precip[day]} mm<br/>
                    Luftfeucht.: {data?.humidity[day]} %<br/>
                </div>
                <div className='flex flex-row'>
                    <div className='flex items-center justify-center'>
                        {returnIcon(day, 75, wmoText)}
                    </div>
                    <div className='flex items-center justify-center w-[100%]'>
                        {returnText(day, wmoText)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPanelSmall