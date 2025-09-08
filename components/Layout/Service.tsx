"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Service() {
    const data = [
        {
            title: "Harga Terjangkau",
            desc: "Layanan cuci sepatu berkualitas dengan harga yang terjangkau, baik untuk pelajar / mahasiswa maupun pekerja.",
            icon: "/icons/wallet.png",
        },
        {
            title: "Dukungan Customer Service",
            desc: "Layanan pelanggan yang responsif dan siap membantu Anda dengan pertanyaan atau kebutuhan terkait layanan kami.",
            icon: "/icons/customer-service.png",
        },
        {
            title: "Gratis Antar & Jemput",
            desc: "Layanan antar dan jemput gratis hingga 5 km dari lokasi kami, memudahkan Anda dalam menggunakan layanan kami tanpa repot.",
            icon: "/icons/delivery.png",
        },
        {
            title: "Jaminan Garansi Layanan",
            desc: "Kami memberikan jaminan garansi untuk setiap layanan yang kami berikan, memastikan kepuasan Anda.",
            icon: "/icons/shield.png",
        },
    ]

    return (
        <div className="container-service">
            <div className="service">
                <div className={`title-service`}>Layanan Kami</div>
                <div className={`sub-title-tagline`}>Kenapa Harus di CleanPoint ?</div>
                <div className="container-card">
                    {
                        data.map((item, index) => (
                            <div className={`card`} key={index}>
                                <Image className="pb-3" src={item.icon} alt="photo" width={50} height={50} />
                                <div className="title-card">{item.title}</div>
                                <div className="desc-card">{item.desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}