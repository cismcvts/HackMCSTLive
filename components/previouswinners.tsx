"use client"

import React from "react"
import Carousel from "../components/Caro2" 

const winners = [
  {
    place: "1st Place",
    project: "Sign Speaks",
    members: "Dylan Cortegana, Veer Mangat, Siddhant Shah, & Rishi Rana",
    image: "/image/hackmcst-1stplace.png",
  },
  {
    place: "2nd Place",
    project: "Botero-Bot",
    members:
      "Dhruv Kothari, Rohan Kommareddy, Bhavyansh Shivakoti, Devan Patel, & Dhruva Koushik Parthiban Kavithamani",
    image: "/image/hackmcst-secondplace.jpg",
  },
  {
    place: "3rd Place",
    project: "Sodifer",
    members:
      "Jadyn Monaco, Moosa Awais, Albert Zhang, Kyle Moy, Max Yung, Nick Klapal, & Maxon Baisley",
    image: "/image/hackmcst-3rdplace.png",
  },
  {
    place: "Sustainability - Winner",
    project: "Chef Go",
    members: "Alizeh Mero, Sheyla Kugic, Isabella Huang, & Andrea Manzanares",
    image: "/image/hackmcst-sustainability.png",
  },
  {
    place: "Healthcare - Winner",
    project: "Voice Pilot",
    members: "Shreyas Angadi, Vihas Veggalam, Alan Qu, & Ruthvik Venkatesan",
    image: "/image/hackmcst-healthcare.png",
  },
  {
    place: "Cybersecurity - Winner",
    project: "Catfishing",
    members:
      "Megha Srinivas, Vanya Gupta, Medha Vavilala, Srinika Pamarthy, & Avantika Pamarthy",
    image: "/image/hackmcst-cybersec.png",
  },
]

export default function PreviousWinners() {
  return (
    <section id="pastwinners" className="py-16 text-white text-center bg-black">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Previous Winners</h1>
        <h5 className="text-left"> <u>hackMCST IX Winners</u></h5>
        <Carousel slides={winners} />
      </div>
    </section>
  )
}
