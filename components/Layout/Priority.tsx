"use client";

import Image from "next/image";
import { FaRegComments, FaRegGrinHearts, FaRegSmileBeam, FaRegThumbsUp } from "react-icons/fa";

export default function Priority() {
    const data = [
        {
            title: "Kualitas",
            desc: "Kualitas adalah salah satu prioritas kami untuk merawat sepatu anda.",
            icon: <FaRegThumbsUp size={20} />,
        },
        {
            title: "Kepuasan",
            desc: "Kepuasan pelanggan menjadi salah satu prioritas yang kami utamakan.",
            icon: <FaRegSmileBeam size={20} />,
        },
        {
            title: "Kenyamanan",
            desc: "Nikmati kenyamanan maksimal dengan kemudahan menyesuaikan jadwal layanan sesuai kebutuhan anda.",
            icon: <FaRegGrinHearts size={20} />,
        },
        {
            title: "Komunikasi",
            desc: "Konsultasikan masalah sepatu maupun tas anda ke tim kami yang selalu siap melayani anda.",
            icon: <FaRegComments size={20} />,
        },
    ]

    return (
        <div className="container-priority">
            <div className="priority">
                <div className="flex gap-5">
                    <div>
                        <div className={`sub-title-tagline`}>Prioritas Kami</div>
                        <div className="container-card">
                            {
                                data.map((item, index) => (
                                    <div className={`card`} key={index}>
                                        <div className="img-card pb-3">{item.icon}</div>
                                        <div className="title-card">{item.title}</div>
                                        <div className="desc-card">{item.desc}</div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <Image className="img-priority" src="/images/foto-8.jpg" alt="photo" width={600} height={600} />
                </div>
            </div>
        </div>
    )
}