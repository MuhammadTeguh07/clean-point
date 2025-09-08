"use client";

import Image from "next/image";
import DrawerTop from "../Drawer/DrawerTop";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { handleScroll } from "@/functions/general";

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState("beranda");
    const listMenu = ["Beranda", "Layanan", "Tentang", "Testimoni"];

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsMenuActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '0px 0px -10% 0px', // Agar menu aktif sedikit sebelum bagian tengah layar
                threshold: 0.18, // Mengaktifkan saat 50% elemen terlihat
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);

    return (
        <header className={`header`}>
            <a className="header-brand" href="index.html">CleanPoint</a>
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav nav">
                        {
                            listMenu.map((item, index) => (
                                <li className="nav-item" onClick={() => handleScroll(item.toLowerCase(), setIsMenuActive)} key={index}>
                                    {
                                        item === "Beranda" ? <a href="#" className={`nav-link ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                            : <a href={`#${item.toLowerCase()}`} className={`nav-link ${isMenuActive === item.toLowerCase() && 'active'}`}><span>{item}</span></a>
                                    }
                                </li>
                            ))
                        }
                    </ul >
                </nav >
                <DrawerTop
                    listMenu={listMenu}
                />
            </div>
            <Button variant={'outline'} className="rounded-full border-2 hover:text-white hover:bg-black border-black py-[20px] px-[25px]">
                Hubungi Kami
            </Button>
        </header >
    )
}