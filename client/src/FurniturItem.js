import React from "react";
import "./FurniturItem.css"


const FurniturItem = ({name, image, text, onDelete, updateFurnitur}) => (
  <li className="furniturCard">
      <div className="furniturCardImg">
        <img src={image} />
      </div>
      <div className="furniturCardContent">
        <h4 className="furniturTitle">{name}</h4>
        <p>{text}</p>
        <button onClick={onDelete}>Delete</button>
      </div>
  </li>
);
export default FurniturItem;
