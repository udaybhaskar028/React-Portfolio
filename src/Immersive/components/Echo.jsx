import echoMain from "../../assets/echo/echo-main.png";

export default function Echo({ message }) {
  return (
    <div className="echo-container">
      <div className="echo-avatar">
        <img
          src={echoMain}
          alt="Echo"
          className="echo-image"
        />
      </div>

      <div className="echo-bubble">
        {message}
      </div>
    </div>
  );
}