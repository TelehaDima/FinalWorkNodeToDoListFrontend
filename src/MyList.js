import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const MyLists = ({text, updatingInInput, deleteList}) => {
    return (
        <div>
            <p>{text}</p>
            <MdModeEdit onClick={updatingInInput} />
            <MdDelete onClick={deleteList} />
        </div>
    )
}
export default MyLists