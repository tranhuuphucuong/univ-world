//Necessary imports
'use client';
import { PluginConstructor, Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import {
  VirtualTourPlugin,
  VirtualTourPluginConfig,
} from '@photo-sphere-viewer/virtual-tour-plugin';
import '@photo-sphere-viewer/virtual-tour-plugin/index.css';
import { useEffect, useRef } from 'react';
// Image files
// import firstPhoto from "./1.png";
// import secondPhoto from "./2.png";
// import thirdPhoto from "./3.png";
const firstPhoto = '/univ-world/images/fly-1.png';
const secondPhoto = '/univ-world/images/fly-2.png';
const thirdPhoto = '/univ-world/images/fly-3.png';
export function PhotoSphere() {
  //We need the instance of the component to apply plugins
  const instanceRef = useRef(null);

  const ref = useRef(null);

  //All plugins (can declare multiple)
  const plugins: Array<PluginConstructor | [PluginConstructor, any]> = [
    [
      VirtualTourPlugin,
      {
        nodes: [
          {
            id: '1',
            panorama: firstPhoto,
            name: 'One',
            links: [{ nodeId: '2', position: { yaw: 0, pitch: 0 } }],
            // defaultZoomLvl: 0,
            sphereCorrection: { pan: '0deg', tilt: '0deg' },
          },
          {
            id: '2',
            panorama: secondPhoto,
            name: 'Two',
            links: [
              { nodeId: '1', position: { yaw: 3.14, pitch: 0 } },
              { nodeId: '3', position: { yaw: 0, pitch: 0 } },
            ],
            defaultZoomLvl: 0,
            sphereCorrection: { pan: '0deg', tilt: '0deg' },
          },
          {
            id: '3',
            panorama: thirdPhoto,
            name: 'Three',
            links: [{ nodeId: '2', position: { yaw: 3.14, pitch: 0 } }],
            defaultZoomLvl: 0,
            sphereCorrection: { pan: '0deg', tilt: '0deg' },
          },
        ],
        renderMode: '3d',
        transitionOptions: {
          showLoader: true,
          speed: '80rpm',
          effect: 'fade',
          rotation: true,
        },
        startNodeId: '1',
        // getNode: async (id) => {
        //   return null
        // }
      } as VirtualTourPluginConfig,
    ],

    // marker plugin
    // [
    //   MarkersPlugin,
    //   {
    //     markers: [
    //       {
    //         // polygon marker
    //         id: "polygon",
    //         polygon: [
    //           [6.2208, 0.0906],
    //           [0.0443, 0.1028],
    //           [0.2322, 0.0849],
    //           [0.4531, 0.0387],
    //           [0.5022, -0.0056],
    //           [0.4587, -0.0396],
    //           [0.252, -0.0453],
    //           [0.0434, -0.0575],
    //           [6.1302, -0.0623],
    //           [6.0094, -0.0169],
    //           [6.0471, 0.032],
    //           [6.2208, 0.0906],
    //         ],
    //         svgStyle: {
    //           fill: "rgba(200, 0, 0, 0.2)",
    //           stroke: "rgba(200, 0, 50, 0.8)",
    //           strokeWidth: "2px",
    //         },
    //         tooltip: {
    //           content: "A dynamic polygon marker",
    //           position: "bottom right",
    //         },
    //       },
    //       {
    //         // polyline marker
    //         id: "polyline",
    //         polylinePixels: [
    //           [2478, 1635],
    //           [2184, 1747],
    //           [1674, 1953],
    //           [1166, 1852],
    //           [709, 1669],
    //           [301, 1519],
    //           [94, 1399],
    //           [34, 1356],
    //         ],
    //         svgStyle: {
    //           stroke: "rgba(140, 190, 10, 0.8)",
    //           strokeLinecap: "round",
    //           strokeLinejoin: "round",
    //           strokeWidth: "10px",
    //         },
    //         tooltip: "A dynamic polyline marker",
    //       },
    //       {
    //         // circle marker
    //         id: "circle",
    //         circle: 20,
    //         position: { textureX: 2500, textureY: 1200 },
    //         tooltip: "A circle marker",
    //       },
    //     ],
    //   },
    // ],
  ];

  //Function that instantiates plugin and data to it
  // const handleReady = (instance) => {
  //   instanceRef.current = instance;

  //   if (!instanceRef || !instanceRef.current) return;
  //   console.log('plugin loaded');

  //   const virtualTour = instanceRef?.current.getPlugin(VirtualTourPlugin);
  //   virtualTour.setNodes([
  //     {
  //       id: '1',
  //       panorama: firstPhoto,
  //       name: 'One',
  //       links: [{ nodeId: '2', position: { textureX: 100, textureY: 1800 } }],
  //       defaultZoomLvl: 0,
  //       sphereCorrection: { pan: '0deg', tilt: '0deg' },
  //     },
  //     {
  //       id: '2',
  //       panorama: secondPhoto,
  //       name: 'Two',
  //       links: [
  //         { nodeId: '1', position: { textureX: 3500, textureY: 1800 } },
  //         { nodeId: '3', position: { textureX: 100, textureY: 1800 } },
  //       ],
  //       defaultZoomLvl: 0,
  //       sphereCorrection: { pan: '0deg', tilt: '0deg' },
  //     },
  //     {
  //       id: '3',
  //       panorama: thirdPhoto,
  //       name: 'Three',
  //       links: [{ nodeId: '2', position: { textureX: 3500, textureY: 1800 } }],
  //       defaultZoomLvl: 0,
  //       sphereCorrection: { pan: '0deg', tilt: '0deg' },
  //     },
  //   ]);
  // };

  useEffect(() => {
    if (!ref || !ref.current) return;

    const viewer = new Viewer({
      container: ref.current,
      panorama: firstPhoto,
      plugins: plugins,
    });
  }, []);

  return (
    // <ReactPhotoSphereViewer
    //   src={firstPhoto}
    //   plugins={plugins}
    //   height={"100vh"}
    //   width={"100vw"}
    //   onReady={handleReady}
    // ></ReactPhotoSphereViewer>
    <div id="phe" ref={ref} className="h-screen w-screen" />
  );
}
