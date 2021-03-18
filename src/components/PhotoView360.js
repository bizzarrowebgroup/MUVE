// import React, { useEffect } from 'react';
// import { Animated, PanResponder } from 'react-native';
// import {
//     GLView
// } from 'expo-gl';

// import ExpoTHREE, {
//     Renderer,
// } from 'expo-three';

// import {
//     SphereBufferGeometry,
//     PerspectiveCamera,
//     MeshBasicMaterial,
//     Mesh,
//     Scene,
//     Vector3,
// } from 'three';

// global.THREE = global.THREE || THREE;

// THREE.suppressExpoWarnings(true);

// const PhotoView360 = ({ assetUri }) => {
//     let lat = 0;
//     let lon = 0;
//     let latOnTap = 0;
//     let lonOnTap = 0;
//     let locationXStart;
//     let camera;
//     let renderer;
//     let scene;
//     let gl;
//     let timeout;
//     let pan = new Animated.ValueXY()
//     let _val = { x: 0, y: 0 };

//     pan.addListener(value => (_val = value));

//     let panResponder = PanResponder.create({
//         onStartShouldSetPanResponder: (e, gesture) => true,
//         onPanResponderGrant: (e, gesture) => {
//             pan.setOffset({
//                 x: _val.x,
//                 y: _val.y
//             });
//             pan.setValue({ x: 0, y: 0 });
//         },
//         onPanResponderMove: Animated.event([
//             null,
//             { dx: pan.x, dy: pan.y }
//         ])
//     });
//     useEffect(() => {
//         return () => clearTimeout(timeout);
//     }, [])
//     const onContextCreateAsync = async (gl) => {
//         const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
//         renderer = new Renderer({ gl, antialias: true });
//         renderer.setSize(width, height);
//         scene = new Scene();
//         const geometry = new SphereBufferGeometry(500, 60, 40);
//         geometry.scale(-1, 1, 1);
//         const material = new MeshBasicMaterial({
//             map: await ExpoTHREE.loadTextureAsync({ asset: assetUri })
//         });
//         const mesh = new Mesh(geometry, material);
//         scene.add(mesh);
//         camera = new PerspectiveCamera(
//             75,
//             width / height,
//             1,
//             1100
//         );
//         camera.target = new Vector3();

//         const update = () => {
//             // mesh.rotation.x += 0.01;
//             // mesh.rotation.y += 0.02;
//             mesh.position.x = _val.x;
//             mesh.position.y = _val.y;
//             camera.lookAt(mesh.position);
//         }

//         const render = () => {
//             requestAnimationFrame(render);
//             update();
//             renderer.render(scene, camera);
//             gl.endFrameEXP();
//         };
//         render();
//     }
//     return (
//         <GLView
//             {...panResponder.panHandlers}
//             style={{ flex: 1, backgroundColor: "white" }}
//             onContextCreate={onContextCreateAsync}
//             arEnabled={false}
//         />
//     )
// }

// export default PhotoView360;