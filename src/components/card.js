import React, { useContext, useState } from "react";
import { DataContext } from "../context/store";
import { Draggable } from "react-beautiful-dnd";

import Delete from "../asset/delete.png";
import "../sass/card.scss";
const Card = ({ id, item, index }) => {
  const { cardDelete, cardEdit } = useContext(DataContext);

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(item.title);
  const handleChange = (e) => setText(e.target.value);
  const isEdit = () => {
    setEdit(true);
  };
  const closeInput = () => {
    cardEdit(id, item.id, index, text);
    setEdit(false);
  };
  const deleteCard = () => {
    cardDelete(id, item.id);
  };
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="card-list">
          {edit ? (
            <form onSubmit={closeInput}>
              <input
                autoFocus
                type="text"
                onBlur={closeInput}
                value={text}
                onChange={handleChange}
              />
            </form>
          ) : (
            <div className="card-list__text">
              <p onClick={isEdit}>{item.title}</p>
              <img src={Delete} alt="delete" onClick={deleteCard} />
            </div>
          )}
        </div>
      )}
    </Draggable>
  );
};
export default Card;
