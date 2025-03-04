import axios from 'axios';

const getAllList = (setList) => {
    axios.get("http://localhost:8000")
        .then(({ data }) => {
            console.log(data)
            setList(data); 
    })
}

const addItemList = ( name, setName, setList ) => {
    axios.post('http://localhost:8000/saveList', { name })   
        .then((data) => {
    console.log(data);
    setName("");
    getAllList(setList);
    })
}
const editList = (listId, name, setName, setList, setEditing) => {
   axios.put('http://localhost:8000/editList', {_id: listId, name })   
        .then((data) => {
    console.log(data);
            setName("");
            setEditing(false);
        getAllList(setList);
    }) 
}
const deleteList = (_id, setList) => {
   axios.delete('http://localhost:8000/deleteList', {_id})   
        .then((data) => {
    console.log(data)
    getAllList(setList);
    }) 
}



export { getAllList, addItemList, editList, deleteList };
