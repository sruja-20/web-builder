import { useState } from "react";
import Playground from "../playground/playground.component";
import StyleKit from "../Style-kit/stylekit.component";
import UIElements from "../UI-Elements/ui.elements.component";
import "./home.component.css";

export default function Home() {
  const [styles, setStyles] = useState({});
  return (
    <>
      <div className="ht-100 wd-100 column">
        <div className="row ht-100 wd-100">
          <div className="pad-8 ui-elements-container column wd-25">
            <UIElements></UIElements>
          </div>
          <div className="pad-8 playground-container column wd-50">
            <Playground styles={styles}></Playground>
          </div>
          <div className="pad-8 stylekit-container column wd-25">
            <StyleKit
              styles={styles}
              onStyleChange={(event) => {
                setStyles(event);
              }}
            ></StyleKit>
          </div>
        </div>
      </div>
    </>
  );
}
