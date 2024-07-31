import React, {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBarsStaggered} from "@fortawesome/free-solid-svg-icons";

interface NewListMenuProps{
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    newList: string,
    setNewList:  React.Dispatch<React.SetStateAction<string>>
}

const NewListMenu: React.FC<NewListMenuProps> = ({handleKeyDown, newList, setNewList}) => {

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Check if the inputRef.current is not null
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className='flex'>
            <FontAwesomeIcon icon={faBarsStaggered}/>
            <input ref={inputRef} className="new-list-input" type="text" onKeyDown={handleKeyDown} value={newList}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewList(e.target.value)}/></div>
    )
}

export default NewListMenu