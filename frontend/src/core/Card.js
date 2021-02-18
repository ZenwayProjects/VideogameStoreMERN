import React, { useState } from 'react';
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({ videogame }) => {
    const [count, Setcount] = useState(videogame.count);
    return (
        <div className="card m-10 card-cont">
            <div>
                <ShowImage className="img" item={videogame} url="videogame" />
                <h2>{videogame.name}</h2>
                <p>{videogame.price}</p>
                <p>{videogame.description}</p>
                <button className="btn btn-success">Ver Mas</button>
            </div>
        </div>
    )
}

export default Card;