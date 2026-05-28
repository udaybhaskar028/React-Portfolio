
export default function EntrySection({ setEchoMessage }) {
  return (
    <section className="immersive-section entry-section"
    onMouseEnter={() =>
        setEchoMessage("You have finally arrived.")
    }>

      <div className="section-content">

        <p className="section-tag">
          ENGINEER • PRODUCER • CREATOR
        </p>

        <h1 className="hero-title">
          Welcome To The Studio
        </h1>

        <p className="hero-description">
          A cinematic space where engineering,
          music, and imagination merge together.
        </p>

      </div>

    </section>
  );
}

