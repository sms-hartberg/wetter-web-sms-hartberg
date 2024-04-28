import React, { useEffect, useState } from 'react'
import { WeatherData, returnIcon, returnText, WMOCode, getMinMaxTemp } from '../api/functions'

interface componentProps {
    data: WeatherData,
    day: number,
    wmoText: WMOCode[],
}

const WeatherPanelSmall = ({ data, day, wmoText } : componentProps) => {

    const [dayText, setDayText] = useState("UNAVAILABLE");
    const [dayIndex, setDayIndex] = useState(0);

    useEffect(() => {
        switch(day){
            case 36:
                setDayText("MORGEN");
                setDayIndex(1);
                break;
            
            case 60:
                setDayText("ÜBERMORGEN");
                setDayIndex(2);
                break;
            
            case 84:
                setDayText("IN DREI TAGEN");
                setDayIndex(3);
                break;
    
            case 108:
                setDayText("IN VIER TAGEN");
                setDayIndex(4);
                break;
    
            default:
                setDayText("UNAVAILABLE");
                setDayIndex(0);
        }
    }, []);

    return (
        <div className='flex flex-col max-w-full w-full bg-slate-700 bg-opacity-80 rounded-2xl p-4 mt-4'>
            <div className='text-2xl font-bold text-gray-300 pb-4'>
                {dayText}
            </div>
            <div className='flex flex-col text-xl font-semibold text-gray-300'>
                <div className='max-w-full w-full flex'>
                    Regen: {data?.preciprob[day]} %<br/>
                    Wind: {data?.windspeed[day]} km/h<br/>
                    Wolken: {data?.cloudcov[day]} %<br/>
                    Regenmenge: {data?.precip[day]} mm<br/>
                    Luftfeuchte: {data?.humidity[day]} %<br/>
                </div>
                <div className='flex flex-row justify-center items-center text-4xl'>
                    <div className='p-3 text-4xl text-red-400'>{getMinMaxTemp(data.temperature, dayIndex, true)}</div> <div className='p-4 text-2xl text-blue-400'>{getMinMaxTemp(data.temperature, dayIndex, false)}</div> °C
                </div>
                <div className='flex flex-row'>
                    <div className='flex items-center justify-center'>
                        {returnIcon(day, 75, wmoText)}
                    </div>
                    <div className='flex items-center justify-center w-[100%] text-3xl'>
                        {returnText(day, wmoText)}
                    </div>
                    <div className='flex items-center justify-center'>
                        {returnIcon(day, 75, wmoText)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPanelSmall