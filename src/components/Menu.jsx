import React from "react";
import './Menu.css';

const Menu = () => {

    return (
        <header className="header shadow bg-body-tertiary rounded">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top affix-top" data-spy="affix" data-offset-top="0">
        <div className="container">
            
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto align-items-center menu">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Trabalhos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#expertise">Experiência</a>
                    </li>   

                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Habilidades</a>
                    </li>                   
                    
                    
                   
                </ul>
            </div>
        </div>          
        </nav>
        </header>
    )

}

export default Menu