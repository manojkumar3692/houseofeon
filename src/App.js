import React, {useRef} from 'react';
import Countdown from 'react-countdown';
import { TextHoverEffect } from "./components/ui/text-hover-effect";
import './App.css'; // Importing custom styles
import { SparklesCore } from "./components/ui/sparkles";
import { BackgroundBeamsDemo } from './components/BackgroundBeamsDemo';
import HomePage from './pages/HomePage';

const App = () => {
  const videoRef = useRef(null)

    return (
      <>
      <HomePage/>
      </>
//       <div>
//     <div className="coming-soon-container">
//     <div className="h-[50rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//     <h1 className="md:text-6xl text-2xl lg:text-8xl font-bold text-center text-white relative z-20">
//     <div className="h-[8rem] w-[50rem] flex items-center justify-center text-center cursor-pointer">
//   <TextHoverEffect duration={0} text="HOUSE OF EON" />
// </div>
// </h1>
//     <div className="w-[40rem] h-40 relative">
//       {/* Gradients */}
//       <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//       <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//       <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//       <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

//       {/* Core component */}
//       <SparklesCore
//           background="transparent"
//           minSize={0.4}
//           maxSize={1}
//           particleDensity={500}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />

//       {/* Radial Gradient to prevent sharp edges */}
//       <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//     </div>
//   </div>
//   </div>
//   <BackgroundBeamsDemo />
//   {/* <BackgroundBeamsDemo/> */}
//   </div>
    );
};

export default App;
