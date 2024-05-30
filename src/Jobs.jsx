import React from "react";
import { gridBox as JobGrid } from "./components/gridBox";

export function foundJob(props) {
    return (
        <JobGrid title={ props.title } details={ props.details } location={ props.location } />
    );
}