import React, { useState, useContext } from "react";
import { DataContext } from "../context/store";
import Textarea from "react-textarea-autosize";
import close from "../asset/close.png";
import "../sass/Button.scss";
const Button = ({ id, list }) => {
  const { cardAdd, listAdd } = useContext(DataContext);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (e) => setText(e.target.value);
  const addCard = () => {
      if(text){
        cardAdd(id, text)

      }
    
    setText('')
  };
  const addList = () => {
    if(text){
      listAdd(text)
      

    }
  
  setText('')
};
  const showForm = () => {
    const textButton = list ? "add list" : "add card";
    const placeholder = list ? "Enter list title" : "enter card title";
    return (
      <div className="form-box">
        <Textarea
          placeholder={placeholder}
          autoFocus
          onBlur={() => setOpen(false)}
          onChange={handleChange}
          className="text-area"
        />
        <div className="button">
          <button className="button__add" onMouseDown={list ? addList:addCard}>
            {textButton}
          </button>
          <button className="button__close" onClick={() => setOpen(false)}>
            <img src={close} alt="close" />
          </button>
        </div>
      </div>
    );
  };
  const showButton = () => {
    const textButton = list ? "add another list" : "add another card";
    const opacityButton = list ? 1 : 0.5;
    const colorButton = list ? "white" : "inherit";
    const backgroundButton = list ? "rgba(0, 0, 0, 0.25)" : "inherit";
    return (
      <div
        className="add-button"
        style={{
          opacity: opacityButton,
          color: colorButton,
          background: backgroundButton,
        }}
        onClick={() => setOpen(true)}
      >
        + {textButton}
      </div>
    );
  };
  return open ? showForm() : showButton();
};

export default Button;
