import React, { useState } from 'react'
import { FaQuestion } from 'react-icons/fa';
import { WiCloud, WiDaySleet, WiDaySunny, WiDust, WiFog, WiHail, WiRain, WiRainMix, WiRaindrops, WiShowers, WiSnow, WiSnowWind, WiThunderstorm, WiWindy } from "react-icons/wi";

export enum WMOCode {
    DUST = 0,
    RAIN = 1,
    WINDY = 2,
    FOG = 3,
    DRIZZLE = 4,
    SNOW = 5,
    THUNDERSTORM = 6,
    SHOWER = 7,
    CLOUDY = 8,
    SUNNY = 9,
    HAIL = 10,
    UNRECOG = 11,
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

async function fetchData(url: string) {
    const weatherdata = new WeatherData();

    const response = await fetch(url);

    return response.json();
}

export async function getData(lat: number, long: number){
    const data = new WeatherData();
    const json_data = await fetchData(constructURL(lat, long));

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

export function getWMOText(wmo: number[]) {
    let wmoText: WMOCode[] = [];

    wmo.map((num) => {
        switch (num) {
            case 0:
            case 1:
            case 2:
                wmoText.push(WMOCode.SUNNY);
                break;

            case 3:
            case 4:
            case 5:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 28:
            case 29:
                wmoText.push(WMOCode.CLOUDY);
                break;

            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 90:
            case 61:
            case 91:
                wmoText.push(WMOCode.RAIN);
                break;

            case 30:
            case 31:
            case 36:
            case 37:
            case 38:
                wmoText.push(WMOCode.WINDY);
                break;

            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
            case 49:
                wmoText.push(WMOCode.FOG);
                break;

            case 50:
            case 51:
            case 52:
            case 56:
            case 57:
            case 58:
                wmoText.push(WMOCode.DRIZZLE);
                break;

            case 80:
            case 81:
            case 85:
            case 86:
            case 87:
                wmoText.push(WMOCode.SHOWER);
                break;

            case 93:
            case 96:
            case 97:
                wmoText.push(WMOCode.THUNDERSTORM);
                break;

            case 88:
            case 89:
                wmoText.push(WMOCode.SNOW);
                break;

            case 27:
                wmoText.push(WMOCode.HAIL);
                break;

            default:
                wmoText.push(WMOCode.UNRECOG);
                break;
        }
    }, []);

    return wmoText;
}

export function returnIcon(position: number, size: number, wt: WMOCode[]){
    switch(wt[position]){
        case WMOCode.DUST:
            return <WiDust size={size}/>
            
        case WMOCode.RAIN:
            return <WiRain size={size}/>
            
        case WMOCode.WINDY:
            return <WiWindy size={size}/>
            
        case WMOCode.FOG:
            return <WiFog size={size}/>
            
        case WMOCode.DRIZZLE:
            return <WiRainMix size={size}/>
            
        case WMOCode.SNOW:
            return <WiSnow size={size}/>
            
        case WMOCode.THUNDERSTORM:
            return <WiThunderstorm size={size}/>
            
        case WMOCode.SHOWER:
            return <WiShowers size={size}/>
            
        case WMOCode.CLOUDY:
            return <WiCloud size={size}/>
            
        case WMOCode.SUNNY:
            return <WiDaySunny size={size}/>
            
        case WMOCode.HAIL:
            return <WiHail size={size}/>

        case WMOCode.UNRECOG:
            return <FaQuestion size={size}/>
            
        default:
            return <FaQuestion size={size}/>
            
    }
}

export function returnText(position: number, wt: WMOCode[]){
    switch(wt[position]){
        case 0:
            return <>Staubig</>
            
        case 1:
            return <>Regen</>
            
        case 2:
            return <>Windig</>
            
        case 3:
            return <>Nebelig</>
            
        case 4:
            return <>Nieselregen</>
            
        case 5:
            return <>Schnee</>
            
        case 6:
            return <>Gewitter</>
            
        case 7:
            return <>Schauer</>
            
        case 8:
            return <>Wolkig</>
            
        case 9:
            return <>Sonnig</>
            
        case 10:
            return <>Hagel</>
            
        case 11:
            return <>NO RECOGNITION</>
            
        default:
            return <>NO RECOGNITION</>
            
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

export function constructURL(lat: number, long: number){
    const URL = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + long + "&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,weather_code,cloud_cover,wind_speed_10m&timezone=Europe%2FBerlin";
    return(URL);
}