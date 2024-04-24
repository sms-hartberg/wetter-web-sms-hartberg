"use client";

import Background from '@/app/components/bg_element';
import React, { useEffect, useState } from 'react'
import { WeatherData, getData, replacePlus } from "./lib/vars";
import { getWMOText, WMOCode, returnIcon, returnText, detectMobile } from "./lib/vars";
import styles from "./page.module.css";
import { Viewport } from 'next';

export const viewport: Viewport = {
    initialScale: 1,
    width: "device-width"    
}

export default function WeatherPage({ params }: { params: { slug: string[]}}){

    const [lat, long, name] = params.slug;
    const [data, setData] = useState<WeatherData | null>(null);
    const [wmotext, setWmotext] = useState<WMOCode[]>([]);

    useEffect(() => {
        const fetch = async () => {
            setData(await getData());
        };
        fetch();
        if(data !== null){
            setWmotext(getWMOText(data.wmo));
        }   
    }, [data]);

    useEffect(() => {
        window.mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
          };
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
                    <div className='flex flex-col w-[20%] bg-slate-700 bg-opacity-80 rounded-2xl p-4  aspect-square'>
                        <div className='text-2xl font-bold text-gray-300'>
                            MORGEN
                        </div>
                        <div className='flex flex-col text-xl font-semibold text-gray-300'>
                            <div>
                                Regenwahrsch.: {data?.preciprob[36]} %<br/>
                                Wind: {data?.windspeed[36]} km/h<br/>
                                Wolken: {data?.cloudcov[36]} %<br/>
                                Regenmenge: {data?.precip[36]} mm<br/>
                                Luftfeucht.: {data?.humidity[36]} %<br/>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex items-center justify-center'>
                                    {returnIcon(36, 75, wmotext)}
                                </div>
                                <div className='flex items-center justify-center w-[100%]'>
                                    {returnText(36, wmotext)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[20%] bg-slate-700 bg-opacity-80 rounded-2xl p-4 aspect-square'>
                        <div className='text-2xl font-bold text-gray-300'>
                            ÜBERMORGEN
                        </div>
                        <div className='flex flex-col text-xl font-semibold text-gray-300'>
                            <div>
                                Regenwahrsch.: {data?.preciprob[60]} %<br/>
                                Wind: {data?.windspeed[60]} km/h<br/>
                                Wolken: {data?.cloudcov[60]} %<br/>
                                Regenmenge: {data?.precip[60]} mm<br/>
                                Luftfeucht.: {data?.humidity[60]} %<br/>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex items-center justify-center'>
                                    {returnIcon(60, 75, wmotext)}
                                </div>
                                <div className='flex items-center justify-center w-[100%]'>
                                    {returnText(60, wmotext)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[20%] bg-slate-700 bg-opacity-80 rounded-2xl p-4 aspect-square'>
                        <div className='text-2xl font-bold text-gray-300'>
                            IN DREI TAGEN
                        </div>
                        <div className='flex flex-col text-xl font-semibold text-gray-300'>
                            <div>
                                Regenwahrsch.: {data?.preciprob[84]} %<br/>
                                Wind: {data?.windspeed[84]} km/h<br/>
                                Wolken: {data?.cloudcov[84]} %<br/>
                                Regenmenge: {data?.precip[84]} mm<br/>
                                Luftfeucht.: {data?.humidity[84]} %<br/>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex items-center justify-center'>
                                    {returnIcon(84, 75, wmotext)}
                                </div>
                                <div className='flex items-center justify-center w-[100%]'>
                                    {returnText(84, wmotext)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[20%] bg-slate-700 bg-opacity-80 rounded-2xl p-4 aspect-square'>
                        <div className='text-2xl font-bold text-gray-300'>
                            IN VIER TAGEN
                        </div>
                        <div className='flex flex-col text-xl font-semibold text-gray-300'>
                            <div>
                                Regenwahrsch.: {data?.preciprob[108]} %<br/>
                                Wind: {data?.windspeed[108]} km/h<br/>
                                Wolken: {data?.cloudcov[108]} %<br/>
                                Regenmenge: {data?.precip[108]} mm<br/>
                                Luftfeucht.: {data?.humidity[108]} %<br/>
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex items-center justify-center'>
                                    {returnIcon(108, 75, wmotext)}
                                </div>
                                <div className='flex items-center justify-center w-[100%]'>
                                    {returnText(108, wmotext)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Background/>
        </div>
    )
}