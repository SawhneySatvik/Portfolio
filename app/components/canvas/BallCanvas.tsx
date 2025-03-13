"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

interface BallProps {
  imgUrl: string;
  name: string;
  setActiveTech: (name: string) => void;
}

const Ball = ({ imgUrl, name, setActiveTech }: BallProps) => {
  const [decal] = useTexture([imgUrl]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after texture is loaded
    if (decal) {
      setIsLoaded(true);
    }
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
        castShadow 
        receiveShadow 
        scale={2.75}
        onPointerOver={() => setActiveTech(name)}
        onClick={() => setActiveTech(name)}
        visible={isLoaded}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          transparent
          opacity={0.8}
        />
        {isLoaded && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
  name: string;
  setActiveTech: (name: string) => void;
}

const BallCanvas = ({ icon, name, setActiveTech }: BallCanvasProps) => {
  const [error, setError] = useState(false);

  // Preload the image to check for errors
  useEffect(() => {
    // Fallback to a default icon if there's an error
    const handleError = () => {
      console.error(`Error loading icon: ${icon}`);
      setError(true);
    };

    const img = new Image();
    img.src = icon;
    img.onerror = handleError;
  }, [icon]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-xs text-center text-secondary/50 dark:text-secondary-light/50">
          {name}
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} name={name} setActiveTech={setActiveTech} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas; 