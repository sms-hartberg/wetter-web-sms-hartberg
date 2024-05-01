import React, { useEffect, useState } from 'react'
import { WeatherData, returnIcon, returnText, WMOCode, getMinMaxTemp } from '../api/functions'

interface componentProps {
    data: WeatherData,
    avgData: WeatherData,
    day: number,
    wmoText: WMOCode[],
}

const WeatherPanelSmall = ({ data, avgData, day, wmoText } : componentProps) => {

    const [dayText, setDayText] = useState("UNAVAILABLE");

    useEffect(() => {
        switch(day){
            case 1:
                setDayText("MORGEN");
                break;
            
            case 2:
                setDayText("ÜBERMORGEN");
                break;
            
            case 3:
                setDayText("IN DREI TAGEN");
                break;
    
            case 4:
                setDayText("IN VIER TAGEN");
                break;
    
            default:
                setDayText("UNAVAILABLE");
                break;
        }
    }, [day]);

    return (
        <div className='flex flex-col max-w-full w-full bg-slate-700 bg-opacity-80 rounded-2xl p-4 mt-4'>
            <div className='text-2xl font-bold text-gray-300 pb-4'>
                {dayText}
            </div>
            <div className='flex flex-col text-xl font-semibold text-gray-300'>
                <div className='max-w-full w-full flex'>
                    Regen: {avgData?.preciprob[day]} %<br/>
                    Wind: {avgData?.windspeed[day]} km/h<br/>
                    Wolken: {avgData?.cloudcov[day]} %<br/>
                    Regenmenge: {avgData?.precip[day]} mm<br/>
                    Luftfeuchte: {avgData?.humidity[day]} %<br/>
                </div>
                <div className='flex flex-row justify-center items-center text-4xl'>
                    <div className='p-3 text-4xl text-red-400'>{getMinMaxTemp(data.temperature, day, true)}</div> <div className='p-4 text-2xl text-blue-400'>{getMinMaxTemp(data.temperature, day, false)}</div> °C
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