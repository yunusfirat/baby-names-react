import React, { useState } from "react";
import "./App.css";
import BabyNameList from "./BabyNameList";
import SearchBaby from "./SearchBaby";
function App() {
  const [ input, SetInput ] = useState("");
  return (
    <div className="App">

      <SearchBaby  input = {input} setInput = {SetInput} />
      <BabyNameList input = {input} />
    </div>
  );
}

export default App;
