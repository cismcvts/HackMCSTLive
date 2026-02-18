"use client"

import { useState } from "react"
import { type Diamond, Medal } from "lucide-react"
import Image from "next/image"

interface SponsorList {
  name: string
  icon: typeof Diamond
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
      sponsors: [
        {
          name: "Luma Hosting Inc.",
          logo: "/sponsors/luma.jpg",
          website: "https://luma.im/",
        },
        {
          name: "CodeNinjas",
          logo: "/sponsors/CodeNinjasLogo.png",
          website: "https://www.codeninjas.com/",
        },
        {
          name: "Picatinny Arsenal STEM",
          logo: "/sponsors/pica.jpg",
          website: "https://home.army.mil/picatinny/",
        },
        {
          name: "Morris County Vocational Teacher Education Association",
          logo: "/sponsors/MCVTEA.png",
          website: "https://mcvtea.org/",
        },
        {
          name: "MCST Parent-Teacher Organization",
          logo: "/sponsors/mcst-pto.png",
          website: "https://mcvts.membershiptoolkit.com/",
        },
        {
          name: "Brain Bytes Academy",
          logo: "/sponsors/brainbytes.jpeg",
          website: "https://brainbytesacademy.com/",
        },
      ],
    },
  ]

  return (
    <div id="sponsors" className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl mb-4 text-red-600">
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
            <div className="flex items-center justify-center gap-3 mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {tier.sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group aspect-[4/3] h-full"
                  onMouseEnter={() => setHoveredSponsor(sponsor.name)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100/70 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-center justify-center h-full bg-white/90 backdrop-blur-sm border border-red-200 rounded-xl p-4 transition-colors group-hover:border-red-400 shadow-sm">
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="relative w-full h-[80%] flex items-center justify-center">
                        <Image
                          src={sponsor.logo || "/placeholder.svg"}
                          alt={sponsor.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = "/abstract-geometric-logo.png"
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600 text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {sponsor.name}
                      </p>
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
