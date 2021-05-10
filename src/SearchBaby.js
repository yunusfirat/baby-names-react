import React from "react";
import Favourites from "./Favourites";

const SearchBaby = ({ input, setInput, favourites, setFavourites, data, setData   }) => {

    const search = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="input-style">
            <Favourites favourites= {favourites} setFavourites={setFavourites} data={data} setData={setData} />
            <input
            onChange={search}
            value={input}
            placeholder="Search Baby Name"
            id="searchbaby"/>
            <hr/>
        </div>
    );
};

export default SearchBaby;