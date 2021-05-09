import React from "react";
import Data from "./babyNamesData.json";
import SingleBaby from "./SingleBaby";
const BabyNameList = () => {
    const sortedBabies = Data.sort(function(a, b){
        if(a.name < b.name) {
             return -1;
            }
        if(a.firstname > b.firstname){
            return 1;
         }
            return 0;
    });
    return (
        <div className="container">
            <div className="buttons">
            {sortedBabies.map((baby) => {
                return(
                    <SingleBaby baby={baby} />
                );
            })}
        </div>
        </div>
    );
};

export default BabyNameList;