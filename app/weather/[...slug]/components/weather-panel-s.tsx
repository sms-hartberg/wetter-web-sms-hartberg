import React, { useEffect, useState } from 'react'
import { WeatherData, returnIcon, returnText, WMOCode, getMinMaxTemp, getAverageWMO, getDate, formatDate, returnWeekday } from '../api/functions'

interface componentProps {
    data: WeatherData,
    avgData: WeatherData,
    day: number,
    wmoText: WMOCode[],
}

const WeatherPanelSmall = ({ data, avgData, day, wmoText } : componentProps) => {

    const [dayText, setDayText] = useState("");
    const [date, setDate] = useState("01.01.1970");
    const [weekday, setWeekday] = useState("UNAVAILABLE");

    useEffect(() => {
        switch(day){
            case 1:
                setDayText("MORGEN");
                break;
    
            default:
                setDayText("UNAVAILABLE");
                break;
        }
        setDate(formatDate(data.time.at(getDate(day ,data))!));
        setWeekday(returnWeekday(date));
    }, [day, data]);

    return (
        <div className='flex flex-col max-w-full w-full bg-slate-700 bg-opacity-80 rounded-2xl p-4 mt-4'>
            <div className='text-2xl font-bold text-gray-300 pb-4'>
                {dayText !== "UNAVAILABLE" ? <>{dayText}&nbsp;|&nbsp;{date}</> : <>{weekday}&nbsp;|&nbsp;{date}</>}
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
                        {returnIcon(getAverageWMO(wmoText, day), 75)}
                    </div>
                    <div className='flex items-center justify-center w-[100%] text-3xl'>
                        {returnText(getAverageWMO(wmoText, day))}
                    </div>
                    <div className='flex items-center justify-center'>
                        {returnIcon(getAverageWMO(wmoText, day), 75)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPanelSmall