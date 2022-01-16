import React from "react";
import { Draggable,Droppable  } from "react-beautiful-dnd";

import "../sass/Board.scss";
import BoardTitle from "./BoardTitle";
import menu from "../asset/menu.png";
import Card from "./card";
import Button from "./Button";

const Board = ({ data, index }) => {
  const test = () => {
    console.log({ data });
  };
  return (
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="board"
        >
          <div className="board__title">
            <BoardTitle id={data.id} title={data.title} />
            <div className="menu" onClick={test}>
              <img src={menu} alt="menu" />
            </div>
          </div>
          <Droppable droppableId={data.id}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.cards.map((cards, index) => (
                  <Card
                    key={cards.id}
                    id={data.id}
                    index={index}
                    item={cards}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Button id={data.id} onClick={test} />
        </div>
        
      )}
    </Draggable>
  );
};

export default Board;
