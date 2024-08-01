import React from "react";

const Company = (props) => {

    return (
        <div className="expertise-company">
            <h5 className="name-job">{props.job}</h5>
            <p className="company-name">{props.name}</p>
            <p className="description-job">{props.description}</p>
        </div>
    )

}

export default Company