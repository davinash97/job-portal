import React from "react";
import "./gridBox.css";

export function gridBox(props) {
    return (
        <div className="job-card flex flex-col gap-5 p-4 m-3">
            <h3 className="job-title">{props.title}</h3>
            <p className="job-details">
                {props.details}
            </p>
            <div className="job-location">{props.location}</div>
        </div>
    )
}