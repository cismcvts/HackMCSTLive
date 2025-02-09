"use client";

import React, { useEffect, useRef } from "react";

export default function GlowButton() {
  return (
    <button className="p-[3px] relative d-flex justify-content-center my-4">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        Lit up borders
    </div>
    </button>
  )
}