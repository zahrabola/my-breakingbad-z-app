import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

const App = () => {

  const[items, setItems] = useState([])
    const [loading, setLoading] = useState(true);


useEffect (() => {
const fetchItems = async () => {

const result = await axios(`https://www.breakingbadapi.com/api/characters`)

console.log(result.data)
setItems(result.data)
setLoading(false)
}
fetchItems()
}, [])



  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search />

        <CharacterGrid loading={loading} items={items}/>
      </div>
    </div>
  );
};

export default App;
