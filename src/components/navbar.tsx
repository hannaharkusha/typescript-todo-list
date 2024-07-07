import React, { useContext } from "react";
import { DataContext } from "../App";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faFolderOpen, faListCheck, faStar, faSun} from '@fortawesome/free-solid-svg-icons';
import Option from "./option";

interface NavbarProps {
    name: string;
    surname: string;
    email: string;
    setOption: (option: string) => void;
    option: string;
}

const Navbar: React.FC<NavbarProps> = ({ name, surname, email, setOption, option }) => {
    const { customGroups, addCustomGroup } = useContext(DataContext);
    const {groups} = useContext(DataContext)

    return (
        <div className='navbar flex'>
            <div className="navbar-name flex light-hover">
                <div>{name} {surname}</div>
                <div>{email}</div>
            </div>
            <input className='navbar-search' type="text" />
            <div className="navbar-groups">
                {groups.map(group=>(
                    <Option title={group[0]} icon={group[1]} setOption={setOption} option={option}/>
                    ))}
            </div>
            <div className="navbar-groups">
                {customGroups.map((group, index) => (
                        <Option icon={faBarsStaggered} title={group} setOption={setOption} option={option}/>
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
