import { useState } from "react";
import { Things } from "./things.jsx";
import "./index.css";

var isStart = true;

export default function MyWork() {
  var hash = document.location.hash.replace("#", "");
  const [Thing, setThing] = useState(
    Object.keys(Things).includes(hash) ? hash : "programming"
  );

  setTimeout(() => {
    if (Thing == hash && isStart) {
      document.querySelector("#Things").scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      console.log("1");
      isStart = false;
    }
  }, 300);

  const [Opacacity, setOpacacity] = useState(100);

  window.onhashchange = (e) => {
    var hash = document.location.hash.replace("#", "");

    if (hash == "Home") {
      window.scrollTo({
        top: 0,
      });
    } else if (Things[hash]) {
      document.querySelector("#Things").scrollIntoView({
        block: "center",
        behavior: "smooth",
      });

      setOpacacity(0);

      setTimeout(() => {
        setOpacacity(100);
      }, 400);

      setTimeout(() => {
        setThing(hash);
      }, 200);
    }
  };

  return (
    <>
      <div className="myWork">
        <hr />
        <p className="list">
          <a
            href="#programming"
            className={Thing == "programming" ? "a-focus" : ""}
          >
            Meine Programmier Erfahrungen
          </a>
          <a href="#projects" className={Thing == "projects" ? "a-focus" : ""}>
            Meine Projeckte
          </a>
          <a href="#contact" className={Thing == "contact" ? "a-focus" : ""}>
            Kontakt
          </a>
        </p>
        <hr />
        <br />
        <div
          style={{
            transition: "all 0.2s ease-in-out",
            placeContent: "center",
            opacity: Opacacity,
          }}
          id="Things"
        >
          {Things[Thing]}
        </div>
      </div>
    </>
  );
}
