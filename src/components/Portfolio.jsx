import React from "react";
import './Portfolio.css';
import Title from "./Title";

const Portfolio = () => {

    return (
        <div className="portfolio" id="portfolio">
            <Title title="Trabalhos"></Title>
            <ul className="works">
                <li><a target="_blank" href="https://b2balberflex.store.betalabs.net/">Alberflex</a></li>
                <li><a target="_blank" href="https://www.pontoforteferros.com.br/">Ponto Forte Ferros</a></li>
                <li><a target="_blank" href="https://www.historiadevestir.com.br/">Historia de Vestir</a></li>
                <li><a target="_blank" href="https://www.qualinova.com.br/">Qualinova</a></li>
                <li><a target="_blank" href="https://www.sweatify.com.br/">Sweatify</a></li>
                <li><a target="_blank" href="https://www.mestregp.com.br/bootcamp-cultura-de-gestao-e-lideranca-na-publicidade-e-marketing/">Mestre GP</a></li>
                <li><a target="_blank" href="https://www.ibracon.com.br/">Ibracon</a></li>
                <li><a target="_blank" href="https://www.bauerfeind.com.br/">Bauerfeind</a></li>
            </ul>
        </div>
    )
}

export default Portfolio;