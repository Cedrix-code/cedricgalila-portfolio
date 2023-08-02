  import { Suspense, useEffect, useState, useRef } from 'react';
  import { Canvas, useThree } from '@react-three/fiber';
  import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

  import CanvasLoader from '../Loader';

  import useGLTFUnmount from './GLTFUnmount'; // Import the hook from the separate file

  const Computers = ({ isMobile, isVisible }) => {
    const computer = useGLTF('../desktop_pc/scene.gltf')
    const { gl } = useThree(); // Get the gl instance from useThree
    const scale = isVisible ? (isMobile ? 0.4 : 0.75) : 0; // Scale to 0 when not visible
    const position = isVisible ? (isMobile ? [0, -2, 0] : [0, -3, 0]) : [0, -1000, 0]; // Move to off-screen when not visible

    useGLTFUnmount(isVisible, gl); // Call the hook directly here

    return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
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
          rotation={[-0.01, 0.6, 0]}
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
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
              <Computers isMobile={isMobile} isVisible={isVisible} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}
      </div>
    );
  };

  export default ComputersCanvas;
