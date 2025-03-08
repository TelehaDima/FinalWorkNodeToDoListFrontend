import axios from 'axios';

const getAllList = (setList) => {
    axios.get("https://finalworknodetodolistbackend.onrender.com")
        .then(({ data }) => {
            console.log(data)
            setList(data); 
    })
}

const addItemList = ( name, setName, setList ) => {
    axios.post('https://finalworknodetodolistbackend.onrender.com/saveList', { name })   
        .then((data) => {
    console.log(data);
    setName("");
    getAllList(setList);
    })
}
const editList = (listId, name, setName, setList, setEditing) => {
   axios.post('https://finalworknodetodolistbackend.onrender.com/editList', {_id: listId, name })   
        .then((data) => {
    console.log(data);
            setName("");
            setEditing(false);
        getAllList(setList);
    }) 
}
const deleteList = (_id, setList) => {
   axios.post('https://finalworknodetodolistbackend.onrender.com/deleteList', {_id})   
        .then((data) => {
    console.log(data)
    getAllList(setList);
    }) 
}



export { getAllList, addItemList, editList, deleteList };
