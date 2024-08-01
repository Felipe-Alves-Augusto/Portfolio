import React from "react";

const Skill = (props) => {

    return (
        <div className="skill col-md-6 col-12">
            <div className="name-skill">{props.name}</div>
            <div style={{width: `${props.progress}%`}} className="progress"></div>
        </div>
    )

}

export default Skill