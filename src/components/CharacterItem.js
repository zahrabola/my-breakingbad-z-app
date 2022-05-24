import React from "react";

const Characteritem = ({item}) => {
    return (
      <div className="card">
        <div className="cardinner">
          <div className="cardfront">
            <img src={item.img} alt="" />
          </div>

          <div className="cardback">
            <h1>{item.name}</h1>

            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Occupation:</strong> {item.occupation}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}



export default Characteritem;