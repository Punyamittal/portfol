"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

interface GLBViewerProps {
  className?: string;
  height?: string;
  width?: string;
  modelPath?: string;
}

const GLBViewer: React.FC<GLBViewerProps> = ({
  className = "",
  height = "h-96",
  width = "w-full",
  modelPath = "/space_fighter.glb"
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Create a spaceship-like shape as placeholder
    const createSpaceship = () => {
      const group = new THREE.Group();
      
      // Main body
      const bodyGeometry = new THREE.ConeGeometry(0.3, 1.2, 8);
      const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x00aaff,
        transparent: true,
        opacity: 0.9
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.rotation.x = Math.PI / 2;
      group.add(body);
      
      // Wings
      const wingGeometry = new THREE.BoxGeometry(1.2, 0.06, 0.5);
      const wingMaterial = new THREE.MeshPhongMaterial({ color: 0x0088cc });
      const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
      leftWing.position.set(-0.6, 0, 0);
      group.add(leftWing);
      
      const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
      rightWing.position.set(0.6, 0, 0);
      group.add(rightWing);
      
      // Engine glow
      const engineGeometry = new THREE.SphereGeometry(0.12, 8, 8);
      const engineMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xff4400,
        emissive: 0xff2200,
        emissiveIntensity: 0.5
      });
      const engine = new THREE.Mesh(engineGeometry, engineMaterial);
      engine.position.set(0, -0.6, 0);
      group.add(engine);
      
      return group;
    };

    const spaceship = createSpaceship();
    scene.add(spaceship);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the spaceship
      spaceship.rotation.y += 0.01;
      spaceship.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Try to load GLB file
    const loadGLB = async () => {
      try {
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();
        
        loader.load(
          modelPath,
          (gltf) => {
            // Remove the placeholder spaceship
            scene.remove(spaceship);
            
            // Add the loaded model
            const model = gltf.scene;
            model.scale.set(0.5, 0.5, 0.5);
            model.position.set(0, 0, 0);
            scene.add(model);
            
            setIsLoading(false);
          },
          (progress) => {
            console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
          },
          (error) => {
            console.error('Error loading GLB:', error);
            setError('GLB file not found or invalid');
            setIsLoading(false);
          }
        );
      } catch (err) {
        console.error('Failed to load GLTFLoader:', err);
        setError('3D loader not available');
        setIsLoading(false);
      }
    };

    loadGLB();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [modelPath]);

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`flex justify-center ${className}`}
      >
        <div className={`${width} ${height} bg-gradient-to-br from-blue-800 to-purple-900 rounded-lg flex items-center justify-center`}>
          <div className="text-center text-white">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Space Fighter 3D Model</h3>
            <p className="text-gray-300 text-sm mb-4">To load your GLB file:</p>
            <div className="bg-black bg-opacity-50 p-3 rounded text-xs font-mono">
              <p>1. Place your space_fighter.glb file in:</p>
              <p className="text-blue-400">public/space_fighter.glb</p>
              <p className="mt-2">2. Refresh the page</p>
            </div>
            <p className="text-xs text-gray-400 mt-4">Current: {modelPath}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex justify-center ${className}`}
    >
      <div className={`${width} ${height} rounded-lg overflow-hidden relative`}>
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <div className="text-center text-white">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p className="text-sm">Loading 3D Model...</p>
            </div>
          </div>
        )}
        <div ref={mountRef} className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default GLBViewer; 