"use client";
import * as THREE from "three";
import { useEffect } from "react";

export default function ParticleBackground() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    // renderer.setClearColor(0x4b0082, 0);

    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("particleBackground")
      ?.appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
      map: new THREE.TextureLoader().load("/circle.png"),
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // particleSystem.rotation.x -= 0.001;
      particleSystem.rotation.y -= 0.0005;

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
      document
        .getElementById("particleBackground")
        ?.removeChild(renderer.domElement);
    };
  }, []);
  return <div id="particleBackground" className="fixed top-0 left-0 w-full h-full z-[-1]"/>;
}
