import "./ui.elements.component.css";

export default function UIElements() {
  let elements = [
    {
      id: "button",
      text: "Button",
    },
  ];
  function dragStartHandler(event, element) {
    event.dataTransfer.setData("element", element.id);
    event.dataTransfer.effectAllowed = "move";
    console.log("Drag event started", event);
  }
  return (
    <>
      <h4>Components</h4>
      <div className="elements-container">
        {elements.map((ele, index) => (
          <div
            key={index}
            draggable={true}
            onDragStart={(e) => {
              dragStartHandler(e, ele);
            }}
            className="elements align-center-center column"
          >
            {ele.text}
          </div>
        ))}
      </div>
    </>
  );
}
