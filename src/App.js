import React from "react";
import Modal from "./Modal/Modal";
import useToggle from "./Hooks/useToggle";
import "./styles.css";

export default function App() {
  const [show, toggleShow] = useToggle(false);

  return (
    <div className="App">
      <button onClick={toggleShow}>Show Modal</button>
      <Modal onClose={toggleShow} show={show} />
    </div>
  );
}
