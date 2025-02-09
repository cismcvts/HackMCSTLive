"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Sky3d() {
  gsap.registerPlugin(ScrollTrigger);

  const canvasRef = useRef(null);

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

    var tl = gsap.timeline({
      repeat: Infinity,
      yoyo: true,
    });
    tl.to(camera.position, {
      z: -250,
      y: -50,
      x: -50,
      duration: 50,
      ease: "none",
      // scrollTrigger: {
      //   trigger: canvas,
      //   start: "top top",
      //   end: "+=15000",
      //   scrub: true,
      // },
    })
    tl.to(camera, {
      // rotateX: 90,
    })

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