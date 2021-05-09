import React from "react";
import Data from "./babyNamesData.json";
import SingleBaby from "./SingleBaby";
const BabyNameList = ( { input } ) => {
    const sortedBabies = Data.sort(function(a, b){
     return (
            a.name < b.name ? -1 : 1 || 0 );
    }).filter((baby) => input !== "" ? baby.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) : baby);

    return (
        <div className="container">
            <div className="buttons">
            {sortedBabies.map((baby) => {
                return(
                    <SingleBaby key={baby.id} baby={baby} />
                );
            })}
            <hr className={input.length > 1 ? "move-up" : null } />
        </div>
        </div>
    );
};

export default BabyNameList;