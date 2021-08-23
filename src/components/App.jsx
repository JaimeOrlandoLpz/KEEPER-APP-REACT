import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(newNote) {
    setNoteArray((prev) => {
      return [...prev, newNote];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {noteArray.map((note) => {
        return <Note title={note.title} content={note.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
