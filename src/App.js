import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=b602e60'

const movie1 = {
    "Title": "Batman Begins",
    "Year": "2005",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const resopnse = await fetch(`${API_URL}&s=${title}`);
        const data = await resopnse.json();

        console.log(data.Search);
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
                value="Batman"
                onChange={() => {}}
                 />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}} />
            </div>
        </div>
    );
}

export default App