import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import { getVideogames } from './apiCore';
import Card from './Card';

const Home = () => {
    const [videogames, setVideogames] = useState([]);
    const [error, setError] = useState(false);

    const loadVideogames = () => {
        getVideogames().then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setVideogames(data);
                console.log(data);
            }
        })
    }

    useEffect(() => {
        loadVideogames();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    {videogames.map((videogame, i) => (
                        <div key={1} className="col-lg-4 col-md-6 col-smd-6 col-sm-6 col">
                            <Card videogame={videogame} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Home;