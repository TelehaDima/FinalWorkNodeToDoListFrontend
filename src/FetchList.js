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


export { getAllList, addItemList };
