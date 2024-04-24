import React from 'react';
import Image from "next/image";
import styles from "../main.module.css"

const Background = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
        <div className={"flex justify-center text-4xl pt-4 font-poppins header pb-4 " + styles.header}>
        <div className={styles.header_text}>(WE&emsp;-&emsp;ather)</div>
        </div>
        <div className="bg-slate-600 flex-grow z-[-1] relative">
        <Image src={"/aestethic-bg.png"} fill={true} alt={"Background Image"}/>
        </div>
    </div>
  )
};

export default Background