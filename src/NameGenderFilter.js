import React from "react";

const NameGenderFilter = () => {

    return (
        <div>
            <div><input type="radio" value="Male" name="gender" /> Male</div>
            <div><input type="radio" value="Female" name="gender" /> Female</div>
            <div><input type="radio" value="Other" name="gender" /> Other</div>
        </div>
    );
};

export default NameGenderFilter;