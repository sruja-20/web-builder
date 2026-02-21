import { useState } from "react";
import "./button.component.css";
export default function Button({ style, children }) {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState(children);
  return (
    <>
      <button
        onClick={() => {
          setIsClicked(true);
        }}
        className="btn"
        style={style}
      >
        {!isClicked && text}
        {isClicked && (
          <input
            onBlur={() => {
              setIsClicked(false);
            }}
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          ></input>
        )}
      </button>
    </>
  );
}
