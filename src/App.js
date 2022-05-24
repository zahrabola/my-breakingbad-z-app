import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";

const App = () => {

  const[items, setItems] = useState([])
    const [loading, setLoading] = useState(true);


useEffect (() => {
const fetchItems = async () => {

const result = await axios(`https://www.breakingbadapi.com/api/characters`)

console.log(result.data)
}
fetchItems()
}, [])



  return (
    <div className="App">
      <div className="Container">
        <Header />
      </div>
    </div>
  );
};

export default App;
