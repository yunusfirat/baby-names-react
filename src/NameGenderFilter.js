import React from "react";
import { GrRestroomWomen } from "react-icons/gr";
import { ImMan } from "react-icons/im";
import { FaPeopleCarry } from "react-icons/fa";
import Data from "./babyNamesData.json";
const NameGenderFilter = ({ setData }) => {

    const filterMale = Data.filter((baby) => baby.sex === "m");
    const filterFemale = Data.filter((baby) => baby.sex === "f");



    const allfemale = () => {
      setData(filterFemale);
    };

    const allmale = () => {
       setData(filterMale);
    };
    const all = () => {
        setData(Data);
    };
    return (
        <>
        <div className="gender-button">
            <div><button className="icon"style= {{ backgroundColor:"##DDDDDD" }} onClick={all} ><FaPeopleCarry  /></button></div>
            <div><button className="icon" style= {{ backgroundColor:"#FFC6E5" }} onClick={allfemale} ><GrRestroomWomen /></button> </div>
            <div><button className="icon" style= {{ backgroundColor:"#A0CFEE" }} onClick={allmale}><ImMan/></button> </div>
        </div>
        </>
    );
};

export default NameGenderFilter;