import React from 'react'
import { Suspense , useEffect , useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls , Preload ,useGLTF ,useProgress,Html} from '@react-three/drei'
// import CanvasLoader from './Loader'

const CanvasLoader=()=>{
    const {progress}=useProgress();
    return (
        <Html>
            <p className='text-[16px] font-bold mt-[40px]'>{progress.toFixed(0)}%</p>
        </Html>
    )
}

const RCPlane = () => {
  const rcPlane = useGLTF('./rc_plane_alpha/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={0.15}
    groundColor={'black'}
    />
    <pointLight intensity={5} position={[0,1,5]}
    castShadow
    shadow-mapSize-width={1024}
shadow-mapSize-height={1024}
    ></pointLight>
    
    <spotLight 
    position={[0,10,0]}
    angle={1}
    // penumbra={1}
    intensity={0.5}
    castShadow
    shadow-mapSize={1024}
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048}
    // shadow-mapSize={2048}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={100}
    shadow-camera-bottom={-10}
    shadow-camera-near={1}
    shadow-camera-far={1}
    shadow-camera-position={[11, 20, 100]}
    shadow-bias={-0.0001}
    />
    <primitive
    object={rcPlane.scene}
    scale={0.01}
    position={[0,0,1]}
    >
        
    </primitive>
    
<shadowMaterial transparent opacity={0.3} />

</mesh>
  )
}

const RCPlaneCanvas =() =>{
  return(
    <div className='h-[calc(100vh_-_50px)] w-[100vw]'>
    <Canvas frameloop='demand'
    dpr={[1, 2]}
    
    // shadows
    camera={{position:[0,3,-5],fov:50, near: 1 , far : 1000 }}
    gl={{preserveDrawingBuffer:true}}
    className='w-full h-full'>
        <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls autoRotate enableZoom ={false} maxPolarAngle ={Math.PI /2.8} minPolarAngle ={Math.PI /2.8 } />
        <RCPlane/>
        </Suspense>
        <Preload all />
    </Canvas>
</div>
  )
}

export default RCPlaneCanvas