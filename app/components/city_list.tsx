"use client";

import React from 'react'
import { useRouter } from "next/navigation";
import { removeUmlaut } from '../weather/[...slug]/lib/vars';

interface elementProps {
    json: any,
};

interface resultItem {
    name: string;
    country: string;
    admin1?: string;
    admin2?: string;
    latitude: number;
    longitude: number;
}

const CityList = ({ json } : elementProps) => {

    const router = useRouter();

    function constructURL(lat: number, long: number, name: string){
        const url = "/weather/" + lat + "/" + long + "/" + removeUmlaut(name);

        return url;
    }

    const handleLocationClick = (index: number) => {
        router.push(constructURL(json.results[index].latitude, json.results[index].longitude, json.results[index].name.replace(/\s/g, "+")));
    };

    const resultDivs = json.results.map((result: resultItem, index: number) => (
        <button key={index} className="font-normal flex flex-row bg-gray-800 p-2 mb-2 rounded-lg hover:bg-gray-700 active:bg-gray-900" onClick={() => {handleLocationClick(index)}}>
            <div className='flex-grow flex-row text-left'>{result.name}</div>
            {result.admin2 ? <div className='flex-grow text-center flex-row'>{result.admin2}</div> : (result.admin1 && <div className='flex-grow text-center'>{result.admin1}</div>)}
            <div className='flex-grow text-right flex-row'>{result.country}</div>
        </button>
    ));

    return (
        <div className='flex flex-col overflow-hidden w-[100%] mb-4'>
            {resultDivs}
        </div>
    )
}

export default CityList