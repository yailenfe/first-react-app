import React from "react";
import Menu from "./Menu";
import "./Header.css";

function Header() {
    return (
        <header>
            <h1>
                <span className="style-whait">Always</span><span className="style-Black">Learning</span>
            </h1>
            <Menu />
        </header>
    );
}

export default Header;
