import { useState } from "react";
import "./index.css";

const toggle = (b) => (b ? false : true);

export default function Toggler(props) {
  const [hide, setHide] = useState(false);

  return (
    <>
      <div className="toggler">
        <h2 className="togglheader" title="Click To See Or Hide" onClick={() => setHide(toggle(hide))}>
          {props.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </h2>
        <p className={hide ? "true" : "false"}>{props.text}</p>
      </div>
    </>
  );
}
