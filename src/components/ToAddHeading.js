import React, { useState } from "react";

function ToAddHeading(props) {
  let { handleAddToDo } = props;
  const [newToDo, setNewToDo] = useState("");
  function addNewToDo(e) {
    // console.dir(e);
    setNewToDo(e.target.value);
  }
  return (
    <>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="New ToDo..."
        onChange={addNewToDo}
        value={newToDo}
      />
      <input
        type="button"
        value={"Add New ToDo"}
        onClick={() => {
          if (!newToDo.length) {
            alert("Enter ToDo");
            return;
          }
          setNewToDo("");
          handleAddToDo(newToDo);
        }}
      />
    </>
  );
}

export default ToAddHeading;
