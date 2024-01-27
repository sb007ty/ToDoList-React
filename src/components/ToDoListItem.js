import React, { useState } from "react";

function ToDoListItem(props) {
  const [toDoValue, setTodDoValue] = useState(props.toDoItem);
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="to-do-item">
      {!editMode && (
        <>
          <span className="to-do-item1">{props.toDoItem.newToDo}</span>
          <input
            className="to-do-item2"
            type="button"
            value={"Edit"}
            onClick={() => {
              setEditMode(true);
            }}
          />
        </>
      )}

      {editMode && (
        <>
          <input
            className="to-do-item1"
            value={toDoValue.newToDo}
            onChange={(e) => {
              setTodDoValue({ ...toDoValue, newToDo: e.target.value });
            }}
          />
          <input
            className="to-do-item2"
            type="button"
            value={"Done"}
            onClick={() => {
              props.onDone(toDoValue);
              setEditMode(false);
            }}
          />
          <input
            className="to-do-item3"
            type="button"
            value={"Delete"}
            onClick={() => {
              props.onDelete(props.toDoItem);
              setEditMode(false);
            }}
          />
        </>
      )}
    </div>
  );
}

export default ToDoListItem;
