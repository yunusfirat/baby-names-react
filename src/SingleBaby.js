// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

const SingleBaby = ({ baby, favourites, setFavourites, setData, data }) => {
    const { name, sex, id } = baby;


    // useEffect(() => {
    //     localStorage.setItem("favorite", JSON.stringify(favourites));
    // },[favourites]);
    // console.log(localStorage.getItem("favorite"));

    const clicked = (e) => {
        let name = e.target.value;
        let removedElement = data.filter((baby) => baby.name !== name);
         setData(removedElement);
        setFavourites(favourites.concat(
            {
                "name": name,
                "sex": sex,
                "id": id,
            }));
    };
    return (
        <>
            <button
                className={sex === "f" ? "female-btn" : "male-btn"}
                id={id}
                value={name}
                onClick={clicked}>{name}</button>
        </>
    );
};

export default SingleBaby;