import React from "react";

import trollImg from "../images/troll-img.jpg";

export default function Nav() {
    return(
        <header className="header">
            <img src={trollImg} className="header-img" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
        </header>
    );
}