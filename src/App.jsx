import { useState, lazy, Suspense } from "react";

import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
// import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

/* IMMERSIVE MODE */
const ImmersiveExperience = lazy(() =>
  import("./Immersive/ImmersiveExperience")
);

function App() {
  const [immersiveMode, setImmersiveMode] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* NORMAL WEBSITE */}
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        <Experience />

        {/* <Testimonials /> */}

        <Contact />

        {/* MAGIC BUTTON */}
        <button
          className="magic-button"
          onClick={() => setImmersiveMode(true)}
        >
          ✨ Studio Mode
        </button>
      </main>

      <Footer />

      {/* IMMERSIVE EXPERIENCE */}
      {immersiveMode && (
        <Suspense
          fallback={
            <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black text-white">
              Loading Studio...
            </div>
          }
        >
          <ImmersiveExperience
            onClose={() => setImmersiveMode(false)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default App;