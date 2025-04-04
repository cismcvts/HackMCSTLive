"use client"

import { useState } from "react"
import { type Diamond, Medal } from "lucide-react"

interface SponsorList {
  name: string
  icon: typeof Diamond
  description: string
  sponsors: {
    name: string
    logo: string
    website: string
  }[]
}

export default function Sponsors() {
  const [, setHoveredSponsor] = useState<string | null>(null)

  const sponsorTiers: SponsorList[] = [
    {
      name: "Sponsors",
      icon: Medal,
      description:"Thank you for your support!",
      sponsors: [
        {
          name: "Luma Hosting Inc.",
          logo: "./sponsors/luma.jpg",
          website: "https://luma.im/",
        },
        {
          name: "NJ Cybersecurity & Communications Integration Cell",
          logo: "./sponsors/NJCCIC.png",
          website: "https://www.cyber.nj.gov/",
        },
        {
          name: "Picatinny Arsenal STEM",
          logo: "./sponsors/pica.jpg",
          website: "https://home.army.mil/picatinny/",
        },
        {
          name: "Morris County Vocational Teacher Education Association",
          logo: "./sponsors/mcvtea.png",
          website: "https://mcvtea.org/",
        },
        {
          name: "MCST Parent-Teacher Organization",
          logo: "./sponsors/mcst-pto.png",
          website: "https://mcvts.membershiptoolkit.com/",
        },
      ],
    },
  ]

  return (
    <div id="sponsors" className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-white rounded-xl -z-10" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 rounded-full blur-[100px] animate-pulse" />

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Our Sponsors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Thank you to our amazing sponsors who make innovation possible
        </p>
        <div className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 transform -translate-x-1/2" />
      </div>

      <div className="space-y-16">
        {sponsorTiers.map((tier) => (
          <div key={tier.name} className="relative">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800"></h3>
            </div>
            <div
              className={`grid gap-8 justify-items-center ${
                tier.name === "Platinum Sponsors"
                  ? "grid-cols-1 md:grid-cols-3"
                  : tier.name === "Gold Sponsors"
                    ? "grid-cols-2 md:grid-cols-4"
                    : "grid-cols-2 md:grid-cols-5"
              }`}
            >
              {tier.sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  className="relative group w-full aspect-square"
                  onMouseEnter={() => setHoveredSponsor(sponsor.name)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/70 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
                  <div className="relative flex items-center justify-center h-full bg-white/90 backdrop-blur-sm border border-red-200 rounded-xl p-4 transition-colors group-hover:border-red-400 shadow-sm">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}