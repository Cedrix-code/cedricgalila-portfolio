import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

import useGLTFUnmount from "./GLTFUnmount"; // Import the hook from the separate file

const Earth = ({ isMobile, isVisible }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const { gl } = useThree(); // Get the gl instance from useThree
  const scale = isVisible ? (isMobile ? 0.5 : 0.4) : 0; // Scale to 0 when not visible

  useGLTFUnmount(isVisible, gl); // Call the hook directly here

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor="black"/>
      <pointLight intensity={1} />
      <spotLight 
        position={[-60, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0.1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={earth.scene} 
      scale={scale} position-y={0} 
      rotation-y={0} 
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Intersection Observer to detect visibility
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    observer.observe(canvasRef.current);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      observer.unobserve(canvasRef.current);
    };
  }, []);

  return (
    <div ref={canvasRef} 
    style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {isVisible && (
        <Canvas
          shadows
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth isMobile={isMobile} isVisible={isVisible} />
          </Suspense>
            <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;