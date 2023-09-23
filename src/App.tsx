import React, { useState } from "react";
import Input from "./components/common/input";
import Button from "./components/common/button";
import "./App.css";

function App() {
  const [inputValue, setValue] = useState("");
  const [textList, setList] = useState([""]);

  const onSubmit = () => {
    textList.push(inputValue);
    setValue("");
    setList(textList);
  };

  return (
    <div className="App">
      <Input
        onChange={setValue}
        value={inputValue}
        type="text"
        placeholder="type something..."
      />
      <Button title="submit" onClick={onSubmit} />
      <div className="card">
        {textList.map((item: string) => {
          return <div>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
