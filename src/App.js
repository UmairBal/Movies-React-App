import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// API KEY
// 478911a8
// http://www.omdbapi.com/?i=tt3896198&apikey=478911a8

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=478911a8';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('spiderman');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('spiderman');
    }, []);
    
    
    return(
    <div className="app">
        <h1>Any Movies</h1>
        
        <div className="search">
        <input 
            placeholder="Search Any Movie"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}    
        />
        <img 
            src={SearchIcon}
            alt="search"
            onClick={() => {searchMovies(searchTerm)}}    
        />
        </div>
        {
            movies?.length > 0
            ? (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))
                    }
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }

    </div>


    )
}

export default App; 
