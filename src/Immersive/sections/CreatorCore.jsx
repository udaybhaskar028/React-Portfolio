
export default function CreatorCore({setEchoMessage}) {
  return (
    <section className="immersive-section creator-section"
    onMouseEnter={() =>
        setEchoMessage("He builds systems, He think sin sound.")
    }>
      <div className="section-content">

        <p className="section-label">
          CREATOR CORE
        </p>

        <h2 className="section-title">
          Three Worlds. One Creator.
        </h2>

        <div className="identity-grid">

          <div className="identity-card">
            <h3>⚙️ Engineer</h3>

            <p>
              Building scalable systems,
              intelligent applications,
              and immersive digital experiences.
            </p>
          </div>

          <div className="identity-card">
            <h3>🎵 Producer</h3>

            <p>
              Exploring sound design,
              music production,
              rhythm and emotion.
            </p>
          </div>

          <div className="identity-card">
            <h3>🌌 Dreamer</h3>

            <p>
              Inspired by anime,
              storytelling,
              imagination and cinematic worlds.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

