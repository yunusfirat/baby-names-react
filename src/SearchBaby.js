import React from "react";
import Favourites from "./Favourites";
import NameGenderFilter from "./NameGenderFilter";
const SearchBaby = ({ input, setInput, favourites, setFavourites, data, setData   }) => {

    const search = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="input-style">
            <Favourites favourites= {favourites} setFavourites={setFavourites} data={data} setData={setData} />
            <div style={{ display:"flex", left:"29%", position:"absolute" }} >
            <input
            onChange={search}
            value={input}
            placeholder="Search Baby Name"
            id="searchbaby"/>
            <NameGenderFilter data={data} setData={setData} />
            </div>
            <hr/>
        </div>
    );
};

export default SearchBaby;