"use client"

import { useState } from "react"
import { Diamond, Award, Medal } from "lucide-react"

interface SponsorTier {
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
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null)

  const sponsorTiers: SponsorTier[] = [
    {
      name: "Silver Sponsors",
      icon: Medal,
      description: "Valued contributors to our community",
      sponsors: [
        {
          name: "Startup Hub",
          logo: "/placeholder.svg?height=50&width=120",
          website: "#",
        },
        {
          name: "Dev Tools",
          logo: "/placeholder.svg?height=50&width=120",
          website: "#",
        },
        {
          name: "Tech Ed",
          logo: "/placeholder.svg?height=50&width=120",
          website: "#",
        },
        {
          name: "Code Academy",
          logo: "/placeholder.svg?height=50&width=120",
          website: "#",
        },
        {
          name: "Web Solutions",
          logo: "/placeholder.svg?height=50&width=120",
          website: "#",
        },
      ],
    },
  ]

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black rounded-xl -z-10" />
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] animate-pulse" />

      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent">
          Our Sponsors
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Thank you to our amazing sponsors who make innovation possible
        </p>
        <div className="absolute left-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-red-600/0 via-red-600 to-red-600/0 transform -translate-x-1/2" />
      </div>

      {/* Sponsor Tiers */}
      <div className="space-y-16">
        {sponsorTiers.map((tier) => (
          <div key={tier.name} className="relative">
            {/* Tier Header */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <tier.icon className="w-6 h-6 text-red-500" />
              <h3 className="text-2xl font-semibold text-white"></h3>
            </div>

            {/* Sponsors Grid */}
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
                  className="relative group"
                  onMouseEnter={() => setHoveredSponsor(sponsor.name)}
                  onMouseLeave={() => setHoveredSponsor(null)}
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 to-black rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-800 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity" />

                  {/* Content */}
                  <div className="relative bg-black/50 backdrop-blur-sm border border-red-500/10 rounded-xl p-6 transition-colors group-hover:border-red-500/30">
                    <img
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={sponsor.name}
                      className="w-full h-auto object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    />
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

