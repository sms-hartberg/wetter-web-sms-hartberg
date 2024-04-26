"use client";

import React, { useState } from 'react'
import styles from "../main.module.css";
import CityList from './city_list';


const SearchElement = () => {
    const [textVal, setTextVal] = useState("");
    const [foundSth, setFoundSth] = useState(false);
    const [json, setJson] = useState<string>("");
    
    async function fetchCities(cityname: string) {
        cityname = cityname.replace(/\s/g, "+");

        const response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + cityname + "&count=10&language=en&format=json");
        
        return(response.json());
    };

    async function handleSearch() {
        const cities = await fetchCities(textVal);

        if(!cities.hasOwnProperty("results")){
            setFoundSth(false);
            return 0;
        }

        setJson(cities);

        setFoundSth(true);
    };

    return (
        <div className='p-5 h-[30vh] min-w-[50vw] max-h-[100%] max-w-[100%] flex flex-col justify-center items-center bg-slate-700 rounded-3xl bg-opacity-80'>
            <div className='flex flex-row w-[100%]'>
                <input className={'focus:outline-none p-2 rounded-lg bg-gray-100 flex-grow font-poppins'} title='City Search' placeholder='Nach Stadt oder Ort suchen...' onChange={(e) => {setTextVal(e.target.value)}} onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleSearch();
                    }}}/>
                <button className={'ml-4 pt-2 pb-2 pl-4 pr-4 bg-blue-500 rounded-lg hover:bg-blue-600 active:bg-blue-500 font-poppins'} onClick={handleSearch}>Suchen</button>
            </div>
            <div className='w-[100%] mt-4 flex-grow flex justify-center items-start max-h-[100%] max-w-[100%] font-poppins text-xl text-gray-300 font-bold overflow-y-auto rounded-lg'>
                {foundSth ? <CityList json={json}/> : <div className='flex flex-grow justify-center items-center h-[100%]'>Keine Städte mit diesem Namen gefunden!</div>}
            </div>
        </div>
    )
}

export default SearchElement