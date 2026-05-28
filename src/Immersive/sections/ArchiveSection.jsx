
export default function ArchiveSection({ setEchoMessage }) {
  return (
    <section className="immersive-section archive-section"
    onMouseEnter={() =>
        setEchoMessage("The vault is still growing.")
    }>
      <div className="section-content">

        <p className="section-label">
          THE ARCHIVE
        </p>

        <h2 className="section-title">
          Memory Vault
        </h2>

        <p className="section-description">
          Project artifacts are currently being synchronized.
          New experiments will appear here soon.
        </p>

        <div className="archive-loading">
          <div className="archive-card">
            <span className="archive-status">
              Synchronizing...
            </span>
          </div>

          <div className="archive-card">
            <span className="archive-status">
              Loading Archives...
            </span>
          </div>

          <div className="archive-card">
            <span className="archive-status">
              Incoming Projects...
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

