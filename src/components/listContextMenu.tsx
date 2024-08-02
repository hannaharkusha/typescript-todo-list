import React, {useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faPen} from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
    listName: string,
}

const ListContextMenu: React.FC<MenuProps> = ({listName}) => {


    return(
        <div className='context-menu' >
            <div className="context-menu-option flex">
                <div className='context-menu-option-title'>Rename</div>
                <FontAwesomeIcon icon={faPen} />
            </div>
            <div className="context-menu-option flex">
                <div className='context-menu-option-title'>Delete</div>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    )
}

export default ListContextMenu;

