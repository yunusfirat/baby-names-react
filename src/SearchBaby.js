import React from "react";


const SearchBaby = ({ input, setInput }) => {

    const search = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="input-style">
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