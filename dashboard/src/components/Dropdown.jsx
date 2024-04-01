
// Dropdown.js

import React from "react";

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`dropdown w-full ${dropdown ? "show active" : ""}`}>
            {submenus && submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
