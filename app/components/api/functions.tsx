"use client";

import { useRouter } from "next/navigation";

export default function routeSearch(){
    const router = useRouter();
    router.push("/");
}