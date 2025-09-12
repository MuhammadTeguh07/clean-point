"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TestimonialCarausel from "../Caraousel/Testimonial";
import { TestimonialProps } from "@/interface/testimonial";

export default function Testimonial() {

    const data: TestimonialProps[] = [
        {
            name: "Alfan",
            rating: 5,
            testimonial: "Proses deep clean sepatu di CleanPoint sangat rapi dan cepat. Dengan pengerjaan cepat, hasilnya luar biasa."
        },
        {
            name: "Hendy",
            rating: 5,
            testimonial: "Dapat rekomendasi cuci sepatu disini, Dari semua laundry sepatu yang udah pernah aku coba. Disini sih terbaik menurut ku. Recomendeed!!!",
        },
        {
            name: "Artha",
            rating: 5,
            testimonial: "Laundry sepatu terbaik sih menurut aku. Mulai order dan diantar jemput udah gitu packagingnya rapi banget.",
        },
        {
            name: "Shabrina",
            rating: 5,
            testimonial: "Nyoba nyuci sepatu disini. Kaget sama hasilnya bersih banget. Thanks!",
        },
        {
            name: "Fauzan",
            rating: 5,
            testimonial: "Cuci sepatu disini puasss banget!! CS ramah dan helpfull",
        },
        {
            name: "Iqbal",
            rating: 5,
            testimonial: "Saya sangat puas dengan cara perawatan sepatu putih yang dilakukan di CleanPoint. Sepatu saya terlihat seperti baru lagi.",
        },
        {
            name: "Zaki",
            rating: 5,
            testimonial: "Hasil cuci sepatu suede kotor di CleanPoint sangat luar biasa. Sepatu saya kini terlihat seperti baru dan harum.",
        },
    ]

    return (
        <div className="testimonial">
            <div className="w-full min-h-screen flex items-center">
                <div className="max-w-full mx-auto overflow-hidden">
                    <div className="w-full flex items-center flex-col gap-1 justify-center px-4">
                        <div className={`title-testimonial`}>Testimoni Klien</div>
                        <div className={`sub-title-tagline`}>Alasan Klien Selalu Kembali</div>
                    </div>
                    <TestimonialCarausel data={data} />
                </div>
            </div>
        </div>
    )
}