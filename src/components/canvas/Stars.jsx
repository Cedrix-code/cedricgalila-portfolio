import { Suspense, useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

import useGLTFUnmount from './GLTFUnmount'; // Import the hook from the separate file

const Stars = (props) => {
  const ref = useRef();
  const isVisible = props.isVisible;

  // Use useMemo to compute the sphere positions only once during initialization
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }), []);

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  useGLTFUnmount(isVisible, ref.current);

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} {...props}>
        <PointMaterial
          transparent
          color="#e88c1f"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    }, options);

    observer.observe(canvasRef.current);

    return () => {
      observer.unobserve(canvasRef.current);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="w-full h-auto absolute inset-0 z-[-1]"
    >
      {isVisible && (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars isVisible={isVisible} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
