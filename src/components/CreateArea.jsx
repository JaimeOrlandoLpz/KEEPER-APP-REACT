import React, { useState } from "react";

function CreateArea(props) {
  const [fullNote, setFullNote] = useState({ title: "", content: "" });

  function onChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setFullNote((prev) => {
          return {
            title: value,
            content: prev.content
          };
        });
        break;

      case "content":
        setFullNote((prev) => {
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
          value={fullNote.title}
          onChange={onChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={fullNote.content}
          onChange={onChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addNote(fullNote);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
