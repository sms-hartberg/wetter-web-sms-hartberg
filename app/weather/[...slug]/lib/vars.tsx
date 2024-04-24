import React, { useState } from 'react'
import { FaQuestion } from 'react-icons/fa';
import { WiCloud, WiDaySleet, WiDust, WiFog, WiHail, WiRain, WiRainMix, WiShowers, WiSnowWind } from "react-icons/wi";

export enum WMOCode {
    DUST = 0,
    RAIN = 1,
    DRIZZLE = 2,
    FOG = 3,
    PRECIPITATION = 4,
    ICE = 5,
    SOLID = 6,
    SHOWER = 7,
    CLOUDY = 8,
}

export class WeatherData {
    public preciprob: number[];
    public cloudcov: number[];
    public temperature: number[];
    public humidity: number[];
    public precip: number[];
    public windspeed: number[];
    public time: number[];
    public wmo: number[];

    constructor() {
        this.preciprob = [];
        this.cloudcov = [];
        this.temperature = [];
        this.humidity = [];
        this.precip = [];
        this.windspeed = [];
        this.time = [];
        this.wmo = [];
    }
}

async function fetchData() {
    const weatherdata = new WeatherData();

    const response = await fetch("http://192.168.0.122:8000/results");

    return response.json();
}

export async function getData(){
    const data = new WeatherData();
    const json_data = await fetchData();

    data.humidity = json_data.hourly.relative_humidity_2m;
    data.cloudcov = json_data.hourly.cloud_cover;
    data.precip = json_data.hourly.precipitation;
    data.preciprob = json_data.hourly.precipitation_probability;
    data.temperature = json_data.hourly.temperature_2m;
    data.windspeed = json_data.hourly.wind_speed_10m;
    data.time = json_data.hourly.time;
    data.wmo = json_data.hourly.weather_code;

    return data;
}

export function getWMOText(wmo: number[]){
    let wmotext: WMOCode[] = [];

    wmo.map((num) => {
        if(num < 20 && num >= 0){
            wmotext.push(WMOCode.CLOUDY);
        } else if(num >= 20 && num < 30) {
            wmotext.push(WMOCode.PRECIPITATION);
        } else if(num >= 30 && num < 40) {
            wmotext.push(WMOCode.DUST);
        } else if(num >= 40 && num < 50) {
            wmotext.push(WMOCode.ICE)
        } else if(num >= 50 && num < 60) {
            wmotext.push(WMOCode.DRIZZLE)
        } else if(num >= 60 && num < 70) {
            wmotext.push(WMOCode.RAIN);
        } else if(num >= 70 && num < 80) {
            wmotext.push(WMOCode.SOLID);
        } else if(num >= 80 && num < 100) {
            wmotext.push(WMOCode.SHOWER);
        }
    });

    return wmotext;
}

export function returnIcon(position: number, size: number, wt: WMOCode[]){
    switch(wt[position]){
        case 0:
            return <WiDust size={size}/>
        break;
        case 1:
            return <WiRain size={"100%"}/>
        break;
        case 2:
            return <WiDaySleet size={size}/>
        break;
        case 3:
            return <WiFog size={size}/>
        break;
        case 4:
            return <WiRainMix size={size}/>
        break;
        case 5:
            return <WiHail size={size}/>
        break;
        case 6:
            return <WiSnowWind size={size}/>
        break;
        case 7:
            return <WiShowers size={size}/>
        break;
        case 8:
            return <WiCloud size={size}/>
        break;
        default:
            return <FaQuestion size={size}/>
        break;
    }
}

export function returnText(position: number, wt: WMOCode[]){
    switch(wt[position]){
        case 0:
            return <>Sonnig</>
        break;
        case 1:
            return <>Regen</>
        break;
        case 2:
            return <>Leichter Regen</>
        break;
        case 3:
            return <>Nebel</>
        break;
        case 4:
            return <>Niederschlag</>
        break;
        case 5:
            return <>Hagel</>
        break;
        case 6:
            return <>Gefrorener Niederschlag</>
        break;
        case 7:
            return <>Schauer</>
        break;
        case 8:
            return <>Bewölkt</>
        break;
        default:
            return <>NO RECOGNITION</>
        break;
    }
}

export function removeUmlaut(input: string){
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace("ß", "ss");
}

export function replacePlus(input: string){
    return input.replaceAll("%2B", " ");
}

export function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}
