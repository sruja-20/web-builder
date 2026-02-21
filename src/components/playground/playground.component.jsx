import { useState } from "react";
import Button from "../UI-Elements/elements/button.component";

export default function Playground({ styles }) {
  const [contentType, setContentType] = useState();
  function dropEventHandler(event) {
    event.preventDefault();
    let element = event.dataTransfer.getData("element");
    setContentType(element);
  }

  function dropOverEventHandler(event) {
    event.preventDefault();
  }
  return (
    <>
      <div
        onDrop={(event) => {
          dropEventHandler(event);
        }}
        onDragOver={(event) => {
          dropOverEventHandler(event);
        }}
        className="playground ht-100 wd-100"
        id="play"
      >
        {contentType === "button" && <Button style={styles}>Button</Button>}
      </div>
    </>
  );
}
