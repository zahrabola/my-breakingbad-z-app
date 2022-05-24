import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import Search from "./components/Search";

const App = () => {

  const[items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState ("")


useEffect (() => {
const fetchItems = async () => {

const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

//console.log(result.data)
setItems(result.data)
setLoading(false)
}
fetchItems()
}, [query])





  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search  getQuery={(q) => setQuery(q)}/>

        <CharacterGrid loading={loading} items={items}/>
      </div>
      <div><small>Coded by Zahra Olanrewaju </small></div>
    </div>
  );
};

export default App;
