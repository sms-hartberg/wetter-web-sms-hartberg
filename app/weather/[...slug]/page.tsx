"use client";

import Background from '@/app/components/bg_element';
import React, { useEffect, useState } from 'react';
import { WeatherData, getData, replacePlus } from "./lib/vars";
import { getWMOText, WMOCode, returnIcon, returnText, getMinMaxTemp } from "./lib/vars";
import styles from "./page.module.css";
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
        <div className="font-poppins h-screen flex justify-center items-center flex-col">
            <div className={"max-h-[80vh] absolute z-2 flex-col flex items-center overflow-y-scroll rounded-md " + styles.scrollbar}>
                <div className="flex font-bold text-[3vh] drop-shadow-xl mb-6 justify-center items-center flex-wrap">
                    Fünftages-Vorraussage für&nbsp;<div className='text-green-400'>{replacePlus(name)}</div>
                </div>
                <div className="max-h-full max-w-[75vw] w-[75vw]">
                    <div className="max-h-screen w-full flex justify-center items-end">
                        <div className="flex flex-col max-w-full w-full bg-green-950 bg-opacity-80 rounded-2xl p-4 mt-4">
                            <div className="text-2xl font-bold text-gray-300 pb-4">HEUTE</div>
                            <div className="flex flex-col text-xl font-semibold text-gray-300">
                                <div className="max-w-full w-full flex">
                                    Regen: {data?.preciprob[12]} %<br />
                                    Wind: {data?.windspeed[12]} km/h<br />
                                    Wolken: {data?.cloudcov[12]} %<br />
                                    Regenmenge: {data?.precip[12]} mm<br />
                                    Luftfeuchte: {data?.humidity[12]} %<br />
                                </div>
                                <div className="flex flex-row justify-center items-center text-4xl">
                                    {data !== null && (
                                        <>
                                            <div className="p-3 text-4xl text-red-400">
                                                {getMinMaxTemp(data.temperature, 0, true)}
                                            </div>
                                            <div className="p-4 text-2xl text-blue-400">
                                                {getMinMaxTemp(data.temperature, 0, false)}
                                            </div>
                                            °C
                                        </>
                                    )}
                                </div>
                                <div className="flex flex-row">
                                    <div className="flex items-center justify-center">{returnIcon(12, 75, wmotext)}</div>
                                    <div className="flex items-center justify-center w-[100%] text-3xl">{returnText(12, wmotext)}</div>
                                    <div className="flex items-center justify-center">{returnIcon(12, 75, wmotext)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full max-h-full flex flex-col items-start mt-24">
                        {data !== null && <WeatherPanelSmall data={data} day={36} wmoText={wmotext}></WeatherPanelSmall>}
                        {data !== null && <WeatherPanelSmall data={data} day={60} wmoText={wmotext}></WeatherPanelSmall>}
                        {data !== null && <WeatherPanelSmall data={data} day={84} wmoText={wmotext}></WeatherPanelSmall>}
                        {data !== null && <WeatherPanelSmall data={data} day={108} wmoText={wmotext}></WeatherPanelSmall>}
                    </div>
                </div>
            </div>
            <Background/>
        </div>
    )
}