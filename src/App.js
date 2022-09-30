import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am clicked");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

    const onDelete = (id) => {
      setAddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
      );
    };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem ={onDelete}
          />
        );
      })};
    </>
  );
}

export default App;
