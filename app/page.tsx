"use client"

import About from "@/components/Layout/About";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Home from "@/components/Layout/Home";
import Priority from "@/components/Layout/Priority";
import Project from "@/components/Layout/Project";
import Service from "@/components/Layout/Service";
import Testimonial from "@/components/Layout/Testimonial";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    // Menghapus hash di URL setelah halaman dimuat
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div>
      <div className="container-home">
        <Header />
        <main>
          <section id="beranda"><Home /></section>
          <section id="layanan"><Service /></section>
          <section id="tentang"><About /></section>
          <section id="priority"><Priority /></section>
          <section id="testimonial"><Testimonial /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
