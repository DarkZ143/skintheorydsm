"use client";

import { useEffect, useState, type ReactNode } from "react";

function LoaderMark() {
  return (
    <div className="loader-mark" aria-hidden="true">
      <svg className="loader-defs" width="0" height="0" viewBox="0 0 64 64">
        <defs>
          <linearGradient id="loader-sage" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0">
            <stop stopColor="#303c34" />
            <stop offset="1" stopColor="#87927e" />
          </linearGradient>
          <linearGradient id="loader-clay" gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0">
            <stop stopColor="#d6ad91" />
            <stop offset="1" stopColor="#a66e5e" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
              keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
              keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
              calcMode="spline"
              dur="8s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient id="loader-moss" gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0">
            <stop stopColor="#b7c0ad" />
            <stop offset="1" stopColor="#687765" />
          </linearGradient>
        </defs>
      </svg>

      <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
        <path
          className="loader-dash"
          d="M 54.722656,3.9726563 A 2.0002,2.0002 0 0 0 54.941406,4 h 5.007813 C 58.955121,17.046124 49.099667,27.677057 36.121094,29.580078 a 2.0002,2.0002 0 0 0 -1.708985,1.978516 V 60 H 29.587891 V 31.558594 A 2.0002,2.0002 0 0 0 27.878906,29.580078 C 14.900333,27.677057 5.0448787,17.046124 4.0507812,4 H 9.28125 c 1.231666,11.63657 10.984383,20.554048 22.6875,20.734375 a 2.0002,2.0002 0 0 0 0.02344,0 c 11.806958,0.04283 21.70649,-9.003371 22.730469,-20.7617187 z"
          pathLength="360"
          stroke="url(#loader-sage)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
        <path
          className="loader-spin"
          d="M 32 32 m 0 -27 a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
          pathLength="360"
          stroke="url(#loader-clay)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg viewBox="0 0 64 64" width="64" height="64" fill="none">
        <path
          className="loader-dash"
          d="M 4,4 h 4.6230469 v 25.919922 c -0.00276,11.916203 9.8364941,21.550422 21.7500001,21.296875 11.616666,-0.240651 21.014356,-9.63894 21.253906,-21.25586 a 2.0002,2.0002 0 0 0 0,-0.04102 V 4 H 56.25 v 25.919922 c 0,14.33873 -11.581192,25.919922 -25.919922,25.919922 a 2.0002,2.0002 0 0 0 -0.0293,0 C 15.812309,56.052941 3.998433,44.409961 4,29.919922 Z"
          pathLength="360"
          stroke="url(#loader-moss)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setIsExiting(true), 1700);
    const finishTimer = window.setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  return (
    <>
      <div className="site-content" aria-hidden={isLoading} inert={isLoading}>
        {children}
      </div>
      {isLoading && (
        <div
          className={"site-loader" + (isExiting ? " is-exiting" : "")}
          role="status"
          aria-label="Loading Skin Theory DSM"
        >
          <div className="loader-content">
            <LoaderMark />
            <span className="loader-brand">skin theory</span>
            <span className="loader-caption">A moment for your skin</span>
          </div>
        </div>
      )}
    </>
  );
}
