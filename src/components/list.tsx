import React, {useContext, useEffect, useState} from "react";
import { DataContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsis} from "@fortawesome/free-solid-svg-icons";

interface ListProps {
    option: string ;
}

const List: React.FC<ListProps> = ({option }) => {

    const {data}= useContext(DataContext);

    const [date, setDate] = useState<string>('')




    useEffect(()=>{

        const options :{} = {
            weekday: 'long',
            day: 'numeric',
            month: 'long'
        }

        let date = new Date();
        setDate(date.toLocaleString('en-US', options))

        setInterval(()=>{
            date = new Date()
            setDate(date.toLocaleString('en-US', options))
        }, 60000);


    },[option])

    return (
        <div className='list flex'>
            <div className="list-top flex">
                {option==='My day' ? (
                    <div className='flex column'>
                        <div className='option'>{option}</div>
                        <div className='date'>{date}</div>
                    </div>
                ) : (<div>{option ? option : 'Opcja'}</div>)}
                    <div ><FontAwesomeIcon icon={faEllipsis}/></div>
            </div>
            <div className="list-content">
                <div className='list-tasks'>
                    {data.filter(el=> {
                        return el[0]===option
                    }).map(el=>(
                        <div>{el[1]}</div>
                    ))}
                </div>
                <div className="list-task-input">
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
};

export default List;
