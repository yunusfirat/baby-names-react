import React from "react";

const SingleBaby = ({ baby }) => {
    const {  name, sex } = baby;
    return (
        <>
        <button
        className = {sex === "f" ? "female-btn" : "male-btn"}>{name}</button>
        </>
    );
};

export default SingleBaby;