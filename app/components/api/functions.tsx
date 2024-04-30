"use client";

import { useRouter } from "next/router";

export default function routeSearch(){
    const router = useRouter();
    router.push("/");
}