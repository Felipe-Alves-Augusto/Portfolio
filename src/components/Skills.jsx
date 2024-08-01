import React from "react";
import './Skills.css';
import Title from "./Title";
import Skill from "./Skill";

const Skills = () => {

    return (

        <div className="skills" id="skills">
            <Title title="Habilidades"></Title>
            <div className="wrapper-skills">
                <Skill name="HTML5" progress="100"></Skill>
                <Skill name="CSS3" progress="100"></Skill>
                <Skill name="javascript" progress="90"></Skill>
                <Skill name="bootstrap" progress="90"></Skill>
                <Skill name="reactjs" progress="70"></Skill>
                <Skill name="nodejs" progress="70"></Skill>
                <Skill name="mongodb" progress="40"></Skill>
                <Skill name="mysql" progress="70"></Skill>
                <Skill name="typescript" progress="50"></Skill>
                <Skill name="php" progress="40"></Skill>
            </div>
        </div>
    )

}

export default Skills;