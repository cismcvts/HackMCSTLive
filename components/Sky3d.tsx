"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

function Sky3d() {
  const canvasRef = useRef(null);
  gsap.registerPlugin();

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000g
    );
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    const loader = new GLTFLoader();
    loader.load(
      "/cartoonsky/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        model.scale.set(1, 1, 1);

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = false;
          }
        });

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading GLTF model:", error);
      }
    );

    const material = new THREE.MeshStandardMaterial({
      color: 0x000000, // Black color
      metalness: 0.8,
      roughness: 0.2,
    });

    const planeGeometry = new THREE.PlaneGeometry(5, 1);

    // First part of the "X"
    const plane1 = new THREE.Mesh(planeGeometry, material);
    plane1.rotation.z = Math.PI / 4;

    // Second part of the "X"
    const plane2 = new THREE.Mesh(planeGeometry, material);
    plane2.rotation.z = -Math.PI / 4;

    plane1.position.z = 5; // Move it in front of the skybox
    plane2.position.z = 5;

    scene.add(plane1, plane2);

    // Add glowing light effect
    const pointLight = new THREE.PointLight(0x00ffff, 2, 50); // Cyan glow
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);
      plane1.rotation.z += 0.01;
      plane2.rotation.z += 0.01;
      controls.update();
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
