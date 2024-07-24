import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesList from "./Components/NotesList";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "./styles.css"
export default function App() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const AddItems = () => {
    const newItems = { id: uuidv4(), body: "" };
    const updatedArray = [...items, newItems];
    setItems(updatedArray);
    setCurrentIndex(newItems.id);
  };

  const deleteHandler = (id) => {
    const updated = items.filter((elem) => elem.id !== id);
    setItems(updated);
    if (currentIndex === id) {
      setCurrentIndex(null);
    }
  };

  const itemIndex = (id) => {
    setCurrentIndex(id);
  };

  const setBody = (state) => {
    const updatedItems = items.map((elem) =>
      elem.id === currentIndex
        ? { ...elem, body: state.target.value }
        : elem
    );
    setItems(updatedItems);
  };

  return (
    <>
      <div className="outer">
        <div className="notes">
          <div onClick={AddItems}>Add Notes +</div>
          <div className="notesList">
            {items.map((elem) => (
              <NotesList
                key={elem.id}
                deleteHandler={deleteHandler}
                ind={elem.id}
                itemIndex={itemIndex}
                title={
                  elem.body ? elem.body.split("\n")[0] : "Enter Title Text"
                }
              />
            ))}
          </div>
        </div>
        {currentIndex !== null ? (
          <MarkdownEditor
            value={items.find((item) => item.id === currentIndex)?.body || ""}
            onChange={setBody}
          />
        ) : (
          <p>Enter some Items</p>
        )}
      </div>
    </>
  );
}
