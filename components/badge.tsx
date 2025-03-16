"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, PresentationControls, Text, Float, RoundedBox } from "@react-three/drei"
import { MeshStandardMaterial } from "three"

interface BadgeMeshProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  name?: string
  eventDate?: string
  eventLocation?: string
  attendeeType?: string
  venue?: string
  address?: string
}

function BadgeMesh({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  name = "Guillermo Rauch",
  eventDate = "24/MAY/25 > 9AM",
  eventLocation = "NEW YORK CITY",
  attendeeType = "IN PERSON ATTENDEE",
  venue = "TAPESTRY HALL",
  address = "74 GRAND AVE 3",
}: BadgeMeshProps) {
  const badgeRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  // Subtle animation
  useFrame((state) => {
    if (badgeRef.current) {
      badgeRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
    }
  })

  // Materials
  const badgeMaterial = new MeshStandardMaterial({
    color: "#cc0000",
    metalness: 0.6,
    roughness: 0.2,
  })

  const lanyardMaterial = new MeshStandardMaterial({
    color: "#000000",
    metalness: 0.1,
    roughness: 0.8,
  })

  const clipMaterial = new MeshStandardMaterial({
    color: "#888888",
    metalness: 0.9,
    roughness: 0.1,
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Lanyard */}
      <group position={[0, 4, -0.1]}>
        {/* Lanyard strap */}
        <mesh position={[0, 2, 0]}>
          <boxGeometry args={[0.8, 4, 0.05]} />
          <primitive object={lanyardMaterial} attach="material" />
        </mesh>

        {/* Lanyard text */}
        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, 2.5, 0.03]}
          rotation={[0, 0, Math.PI / 2]}
        >
          Vercel
        </Text>

        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, 1.5, 0.03]}
          rotation={[0, 0, Math.PI / 2]}
        >
          ip'24
        </Text>

        {/* Metal clip */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.15, 0.15, 0.1, 16]} />
          <primitive object={clipMaterial} attach="material" />
        </mesh>
      </group>

      {/* Main badge body */}
      <RoundedBox
        ref={badgeRef}
        args={[3.2, 5, 0.1]}
        radius={0.1}
        smoothness={16}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <primitive object={badgeMaterial} attach="material" />
      </RoundedBox>

      {/* Event date and location at top - increased z-position to 0.15 */}
      <group position={[0, 2, 0.15]}>
        <Text font="/fonts/GeistMono-Regular.ttf" fontSize={0.2} color="white" anchorX="left" position={[-1.4, 0, 0]}>
          {eventDate}
        </Text>
        <Text font="/fonts/GeistMono-Regular.ttf" fontSize={0.2} color="white" anchorX="right" position={[1.4, 0, 0]}>
          {eventLocation}
        </Text>
      </group>

      {/* SITF large vertical text - increased z-position to 0.15 */}
      <group position={[1.1, 0.2, 0.15]}>
        <Text font="/fonts/Geist-Bold.ttf" fontSize={1.2} color="white" anchorX="center" anchorY="middle">
          S
        </Text>
        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, -1, 0]}
        >
          I
        </Text>
        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, -2, 0]}
        >
          T
        </Text>
        <Text
          font="/fonts/Geist-Bold.ttf"
          fontSize={1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
          position={[0, -3, 0]}
        >
          F
        </Text>
      </group>

      {/* Name and attendee type - increased z-position to 0.15 */}
      <group position={[-0.8, -1, 0.15]}>
        <Text font="/fonts/Geist-Bold.ttf" fontSize={0.3} color="white" anchorX="left" anchorY="middle">
          {name}
        </Text>
        <Text
          font="/fonts/GeistMono-Regular.ttf"
          fontSize={0.15}
          color="white"
          anchorX="left"
          anchorY="middle"
          position={[0, -0.3, 0]}
        >
          {attendeeType}
        </Text>
      </group>

      {/* Venue and address at bottom - increased z-position to 0.15 */}
      <group position={[-0.8, -2, 0.15]}>
        <Text font="/fonts/GeistMono-Regular.ttf" fontSize={0.15} color="white" anchorX="left" anchorY="middle">
          {venue}
        </Text>
        <Text
          font="/fonts/GeistMono-Regular.ttf"
          fontSize={0.15}
          color="white"
          anchorX="left"
          anchorY="middle"
          position={[0, -0.25, 0]}
        >
          {address}
        </Text>
      </group>

      {/* Small triangle marker - increased z-position to 0.15 */}
      <mesh position={[-1, 0.5, 0.15]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.2, 0.2, 0.01]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Small rectangle at bottom - increased z-position to 0.15 */}
      <mesh position={[0, -2.3, 0.15]}>
        <boxGeometry args={[0.5, 0.1, 0.01]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  )
}

interface VercelBadge3DProps {
  name?: string
  eventDate?: string
  eventLocation?: string
  attendeeType?: string
  venue?: string
  address?: string
  className?: string
}

export function VercelBadge3D({
  name = "Guillermo Rauch",
  eventDate = "24/MAY/25 > 9AM",
  eventLocation = "NEW YORK CITY",
  attendeeType = "IN PERSON ATTENDEE",
  venue = "TAPESTRY HALL",
  address = "74 GRAND AVE 3",
  className = "w-full h-[500px]",
}: VercelBadge3DProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        <color attach="background" args={["#111111"]} />
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          speed={1.5}
          zoom={1.2}
          snap={true}
        >
          <Float rotationIntensity={0.1} floatIntensity={0.3}>
            <BadgeMesh
              position={[0, -2, 0]}
              name={name}
              eventDate={eventDate}
              eventLocation={eventLocation}
              attendeeType={attendeeType}
              venue={venue}
              address={address}
            />
          </Float>
        </PresentationControls>
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

