import {useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MoiveCard'

const API_URL = 'http://www.omdbapi.com?apikey=b602e60'

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const [movies, setMovies] = useState([]);   //default value is an empty array
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const resopnse = await fetch(`${API_URL}&s=${title}`);
        const data = await resopnse.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("batman");
    },[]);

    return (
        <div className="app">
            <h1>Movie Lookup</h1>

            <div className="search">
                <input
                placeholder="Search for a movie"
                value= {searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                 />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {searchMovies(searchTerm)}} />
            </div>

            {
                movies.length > 0?
                (<div className="container">
                    {movies.map((movie) => <MovieCard movie={movie} />)}
                </div>):(
                    <div>
                        <h2>No movies found.</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App