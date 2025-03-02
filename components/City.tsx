"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js"

export default function CityModel() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 0)
    camera.rotation.set(0, Math.PI / 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1)
    scene.add(ambientLight)

    const moonLight = new THREE.DirectionalLight(0xffffff, 0.3)
    moonLight.position.set(10, 20, 10)
    moonLight.castShadow = true
    moonLight.shadow.mapSize.width = 1024
    moonLight.shadow.mapSize.height = 1024
    scene.add(moonLight)

    const starGeometry = new THREE.BufferGeometry()
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
    })

    const starsVertices = []
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starsVertices.push(x, y, z)
    }

    starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starsVertices, 3))

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const loader = new GLTFLoader()
    loader.load(
      "/newcity/scene.gltf",
      (gltf: GLTF) => {
        const model = gltf.scene
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })

        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        model.position.sub(center)

        scene.add(model)
      },
      (progress) => {
        console.log("Loading progress:", (progress.loaded / progress.total) * 100, "%")
      },
      (error) => {
        console.error("Error loading model:", error)
      },
    )

    scene.background = new THREE.Color(0x000010)

    gsap.to(camera.position, {
      // z: -5,
      x: -3,
      duration: 100,
      ease: "power1.inOut",
      yoyo: true,
      repeat: 100000
    });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      stars.rotation.y += 0.0001

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)

      starGeometry.dispose()
      starMaterial.dispose()

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()

    }
  }, [])

  return <div ref={containerRef} className="w-full h-screen" />
}

