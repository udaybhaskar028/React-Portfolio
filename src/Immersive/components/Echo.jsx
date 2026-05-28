export default function Echo({ message }) {
  return (
    <div className="echo-container">
      <div className="echo-avatar">
        E
      </div>

      <div className="echo-bubble">
        {message}
      </div>
    </div>
  );
}