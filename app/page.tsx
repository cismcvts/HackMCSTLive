"use client";

import { Navbar } from "@/components/Navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="relative w-full">
        <Hero />
      </div>
    </main>
  );
}