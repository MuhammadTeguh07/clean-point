"use client";

import Image from "next/image";
import Socials from "../Button/Social";
import { Button } from "../ui/button";

export default function Home() {
    return (
        <div className="home">
            <div className="content-center">
                <h1 className="title-home animate-fadeIn">
                    Solusi Perawatan Sepatu Kesayangan Kamu
                </h1>
                <span className="mt-3 subtitle-home">
                    Kami memastikan setiap sepatu kembali bersih, harum, dan tepat waktu.
                </span>
                <div className="mt-10">
                    <Button className="rounded-full border-black py-[20px] px-[25px]">
                        Pesan Sekarang
                    </Button>
                </div>
            </div>
            <div>
                <Image className="img-home animate-slideInRight" src="/images/foto-9-3d.png" alt="photo" width={500} height={500} />
            </div>
            <div>
                <Image className="img-home animate-slideInRight" src="/images/foto-4.jpg" alt="photo" width={500} height={500} />
            </div>
        </div>
    )
}