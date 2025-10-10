import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { 
  Environment,
  Float,
  MeshDistortMaterial,
  shaderMaterial
} from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// Custom gradient shader material
const GradientMaterial = shaderMaterial(
  { 
    time: 0,
    color1: new THREE.Color(0.5, 0.1, 0.8),
    color2: new THREE.Color(0.1, 0.5, 1.0)
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    uniform float time;
    
    void main() {
      vUv = uv;
      vPosition = position;
      vec3 pos = position;
      pos.z += sin(pos.x * 2.0 + time) * 0.1;
      pos.z += sin(pos.y * 2.0 + time * 0.5) * 0.1;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform vec3 color1;
    uniform vec3 color2;
    uniform float time;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vec3 color = mix(color1, color2, vUv.y);
      float alpha = smoothstep(0.0, 1.0, vUv.y);
      gl_FragColor = vec4(color, alpha * 0.6);
    }
  `
);

extend({ GradientMaterial });

// Abstract mesh layers
function AbstractLayer({ z, speed, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.elapsedTime * speed;
    meshRef.current.material.opacity = 0.03 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, z]}>
      <planeGeometry args={[30, 30, 32, 32]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={0.03}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Morphing blob with distortion
function MorphingBlob({ position, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[1.2, 20]} />
        <MeshDistortMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          distort={0.6}
          speed={2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

// Elegant particles with custom behavior
function ParticleSystem() {
  const pointsRef = useRef();
  const count = 2000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }

    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const positions = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      positions[i * 3] += Math.sin(time * 0.5 + i) * 0.001;
      positions[i * 3 + 1] += Math.cos(time * 0.3 + i) * 0.001;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00ffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Postprocessing effect simulation
function PostEffectPlane() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]}>
      <planeGeometry args={[50, 50]} />
      <gradientMaterial transparent />
    </mesh>
  );
}

// Camera rig with smooth mouse interaction
function CameraRig() {
  const { camera } = useThree();
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY.current = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX.current * 0.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouseY.current * 0.5, 0.03);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#0a0015"]} />
      <fog attach="fog" args={["#0a0015", 10, 35]} />

      {/* Sophisticated lighting setup */}
      <Environment preset="sunset" />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ff00ff" castShadow />
      <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={1} color="#00ffff" castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#ff1493" />
      <pointLight position={[10, -10, 5]} intensity={0.8} color="#00bfff" />

      {/* Morphing blobs */}
      <MorphingBlob position={[-4, 2, -3]} color="#ff00ff" />
      <MorphingBlob position={[4, -2, -2]} color="#00ffff" />

      {/* Abstract wireframe layers */}
      <AbstractLayer z={-5} speed={0.02} color="#ff00ff" />
      <AbstractLayer z={-8} speed={-0.015} color="#00ffff" />
      <AbstractLayer z={-12} speed={0.01} color="#7700ff" />

      {/* Particle system */}
      <ParticleSystem />

      {/* Background gradient effect */}
      <PostEffectPlane />

      {/* Interactive camera */}
      <CameraRig />
    </>
  );
}

export default function WaitingPage() {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-purple-950 via-black to-blue-950">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* 3D Canvas with premium settings */}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>

      {/* Sophisticated UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-12">
          {/* Main message */}
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 text-7xl md:text-9xl font-extralight tracking-[0.25em]">
              SOON
            </h1>
            <div className="h-px w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 text-sm md:text-base font-light tracking-[0.3em] uppercase">
              Portfolio Under Construction
            </p>
          </div>
          
          {/* Animated pulse */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-px bg-white/10"></div>
            <div className="relative">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
              <div className="absolute inset-0 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
            </div>
            <div className="w-12 h-px bg-white/10"></div>
          </div>
        </div>
      </div>

      {/* Refined corner details */}
      <div className="absolute top-8 left-8 text-white/30 text-[10px] font-extralight tracking-[0.3em] uppercase">
        Clément Enjolras
      </div>
      
      <div className="absolute top-8 right-8 text-white/30 text-[10px] font-extralight tracking-[0.3em] uppercase">
        2025
      </div>

      <div className="absolute bottom-8 left-8 text-white/30 text-[10px] font-extralight tracking-[0.3em] uppercase">
        WebGL Experience
      </div>
      
      <div className="absolute bottom-8 right-8 text-white/30 text-[10px] font-extralight tracking-[0.3em] uppercase">
        Coming Soon
      </div>
    </div>
  );
}
