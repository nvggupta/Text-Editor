import { useState, useEffect } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
function NotesList({ index, ind, deleteHandler, itemIndex,  title , getId  }) {
  const [localTitle, setLocalTitle] = useState(title);

  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  return (
    <div
      onClick={() => {
        console.log("triggered");
        itemIndex(ind);
        getId(index);
      }}
      style={{ display: "flex", flexWrap: "wrap"   , gap: "10px" }}
      key={ind}
    >
      <div>{localTitle}</div>
      <button onClick={() => deleteHandler(ind)}><MdOutlineDeleteOutline /></button>
    </div>
  );
}

export default NotesList;
