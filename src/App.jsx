import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NotesList from "./Components/NotesList";
import MarkdownEditor from "@uiw/react-markdown-editor";
import "./styles.css"
export default function App() {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [index , setIndex] = useState(null);
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
 const getId = (ind) =>{
  console.log(ind);
  setIndex(ind);
 }
  const itemIndex = (id) => {
    console.log("id" , id);
    setCurrentIndex(id);
  };

  const setBody = (event) => {
      console.log(event);
    const updatedItems = items.map((elem) =>
      elem.id === currentIndex
        ? { ...elem, body: event }
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
            {items.map((elem , id) => (
              <NotesList
                key={elem.id}
                deleteHandler={deleteHandler}
                ind={elem.id}
                index={id}
                itemIndex={itemIndex}
                getId={getId}
                title={
                  elem.body ? elem.body.split("\n")[0] : "Enter Title Text"
                }
              />
            ))}
          </div>
        </div>
        {currentIndex !== null && index!=null && items[index] ? (
          <MarkdownEditor className="editor"
             value={items[index].body}
            onChange={(value) => setBody(value)}
          />
        ) : (
          <p>Enter some Items</p>
        )}
      </div>
    </>
  );
}
