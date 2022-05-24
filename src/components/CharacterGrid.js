import React from "react";
import Characteritem from "./CharacterItem";

const CharacterGrid = ({items, loading}) => {

    return loading ? (
      <h1> Loading ... </h1>
    ) : (
      <section className="cards">
        {items.map((item) => (
          <Characteritem key={item.char_id} item={item}></Characteritem>
        ))}
      </section>
    );


}



export default CharacterGrid;