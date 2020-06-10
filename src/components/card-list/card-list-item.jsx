import React from "react";
import Card from "../Card/card.jsx"
import './card-list-style.css';

function CardList(props) {
    return <div className="cardList">
    {props.list.map(item =><Card key={item.id} monster={item}></Card>)}
    </div>;
}

export default CardList;