import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function onChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case "title":
        setNote((prev) => {
          return {
            title: value,
            content: prev.content
          };
        });
        break;

      case "content":
        setNote((prev) => {
          console.log("here");
          return {
            title: prev.title,
            content: value
          };
        });
        break;

      default:
        break;
    }
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={onChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={onChange}
          value={note.content}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            console.log(note);
            props.add(note);
            setNote({
              title: "",
              content: ""
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
