import { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Geometry: A complex wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(1.5, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.1 
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add some points for a "constellation" feel
    const pointsGeometry = new THREE.IcosahedronGeometry(1.5, 4);
    const pointsMaterial = new THREE.PointsMaterial({ 
      color: 0xffffff, 
      size: 0.015,
      transparent: true,
      opacity: 0.4
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;
      points.rotation.y -= 0.001;

      // Subtle mouse follow
      sphere.position.x += (mouseX * 0.5 - sphere.position.x) * 0.05;
      sphere.position.y += (-mouseY * 0.5 - sphere.position.y) * 0.05;
      points.position.x = sphere.position.x;
      points.position.y = sphere.position.y;

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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none opacity-30" />;
};
