"use client";

import React from 'react'
import styles from "../main.module.css";
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
    
    const handleClick = () => {
        router.push("/");
    }

    return (
        <div className={"flex justify-center text-4xl pt-4 font-poppins header pb-4 " + styles.header}>
            <button className={styles.header_text + " h-full flex justify-center items-center"} onClick={handleClick}>{"{ WEATHER Web }"}</button>
        </div>
    )
}

export default Logo