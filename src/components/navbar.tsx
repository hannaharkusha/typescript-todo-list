import React, { useContext } from "react";
import { DataContext } from "../App";

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
            <div className="navbar-name">{name} {surname}</div>
            <input className='navbar-search' type="text" placeholder="Search..." />
            <div className="navbar-groups">
                <div>My Day</div>
                <div>Important</div>
                <div>Tasks</div>
            </div>
            <div className="navbar-groups">
                {customGroups.map((group, index) => (
                    <div key={index}>{group}</div>
                ))}
            </div>
            <div className="navbar-bottom-menu flex">
                <div>New list</div>
                <div>Group</div>
            </div>
        </div>
    );
};

export default Navbar;
