import React from "react";
import './Home.css';
import SocialMedia from "./SocialMedia";
import ExamplePdf from './curriculo-solides.pdf'


const Home = () => {

    return (
        <div className="home" id="home">
            <div className="personal">
                <h2 className="name">Felipe Augusto</h2>
                <p className="job">Desenvolvedor Full-Stack</p>
                <a download="curriculo-felipe" className="cv btn btn-dark" href={ExamplePdf} >download cv</a>
                <div className="social-wrapper">
                    <SocialMedia 
                    link="https://www.linkedin.com/in/felipe-alves-augusto-2400461b1/"
                    icon="fa-brands fa-linkedin-in">
                    </SocialMedia>

                    <SocialMedia 
                        link="https://github.com/Felipe-Alves-Augusto" 
                        icon="fa-brands fa-github-alt">

                    </SocialMedia>
                </div>
            </div>

            <div className="banner">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
            </div>
        </div>
    )

}

export default Home