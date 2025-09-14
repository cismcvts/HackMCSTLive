"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import Link from "next/link"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ThreeDMainHeader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      40,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 0, 50)

    const container = canvasRef.current
    const width = container.clientWidth
    const height = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    canvasRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0)
    scene.add(ambientLight)

    const keyLight = new THREE.SpotLight(0xffffff, 3.0)
    keyLight.position.set(10, 15, 40)
    keyLight.angle = 0.5
    keyLight.penumbra = 0.8
    keyLight.castShadow = true
    keyLight.shadow.bias = -0.0001
    keyLight.shadow.mapSize.width = 1024
    keyLight.shadow.mapSize.height = 1024
    scene.add(keyLight)

    const fillLight = new THREE.SpotLight(0xffffff, 1.5)
    fillLight.position.set(-15, 0, 30)
    fillLight.angle = 0.6
    fillLight.penumbra = 1
    scene.add(fillLight)

    const rimLight = new THREE.PointLight("0xff3030", 2.0)
    rimLight.position.set(0, 0, -30)
    scene.add(rimLight)

    const accentLight1 = new THREE.PointLight(0xff0000, 3.0)
    accentLight1.position.set(-20, 10, 20)
    scene.add(accentLight1)

    const accentLight2 = new THREE.PointLight(0xff2000, 3.0)
    accentLight2.position.set(20, -10, 15)
    scene.add(accentLight2)

    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ff0000"),
      metalness: 0.85,
      roughness: 0.1,
      envMapIntensity: 1.2,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      emissive: new THREE.Color("#ff2000"),
      emissiveIntensity: 0.5,
    })

    const pmremGenerator = new THREE.PMREMGenerator(renderer)
    pmremGenerator.compileEquirectangularShader()

    let model: THREE.Object3D | null = null

    let loadingProgress = 0
    const updateLoadingProgress = () => {
      if (!loadingRef.current) return
      loadingRef.current.querySelector("p")!.textContent = `${Math.min(100, Math.floor(loadingProgress))}% loaded`
    }

    const loader = new GLTFLoader()
    loader.load(
      "./logo.glb",
      (gltf) => {
        model = gltf.scene.clone()

        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            if (node.material) {
              if (Array.isArray(node.material)) {
                node.material.forEach((m) => m.dispose())
              } else {
                node.material.dispose()
              }
            }
            node.material = material
            node.castShadow = true
            node.receiveShadow = true
          }
        })

        model.scale.set(4.75, 4.75, 4.75)
        model.rotation.x = Math.PI / 2

        model.translateX(Math.PI / 3)

        model.position.x = 0
        model.position.y = -5
        scene.add(model)

        if (loadingRef.current) {
          loadingRef.current.style.display = "none"
        }
      },
      (progress) => {
        if (progress.lengthComputable) {
          loadingProgress = (progress.loaded / progress.total) * 100
          updateLoadingProgress()
        }
      },
      (error) => {
        console.error("An error occurred loading the model:", error)

        if (loadingRef.current) {
          loadingRef.current.innerHTML = `
            <div class="bg-red-900/30 p-4 rounded-lg text-center">
              <p class="text-white text-lg font-medium mb-2">Failed to load 3D model</p>
              <p class="text-red-200 text-sm">Check console for details</p>
            </div>
          `
        }

        const geometry = new THREE.DodecahedronGeometry(5, 0)
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.x = -20
        mesh.position.y = -5
        mesh.scale.set(2, 2, 2)
        mesh.castShadow = true
        mesh.receiveShadow = true
        scene.add(mesh)
        model = mesh
      },
    )

    let time = 0
    const floatSpeed = 1.5
    const floatIntensity = 0.3

    const animate = () => {
      time += 0.01

      if (model) {
        model.rotation.z += 0.003
        model.position.z = Math.sin(time * floatSpeed) * floatIntensity

        if (material.emissiveIntensity !== undefined) {
          material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.1
          material.needsUpdate = true
        }
      }

      if (accentLight1) {
        accentLight1.intensity = 3.0 + Math.sin(time * 2.5) * 0.5
      }
      if (accentLight2) {
        accentLight2.intensity = 3.0 + Math.sin(time * 2.5 + 1) * 0.5
      }
      if (rimLight) {
        rimLight.intensity = 2.0 + Math.sin(time * 3) * 0.3
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      if (!canvasRef.current) return

      const container = canvasRef.current
      const width = container.clientWidth
      const height = container.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()

      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement)
      }

      renderer.dispose()
      pmremGenerator.dispose()

      if (material) {
        material.dispose()
      }

      if (model) {
        model.traverse((node) => {
          if (node instanceof THREE.Mesh) {
            node.geometry.dispose()
            if (node.material instanceof THREE.Material) {
              node.material.dispose()
            } else if (Array.isArray(node.material)) {
              node.material.forEach((material) => material.dispose())
            }
          }
        })
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh", height: "auto" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b z-10" />
      <div className="container relative z-10 py-16 md:py-0 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-center">
          <div className="text-center lg:text-left py-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r text-red-600">
              HackMCST 2025
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 md:mb-6">
              April 26, 2025 • Morris County School of Technology
            </p>
            <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0 mb-6 md:mb-8">
              Join us at Morris County's premier Middle/High school hackathon for 12 hours of coding, creativity, and
              collaboration. Build innovative projects and compete for prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href={"https://mcvts.jumbula.com/HackathonX/HackathonX"}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-none transform transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3">
                  Register Now
                </Button>
              </Link>
              <Link href="/code-of-conduct">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-red-600 hover:bg-black hover:text-white transition-colors group"
                >
                  Code of Conduct
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
            <div ref={canvasRef} className="absolute inset-0"></div>
            <div ref={loadingRef} className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="w-16 h-16 border-4 border-t-red-500 border-r-red-500/50 border-b-red-500/30 border-l-red-500/10 rounded-full animate-spin mb-4"></div>
              <p className="text-white text-lg font-medium">0% loaded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

