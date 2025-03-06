import { useEffect, useState } from 'react';
import './App.css';
import MyLists from './MyList';
import { addItemList, getAllList, editList, deleteList } from './FetchList';



function App() {
  const [myList, setList] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [listId, setListId] = useState("");


  useEffect(() => {
    getAllList(setList)
  }, [])
  
    const updatingInInput = (_id, name) => {
    setEditing(true);
    setName(name);
    setListId(_id);
  }


  return (
    <div classname='main'>

      <h1>List To Do</h1>
      
      <input
        type="text"
        placeholder="Add a task..."
        value={name}
        onChange={(e) => setName(e.target.value)}/>
      
      
      <button
        disabled={!name}  
        onClick=
      {editing ? () => editList(listId, name, setName, setList, setEditing) : () => addItemList(name, setName, setList)}>  
      {editing ? "Edit" : "Add"}
      </button>

    

      

      {/* <MyLists/> */}
      {myList.map((list) => <MyLists text={list.name} key={list._id}
        updatingInInput={() => updatingInInput(list._id, list.name)}
      deleteList={()=>deleteList(list._id, setList)}/>
      )}

    </div>
   
  );
}

export default App;

