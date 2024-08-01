import React from "react";
import './Expertise.css'
import Title from "./Title";
import Company from "./Company";

export default () => {

    return (
        <div className="expertise" id="expertise">
            <Title title="Experiência"></Title>
            
                <Company job="suporte de ti" description="Responsável por auxiliar no suporte de treinamento do 
    software de consignados e Auxiliar na manutenção de carteira de clientes"></Company>

                <Company job="Estagiário de desenvolvimento" name="Upper Rocks"
                description="Responsável por desenvolver e dar manutenção em sites"></Company>

                <Company job="Desenvolvedor Full-Stack Júnior" name="Upper Rocks"
                description="Responsável por desenvolver e dar manutenção em sites"></Company>
           
        </div>
    )

}