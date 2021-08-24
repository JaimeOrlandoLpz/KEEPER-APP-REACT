import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    console.log("I'm here " + id);
    notes.filter((note, index) => {
      setNotes((prev) => {
        return prev.filter((note, index) => {
          return index !== id;
        });
      });
    });
  }

  function add(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={add} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
