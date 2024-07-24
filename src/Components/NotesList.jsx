import { useState, useEffect } from "react";

function NotesList({ index, ind, deleteHandler, itemIndex, getIndex, title }) {
  const [localTitle, setLocalTitle] = useState(title);

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  return (
    <div
      onClick={() => {
        itemIndex(ind);
        getIndex(index);
      }}
      style={{ display: "flex", flexWrap: "wrap" }}
      key={ind}
    >
      <div>{localTitle}</div>
      <button onClick={() => deleteHandler(ind)}>Delete</button>
    </div>
  );
}

export default NotesList;
