import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface OptionProps{
    title: string;
    icon: IconDefinition;
    option: string;
    setOption: (option: string) => void;
}

const Option:React.FC<OptionProps>=({title, icon, option, setOption })=>{
    return (
        <div className='light-hover flex' onClick={()=>setOption(title)}>
            {option===title && <div className='line'></div>}
            <FontAwesomeIcon icon={icon}/>
            <div>{title}</div>
        </div>
    )
}

export default Option