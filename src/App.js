import React, { useState } from "react";
import "./App.css";
import BabyNameList from "./BabyNameList";
import SearchBaby from "./SearchBaby";
import Data from "./babyNamesData.json";
function App() {
  const [ input, SetInput ] = useState("");
  const [favourites, setFavourites ] = useState([]);
  const [data, setData ] = useState(Data);
  return (
    <div className="App">

      <SearchBaby  input = {input} setInput = {SetInput} favourites= {favourites} setFavourites={setFavourites} data={data} setData={setData} />
      <BabyNameList input = {input} favourites= {favourites} setFavourites={setFavourites} data={data} setData={setData} />
    </div>
  );
}

export default App;
