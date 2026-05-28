
export default function JourneySection({ setEchoMessage }) {
  const milestones = [
    {
      title: "The Beginning",
      description:
        "Curiosity sparked the journey into technology, creativity, and digital experiences.",
    },
    {
      title: "Engineering Path",
      description:
        "Learning how systems work, solving problems, and building software that impacts people.",
    },
    {
      title: "Creative Awakening",
      description:
        "Discovering music production, sound design, and storytelling through audio.",
    },
    {
      title: "Building Worlds",
      description:
        "Combining engineering, design, and imagination into immersive digital experiences.",
    },
    {
      title: "The Next Chapter",
      description:
        "Exploring AI, music, interactive storytelling, and the future of creative technology.",
    },
  ];

  return (
    <section className="immersive-section journey-section"
    onMouseEnter={() =>
        setEchoMessage("Every station leaves a mark.")
    }>
      <div className="section-content">
        <p className="section-label">
          THE JOURNEY
        </p>

        <h2 className="section-title">
          Evolution Through Creation
        </h2>

        <p className="section-description">
          Every skill, project, and experiment became a checkpoint
          along the path.
        </p>

        <div className="journey-timeline">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="journey-node"
            >
              <div className="journey-marker"></div>

              <div className="journey-card">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="echo-message">
          <p>
            "Every station leaves a mark. Every creation changes the route."
          </p>
        </div>
      </div>
    </section>
  );
}
