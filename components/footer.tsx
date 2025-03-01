"use client"

import Link from "next/link"
import {FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#b0201f] text-black py-6 text-center relative">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-bold">hackMCST X</p>
        <Link href="/code-of-conduct" className="text-black hover:underline">
          Code of Conduct
        </Link>
        <a href="https://instagram.com/hackmcst" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
      </div>
    </footer>
  )
}
