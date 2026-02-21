import "./stylekit.component.css";
export default function StyleKit({ onStyleChange, styles }) {
  return (
    <>
      <h4>Style kit</h4>
      <div className="style-kit-container">
        <div className="column gap-8">
          <div className="row gap-8">
            <div className="column">Background color</div>
            <div className="column">
              <input
                type="color"
                onChange={(event) => {
                  onStyleChange({
                    ...styles,
                    backgroundColor: event.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="row gap-8">
            <div className="column">color</div>
            <div className="column">
              <input
                type="color"
                onChange={(event) => {
                  onStyleChange({ ...styles, color: event.target.value });
                }}
              />
            </div>
          </div>
          <div className="row gap-8">
            <div className="column">Width</div>
            <div className="column">
              <input
                type="number"
                onChange={(event) => {
                  onStyleChange({
                    ...styles,
                    width: event.target.value + "px",
                  });
                }}
              />
            </div>
          </div>
          <div className="row gap-8">
            <div className="column">Height</div>
            <div className="column">
              <input
                type="number"
                onChange={(event) => {
                  onStyleChange({
                    ...styles,
                    height: event.target.value + "px",
                  });
                }}
              />
            </div>
          </div>
          <div className="row gap-8">
            <div className="column">Border radius</div>
            <div className="column">
              <input
                type="number"
                onChange={(event) => {
                  onStyleChange({
                    ...styles,
                    borderRadius: event.target.value + "px",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
