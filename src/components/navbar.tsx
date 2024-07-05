import React, { useContext } from "react";
import { DataContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faFolderOpen, faListCheck, faStar, faSun} from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
    name: string;
    surname: string;
    email: string;
}

const Navbar: React.FC<NavbarProps> = ({ name, surname, email }) => {
    const { customGroups, addCustomGroup } = useContext(DataContext);

    // const handleAddGroup = (group:string) => {
    //     addCustomGroup(group);
    // };

    return (
        <div className='navbar flex'>
            <div className="navbar-name flex light-hover">
                <div>{name} {surname}</div>
                <div>{email}</div>
            </div>
            <input className='navbar-search' type="text" />
            <div className="navbar-groups">
                <div className='light-hover flex'><div className='line'></div>
                    <FontAwesomeIcon style={{color: '#c311c5'}} icon={faSun}/>
                    <div>My Day</div>
                </div>
                <div className='light-hover flex'><div className='line'></div>
                    <FontAwesomeIcon icon={faStar} style={{color: '#00c1be'}}/>
                    <div>Important</div>
                </div>
                <div className='light-hover flex'><div className='line'></div>
                    <FontAwesomeIcon icon={faListCheck} style={{color: '#e82e5c'}}/>
                    <div>Tasks</div>
                </div>
            </div>
            <div className="navbar-groups">
                {customGroups.map((group, index) => (
                    <div className='light-hover flex' key={index}>
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
