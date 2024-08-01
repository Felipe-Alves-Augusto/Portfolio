import React from "react";
import './Social.css';

const SocialMedia = (props) => {
    return (
        <a target="_blank" className="btn-social" href={props.link}>
            <i className={props.icon}></i>
        </a>
    )
}

export default SocialMedia;