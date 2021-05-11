import React, { useState } from "react";
import { GrRestroomWomen } from "react-icons/gr";
import { ImMan } from "react-icons/im";
import { FaPeopleCarry } from "react-icons/fa";
import Data from "./babyNamesData.json";
const NameGenderFilter = ({ setData }) => {
    const [allActive, setAllActive] = useState(true);
    const [maleActive, setmaleActive] = useState(false);
    const [femaleActive, setFemaleActive] = useState(false);
    const filterMale = Data.filter((baby) => baby.sex === "m");
    const filterFemale = Data.filter((baby) => baby.sex === "f");



    const allfemale = () => {
        setData(filterFemale);
        setFemaleActive(true);
        setmaleActive(false);
        setAllActive(false);
    };

    const allmale = () => {
        setData(filterMale);
        setFemaleActive(false);
        setmaleActive(true);
        setAllActive(false);
    };
    const all = () => {
        setData(Data);
        setFemaleActive(false);
        setmaleActive(false);
        setAllActive(true);
    };
    return (
        <>
            <div className="gender-button">
                <div><button className={allActive ? "active" : "icon"} style={{ backgroundColor: "##DDDDDD" }} onClick={all} ><FaPeopleCarry /></button></div>
                <div><button className={femaleActive ? "active" : "icon"}  style={{ backgroundColor: "#FFC6E5" }} onClick={allfemale} ><GrRestroomWomen /></button> </div>
                <div><button className={maleActive ? "active" : "icon"}  style={{ backgroundColor: "#A0CFEE" }} onClick={allmale}><ImMan /></button> </div>
            </div>
        </>
    );
};

export default NameGenderFilter;