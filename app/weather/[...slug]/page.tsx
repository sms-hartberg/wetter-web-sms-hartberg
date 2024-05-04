"use client";

import Background from '@/app/components/bg_element';
import React, { useEffect, useState } from 'react';
import { WeatherData, getData, replacePlus } from "./api/functions";
import { getWMOText, WMOCode, returnIcon, returnText, getMinMaxTemp, getAverageValue, getAverageWMO } from "./api/functions";
import styles from "./page.module.css";
import WeatherPanelSmall from './components/weather-panel-s';
import Logo from '@/app/components/logo';
import Footer from '@/app/components/footer';

export default function WeatherPage({ params }: { params: { slug: string[]}}){

    const [latStr, longStr, name] = params.slug;
    const lat: number = parseFloat(latStr);
    const long: number = parseFloat(longStr);
    const [data, setData] = useState<WeatherData | null>(null);
    const [avgData, setAvgData] = useState<WeatherData | null>(null);
    const [wmotext, setWmotext] = useState<WMOCode[]>([]);

    const fetchData = async () => {
        const fetchedData = await getData(lat, long);
        setData(fetchedData);
        setWmotext(getWMOText(fetchedData.wmo));
        setAvgData(getAverageValue(fetchedData));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="font-poppins h-[100dvh] flex justify-center items-center flex-col">
            <div className='h-full'>
                <Logo/>
                <Background/>
            </div>
            <div className={"max-h-[85dvh] absolute flex-col flex items-center overflow-y-scroll rounded-md " + styles.scrollbar}>
                <div className="flex font-bold text-[3vh] drop-shadow-xl mb-6 items-center flex-wrap">
                    Fünftages-Vorraussage für&nbsp;<div className='text-green-700'>{replacePlus(name)}</div>
                </div>
                <div className="max-h-full max-w-[75vw] w-[75vw]">
                    <div className="max-h-screen w-full flex justify-center items-end">
                        <div className="flex flex-col max-w-full w-full bg-green-950 bg-opacity-80 rounded-2xl p-4 mt-4">
                            <div className="text-2xl font-bold text-gray-300 pb-4">HEUTE</div>
                            <div className="flex flex-col text-xl font-semibold text-gray-300">
                                <div className="max-w-full w-full flex">
                                    Regen: {avgData?.preciprob[0]} %<br />
                                    Wind: {avgData?.windspeed[0]} km/h<br />
                                    Wolken: {avgData?.cloudcov[0]} %<br />
                                    Regenmenge: {avgData?.precip[0]} mm<br />
                                    Luftfeuchte: {avgData?.humidity[0]} %<br />
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
                                    <div className="flex items-center justify-center">{returnIcon(getAverageWMO(wmotext, 0), 75)}</div>
                                    <div className="flex items-center justify-center w-[100%] text-3xl">{returnText(getAverageWMO(wmotext, 0))}</div>
                                    <div className="flex items-center justify-center">{returnIcon(getAverageWMO(wmotext, 0), 75)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full max-h-full flex flex-col items-start mt-24">
                        {Array.from({ length: 6 }, (_, index) => (
                            avgData !== null && data !== null && <WeatherPanelSmall key={index} data={data} avgData={avgData} day={index + 1} wmoText={wmotext}></WeatherPanelSmall>
                        ))}
                    </div>
                </div>
            </div>
            <div className='absolute z-[2] bottom-0'>
                <Footer/>
            </div>
        </div>
    )
}