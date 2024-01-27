import React, { useState } from "react";

function ToDoListItem(props) {
  const [toDoValue, setTodDoValue] = useState(props.toDoItem);
  const [editMode, setEditMode] = useState(false);
  const [toDoDesc, setToDoDesc] = useState(false);
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        name=""
        id=""
        className="to-do-check"
        onClick={(e) => {
          console.log(e.target);
          if (e.target.checked) {
            setToDoDesc("to-do-checked-data");
          } else {
            setToDoDesc("");
          }
        }}
      />
      {/* <input className="to-do-item1" type="checkbox" name="" id="" /> */}
      {!editMode && (
        <>
          <span className={toDoDesc}>{props.toDoItem.newToDo}</span>
          <input
            className="to-do-btn"
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
            className="to-do-data"
            value={toDoValue.newToDo}
            onChange={(e) => {
              setTodDoValue({ ...toDoValue, newToDo: e.target.value });
            }}
          />
          <input
            className="to-do-btn"
            type="button"
            value={"Done"}
            onClick={() => {
              props.onDone(toDoValue);
              setEditMode(false);
            }}
          />
          <input
            // className="to-do-item3"
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
