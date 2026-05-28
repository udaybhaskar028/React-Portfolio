
export default function SignalTerminal(setEchoMessage) {
  return (
    <section className="immersive-section signal-section"
    onMouseEnter={() =>
        setEchoMessage("The channel remains open.")
    }>
      <div className="section-content">

        <p className="section-label">
          SIGNAL TERMINAL
        </p>

        <h2 className="section-title">
          Open A Communication Channel
        </h2>

        <p className="section-description">
          Whether it's engineering, music,
          creative technology, or collaboration,
          the channel remains open.
        </p>

        <div className="terminal-window">

          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">

            <p>
              &gt; Establishing secure connection...
            </p>

            <p>
              &gt; Signal strength: Strong
            </p>

            <p>
              &gt; Recipient: Uday Bhaskar
            </p>

            <p className="terminal-active">
              &gt; Awaiting transmission...
            </p>

          </div>

        </div>

        <div className="terminal-actions">

          <a
            href="mailto:your@email.com"
            className="signal-button"
          >
            Send Signal
          </a>

          <a
            href="#"
            className="signal-button secondary"
          >
            Connect Network
          </a>

        </div>

        <div className="echo-final">
          <p>
            "The channel remains open."
          </p>
        </div>

      </div>
    </section>
  );
}

