"use client";

import Background from '@/app/components/bg_element';
import React, { useEffect, useState } from 'react'
import { WeatherData, getData, replacePlus } from "./lib/vars";
import { getWMOText, WMOCode, returnIcon, returnText, detectMobile } from "./lib/vars";
import WeatherPanelSmall from './components/weather-panel-s';

export default function WeatherPage({ params }: { params: { slug: string[]}}){

    const [latStr, longStr, name] = params.slug;
    const lat: number = parseFloat(latStr);
    const long: number = parseFloat(longStr);
    const [data, setData] = useState<WeatherData | null>(null);
    const [wmotext, setWmotext] = useState<WMOCode[]>([]);

    const fetch = async () => {
        const fetchedData = await getData(lat, long);
        setData(fetchedData)
        setWmotext(getWMOText(fetchedData.wmo));
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className={'font-poppins h-[100vh] flex justify-center items-center flex-col overflow-hidden flex-wrap'}>
            <div className={'w-[75vw] h-[100vh] absolute z-2 flex-col flex justify-center items-center'}>
                <div className='flex mt-28 font-bold text-4xl drop-shadow-md'>Fünftages-Vorraussage für {replacePlus(name)}</div>
                <div className={'h-[100%] w-[100%] flex justify-center items-end'}>
                    <div className='h-[35vh] w-[100%] bg-slate-700 bg-opacity-80 rounded-2xl text-[175%] font-bold p-4 text-gray-300 flex'>
                        <div className='h-[100%] w-[100%]'>
                            HEUTE
                            <div className='font-semibold flex items-start flex-col text-[75%] justify-end'>
                                {data !== null && <div className='flex flex-col'>
                                    <br/>
                                    Regenwahrscheinlichkeit: {data.preciprob[12]} %
                                    <br/>
                                    Windgeschwindigkeit: {data.windspeed[12]} km/h
                                    <br/>
                                    Wolkenbedeckung: {data.cloudcov[12]} %
                                    <br/>
                                    Regenmenge: {data.precip[12]} mm
                                    <br/>
                                    Feuchtigkeit: {data.humidity[12]} %
                                </div>}
                            </div>
                        </div>
                        <div className='h-[100%] w-[100%] flex justify-center items-center text-6xl'>
                            {data?.temperature[12]} °C
                        </div>
                        <div className='h-[100%] w-[100%] flex flex-row justify-end'>
                            <div className='flex h-[100%] flex-col justify-center items-center'>
                                {returnText(12, wmotext)}
                            </div>
                            <div className='flex flex-col justify-center'>
                                {returnIcon(12, 300, wmotext)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[100%] flex justify-between items-start mt-12'>
                    {data !== null && <WeatherPanelSmall data={data} day={36} wmoText={wmotext}></WeatherPanelSmall>}
                    {data !== null && <WeatherPanelSmall data={data} day={60} wmoText={wmotext}></WeatherPanelSmall>}
                    {data !== null && <WeatherPanelSmall data={data} day={84} wmoText={wmotext}></WeatherPanelSmall>}
                    {data !== null && <WeatherPanelSmall data={data} day={108} wmoText={wmotext}></WeatherPanelSmall>}
                </div>
            </div>
            <Background/>
        </div>
    )
}