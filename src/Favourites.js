import React from "react";


const Favourites = ({ favourites, setFavourites, setData, data  }) => {
    const backmainlist = (e) => {
        let name = e.target.value;
        let removedElement = favourites.filter((baby) => baby.name !== name);
        let addedElement = favourites.filter((baby) => baby.name === name);
        console.log(addedElement);
        setFavourites(removedElement);
        setData(data.concat(addedElement));
    };
    return (
        <div className="favourites">
            <div className="favourites-p" ><p>Favourites:</p></div>
            <div className="buttons" style={{ display:"flex" }}>
            {favourites.map((favorite) => {
                const { id, name, sex } = favorite;
                return(
                    <button
                    key={id}
                    className = {sex === "f" ? "female-btn" : "male-btn"}
                    onClick={backmainlist}
                    value={name}>{name}
                    </button>
                );
            })}
        </div>
        </div>
    );
};

export default Favourites;