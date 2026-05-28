
import { useState } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import Echo from "./components/Echo";
import StudioScene from "./Scenes/StudioScene";
import useImmersiveScroll from "./hooks/useImmersiveScroll";
import EntrySection from "./sections/EntrySection";
import CreatorCore from "./sections/CreatorCore";
import ArchiveSection from "./sections/ArchiveSection";
import JourneySection from "./sections/JourneySection";
import SignalTerminal from "./sections/SignalTerminal";

import "./Styles/immersive.css";

export default function ImmersiveExperience({ onClose }) {
  const overlayRef = useRef(null);
  
  const [echoMessage, setEchoMessage] = useState(
  "You finally arrived."
);
  useImmersiveScroll();

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={overlayRef}
      className="immersive-overlay"
    >
      {/* EXIT BUTTON */}
      <button
        className="exit-button"
        onClick={onClose}
      >
        Exit Studio
      </button>

      {/* BACKGROUND SCENE */}
      <StudioScene />

      {/* AMBIENT GLOW */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      {/* PARTICLES */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    {/* ECHO Message */}
      <Echo message={echoMessage} />

      {/* IMMERSIVE CONTENT */}
      <div className="immersive-scroll">

        <EntrySection
        setEchoMessage={setEchoMessage}
        />

        <CreatorCore />

        <ArchiveSection
         setEchoMessage={setEchoMessage}
        />

        <JourneySection
         setEchoMessage={setEchoMessage}
        />

        <SignalTerminal
         setEchoMessage={setEchoMessage}
        />

      </div>

      {/* MUSIC EQUALIZER */}
      <div className="equalizer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

