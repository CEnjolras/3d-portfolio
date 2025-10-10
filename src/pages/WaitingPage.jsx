import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

// Subtle background layer
function SubtleLayer({ z, speed }) {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.z = state.clock.elapsedTime * speed;
        meshRef.current.material.opacity = 0.025 + Math.sin(state.clock.elapsedTime * 0.3) * 0.015;
    });

    return (
        <mesh ref={meshRef} position={[0, 0, z]}>
            <torusGeometry args={[8, 0.05, 8, 100]} />
            <meshBasicMaterial
                color="#9988ff"
                transparent
                opacity={0.025}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    );
}

// Elegant particles with custom behavior
function ParticleSystem() {
    const pointsRef = useRef();
    const count = 300;

    const [positions, sizes] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const radius = 5 + Math.random() * 15;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);

            pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = radius * Math.cos(phi);

            // Varying particle sizes between 0.5 and 3
            sizes[i] = 0.5 + Math.random() * 2.5;
        }

        return [pos, sizes];
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
                <bufferAttribute
                    attach="attributes-size"
                    count={count}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#9999ff"
                transparent
                opacity={0.5}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
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
            <fog attach="fog" args={["#0a0015", 15, 40]} />

            {/* Minimal lighting setup */}
            <ambientLight intensity={0.2} />
            <pointLight position={[5, 5, 5]} intensity={0.3} color="#9988ff" />
            <pointLight position={[-5, -5, -5]} intensity={0.15} color="#7788ff" />

            {/* Subtle background layers */}
            <SubtleLayer z={-8} speed={0.008} />
            <SubtleLayer z={-12} speed={-0.005} />

            {/* Particle system */}
            <ParticleSystem />

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
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noise)" />
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

            {/* Corner details */}
            <div className="absolute top-8 left-8 text-white/30 text-xs font-extralight tracking-[0.3em] uppercase">
                Clément Enjolras
            </div>

            <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-e-30958ab4/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 text-white/30 hover:text-white/60 text-xs font-extralight tracking-[0.3em] uppercase transition-colors duration-300 pointer-events-auto group"
            >
                <span className="relative">
                    LinkedIn
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </span>
            </a>
        </div>
    );
}
