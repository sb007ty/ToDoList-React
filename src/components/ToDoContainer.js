import React, { useState } from "react";
import ToDoAddHeading from "./ToAddHeading";
import ToDoListItem from "./ToDoListItem";

function ToDoContainer(props) {
  const [toDos, setToDos] = useState([]);
  function handleAddToDo(newToDo) {
    // console.dir(e);
    setToDos([...toDos, { newToDo, id: toDos.length, edit: false }]);
  }
  function onDelete(toDoItem) {
    let newToDoList = toDos.filter((item) => {
      if (item.id != toDoItem.id) return true;
    });
    setToDos(newToDoList);
  }
  function onDone(toDo) {
    let newToDoList = toDos.map((item, index) => {
      if (toDo.id === item.id) {
        return { ...item, newToDo: toDo.newToDo };
      }
      return item;
    });
    setToDos(newToDoList);
  }
  return (
    <div className="toDoContainer">
      <ToDoAddHeading handleAddToDo={handleAddToDo} />
      <section className="toDoListContainer">
        {toDos.map((item, index) => {
          return (
            <ToDoListItem
              key={item.id}
              toDoItem={item}
              onDelete={onDelete}
              onDone={onDone}
              editMode={item.edit}
            />
          );
        })}
      </section>
    </div>
  );
}

export default ToDoContainer;
