import { useEffect, useState } from 'react';
import './App.css';
import MyLists from './MyList';
import { addItemList, getAllList } from './FetchList';



function App() {
  const [myList, setList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getAllList(setList)
  },[])

  return (
    <div className='main'>

      <h1>List To Do</h1>
      
      <input
        type="text"
        placeholder="Add a task..."
        value={name}
        onChange={(e) => setName(console.log(e.target.value))}
      />
      
      
      <button onClick={() => addItemList(name, setName, setList)}>ADD</button>
    

      {/* <MyLists/> */}
{myList.map((list) => <MyLists text={list.name}key={list._id}/>)}

    </div>
   
  );
}

export default App;
