"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Sky3d() {
  const canvasRef = useRef(null);
  let lastScroll = 0;

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const loader = new GLTFLoader();
    loader.load(
      "/cartoonsky/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);
        scene.add(model);
      },
      undefined,
      (error) => console.error("Error loading GLTF model:", error)
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const scrollDirection = self.direction === 1 ? "down" : "up";
          if (scrollDirection === "down" && self.progress > lastScroll) {
            camera.position.z = 3 + 12 * self.progress;
            console.log("scrolled down")
          }
          lastScroll = self.progress;
        },
      },
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Sky3d;
