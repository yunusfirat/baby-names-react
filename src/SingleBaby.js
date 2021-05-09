import React from "react";

const SingleBaby = ({ baby }) => {
    const { id, name, sex } = baby;
    return (
        <>
        <button
        key={id}
        className = {sex === "f" ? "female-btn" : "male-btn"}>{name}</button>
        </>
    );
};

export default SingleBaby;