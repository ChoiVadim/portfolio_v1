import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import Loader from "../components/Loader";
import Garden from "../models/Garden";
import { BlurFade } from "../components/ui/blur-fade";
import { FileUser } from "lucide-react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { progress, active } = useProgress();

  useEffect(() => {
    console.log("Loading status:", { progress, active });
    if (progress === 100 && !active) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, active]);

  return (
    <>
      {isLoading && <Loader progress={progress} />}
      <section className="full-container bg-transparent flex justify-center items-center">
        {/*Info*/}
        <div className="absolute p-12 lg:p-0 lg:left-24 z-50 lg:w-1/3 ">
          <div className="flex flex-col">
            <BlurFade delay={0.25} startAnimation={!isLoading} inView>
              <h1 className="text-6xl font-semibold">Tsoi Vadim</h1>
            </BlurFade>
            <BlurFade delay={0.5} startAnimation={!isLoading} inView>
              <h3 className="text-2xl font-medium">Software Developer</h3>
            </BlurFade>
            <BlurFade delay={0.75} startAnimation={!isLoading} inView>
              <p className="text-lg mt-6 font-normal">
                I create digital solutions that blend clean code with beautiful
                design, turning complex ideas into experiences that feel simple
                and delightful.
              </p>
            </BlurFade>

            <BlurFade delay={1} startAnimation={!isLoading} inView>
              <div className="flex flex-col space-y-2 mt-16">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  ABOUT
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  EXPERIENCE
                </a>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  PROJECTS
                </a>
              </div>
            </BlurFade>

            <BlurFade delay={1.25} startAnimation={!isLoading} inView>
              <div className="flex space-x-4 mt-16">
                <a
                  href="https://github.com/ChoiVadim"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vadimtsoi/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/choi_vadim/"
                  className="hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="5 5 22 22"
                    fill="currentColor"
                  >
                    <path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"></path>
                  </svg>
                </a>

                <a
                  href="CV_English.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileUser className="w-6 h-6 hover:text-white" />
                </a>
              </div>
            </BlurFade>
          </div>
        </div>

        {/*3D model*/}
        <div className="h-screen w-full bg-transparent">
          <Canvas>
            <PerspectiveCamera
              makeDefault
              position={[0, 15, 15]}
              near={0.1}
              far={2000}
              rotation={[0, 0, 0]}
            />
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[-5, 5, 5]}
                intensity={1}
                castShadow
              />
              <Garden
                position={[0, -5, 0]}
                rotation={[0, -Math.PI / 5, 0]}
                scale={1.2}
              />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Home;
