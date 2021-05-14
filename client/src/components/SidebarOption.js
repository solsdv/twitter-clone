import React from "react";
import "../styles/SidebarOption.css";

function SidebarOption({ text, icon, active }) {
    return (
        <div className={`SidebarOption ${active && "SidebarOption--active"}`}>
            <icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption; 