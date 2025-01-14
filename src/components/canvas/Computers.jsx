  import { Suspense, useEffect, useState, useRef } from 'react';
  import { Canvas, useThree, useFrame } from '@react-three/fiber';
  import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

  import CanvasLoader from '../Loader';

  import useGLTFUnmount from './GLTFUnmount'; // Import the hook from the separate file
  import * as THREE from 'three';  // Import THREE for using AnimationMixer

  const Computers = ({ isMobile, isVisible }) => {
    const computer = useGLTF('../catto/scene.gltf');
    
    const { gl } = useThree(); // Get the gl instance from useThree
    const scale = isVisible ? (isMobile ? 0.8 : 1.4) : 0; // Scale to 0 when not visible
    const position = isVisible ? (isMobile ? [0, -1, 0] : [0, -2.5, 0.25]) : [0, -1000, 0]; // Move to off-screen when not visible

    useGLTFUnmount(isVisible, gl); // Call the hook directly here

    // Set up animation
    const { scene, animations } = computer;
    const mixer = useRef();

    useEffect(() => {
      if (animations && animations.length > 0) {
        // Initialize the AnimationMixer
        mixer.current = new THREE.AnimationMixer(scene);
  
        // Loop through all animations and play them
        animations.forEach((clip) => {
          const action = mixer.current.clipAction(clip);
          action.setLoop(THREE.LoopRepeat, Infinity); // Loop animation indefinitely
          action.play(); // Start the animation
        });
      }
  
      return () => {
        // Clean up the AnimationMixer on component unmount
        if (mixer.current) {
          mixer.current.stopAllAction();
          mixer.current = null;
        }
      };
    }, [animations, scene]);
  
    // Update the mixer on every frame
    useFrame((state, delta) => {
      if (mixer.current) {
        mixer.current.update(delta); // Update the mixer based on the frame delta
      }
    });

    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={4} />
        <spotLight 
          position={[-60, 40, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={460}
        />
        <primitive
          object={computer.scene}
          scale={scale}
          position={position}
          rotation={[-0.01, 1.4, 0]}
        />
      </mesh>
    );
  };

  const ComputersCanvas = () => {
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
            frameloop="demand"
            shadows
            camera={{ position: [40, 3, 5], near: 0.1, far: 200, fov: 10 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls 
              enableZoom={false} 
              maxPolarAngle={Math.PI / 2} 
              minPolarAngle={Math.PI / 2}
              enablePan={false}
              target={[0, 0, 0.2]}
              />
              <Computers isMobile={isMobile} isVisible={isVisible} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}
      </div>
    );
  };

  export default ComputersCanvas;
