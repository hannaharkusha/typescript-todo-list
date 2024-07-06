import React, { useContext } from "react";
import { DataContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faFolderOpen, faListCheck, faStar, faSun} from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
    name: string;
    surname: string;
    email: string;
    setOption: (option: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ name, surname, email, setOption }) => {
    const { customGroups, addCustomGroup } = useContext(DataContext);

    return (
        <div className='navbar flex'>
            <div className="navbar-name flex light-hover">
                <div>{name} {surname}</div>
                <div>{email}</div>
            </div>
            <input className='navbar-search' type="text" />
            <div className="navbar-groups">
                <div className='light-hover flex' onClick={()=>setOption('My day')}><div className='line'></div>
                    <FontAwesomeIcon  icon={faSun}/>
                    <div>My Day</div>
                </div>
                <div className='light-hover flex'  onClick={()=>setOption('Important')}><div className='line'></div>
                    <FontAwesomeIcon icon={faStar} />
                    <div>Important</div>
                </div>
                <div className='light-hover flex'  onClick={()=>setOption('Tasks')}><div className='line'></div>
                    <FontAwesomeIcon icon={faListCheck} />
                    <div>Tasks</div>
                </div>
            </div>
            <div className="navbar-groups">
                {customGroups.map((group, index) => (
                    <div className='light-hover flex' key={index}  onClick={()=>setOption(group)}>
                        <div className='line'></div>
                        <FontAwesomeIcon icon={faBarsStaggered} />
                        <div>{group}</div>
                    </div>
                ))}
            </div>
            <div className="navbar-bottom-menu flex">
                <div className='light-hover'>+ New list</div>
                <div className='light-hover'><FontAwesomeIcon icon={faFolderOpen} /></div>
            </div>
        </div>
    );
};

export default Navbar;
