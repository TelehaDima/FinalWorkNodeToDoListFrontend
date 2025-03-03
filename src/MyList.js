import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



const MyLists = ({text, editMyList, deleteItemsList}) => {
    return (
        <div>
            <p>{text}</p>
            <MdModeEdit onClick={editMyList} />
            <MdDelete onClick={deleteItemsList} />
        </div>
    )
}
export default MyLists