import { useEffect, useState } from 'react';

const GLTFUnmount = (isVisible, gltfObject, fallbackEvent) => {
  const [isMobileVisible, setMobileVisible] = useState(false);

  useEffect(() => {
    if (!gltfObject) {
      return;
    }

    const unloadGLTF = () => {
      if (typeof gltfObject?.unload === 'function') {
        gltfObject.unload();
      }
      if (typeof gltfObject?.onBeforeRender?.dispose === 'function') {
        gltfObject.onBeforeRender.dispose();
      }
    };

    // Unmount the GLTF object when it's no longer visible
    if (!isVisible && !isMobileVisible) {
      unloadGLTF();

      // Trigger the fallback event when the GLTF object is not visible
      if (typeof fallbackEvent === 'function') {
        fallbackEvent();
      }
    }

    return unloadGLTF; // Returning the cleanup function
  }, [isVisible, isMobileVisible, gltfObject, fallbackEvent]);

  useEffect(() => {
    // Intersection Observer to detect visibility on mobile view
    if (!isVisible) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0,
      };

      const observer = new IntersectionObserver(([entry]) => {
        setMobileVisible(entry.isIntersecting);
      }, options);

      observer.observe(document.body); // Observe the whole body element

      return () => {
        observer.unobserve(document.body); // Stop observing on unmount
      };
    }
  }, [isVisible]);
};

export default GLTFUnmount;
