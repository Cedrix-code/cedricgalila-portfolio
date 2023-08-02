import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';

import CanvasLoader from '../Loader';

import useGLTFUnmount from './GLTFUnmount'; // Import the hook from the separate file

const Ball = ({ imgUrl, isVisible }) => {
  const [decal] = useTexture([imgUrl]);
  const frontFaceRef = useRef();
  const [rotationY, setRotationY] = useState(0);

  useGLTFUnmount(isVisible); // Call the hook directly here

  useFrame((_state, delta) => {
    // Update the front face rotation every frame
    setRotationY((rotationY) => rotationY + delta * 0.1);
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#7a7e7f"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        {/* Apply rotation to the front face */}
        <mesh ref={frontFaceRef} rotation-y={rotationY}>
        </mesh>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
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
    <div
      ref={canvasRef}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}
    >
      {isVisible && (
        <Canvas
          frameloop="demand"
          shadows
          gl={{ preserveDrawingBuffer: true }}
          visible={isVisible} // Hide/show the canvas based on isVisible state
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} enabled={!isMobile} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
              {isVisible ? (
                <Ball imgUrl={icon} isVisible={isVisible} />
              ) : (
                <mesh>
                  {/* Fallback 404 text */}
                  <textGeometry attach="geometry" args={['404', { size: 10, height: 1 }]} />
                  <meshStandardMaterial attach="material" color="#ff0000" />
                </mesh>
              )}
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default BallCanvas;
