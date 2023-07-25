import React from "react";
import "./logo.css";

function Logo() {
  return (
    <a target="_blank" href="__props_link__">
      <img src={require("./hexaLogo.png")} className="logo" />
    </a>
  );
}

function FlowItem(props: { name: string; color: string }) {
  return (
    <div
      style={{
        color: props.color,
        padding: "15px",
      }}
    >
      <span className="hexaPlus">Hexa +&nbsp;</span>
      {props.name}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Logo />
      <div>
        <span className="title">
          <span className="flowContainer">
            <span className="flower">
              <FlowItem name="HTML" color="#f1652a" />
              <FlowItem name="Typescript" color="#2f74c0" />
              <FlowItem name="Vite" color="#9666fd" />
              <FlowItem name="HTML" color="#f1652a" />
            </span>
          </span>
        </span>
      </div>
      <p className="read-the-docs">Click on the Hexa logo to learn more</p>
    </div>
  );
}

export default App;
