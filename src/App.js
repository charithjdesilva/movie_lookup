import {useState, useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MoiveCard'

const API_URL = 'http://www.omdbapi.com?apikey=b602e60'

const App = () => {
    const [movies, setMovies] = useState([]);   //default value is an empty array
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const resopnse = await fetch(`${API_URL}&s=${title}`);
        const data = await resopnse.json();

        setMovies(data.Search);
    }

    const handleKeyDownSearch = (evt) => {
         if(evt.key === 'Enter'){
            searchMovies(searchTerm);
         }
    }

    useEffect(() => {
        searchMovies("avengers");
    },[]);

    return (
        <div className="app">
            <h1>Movie Lookup</h1>

            <div className="search">
                <input
                placeholder="Search for a movie"
                value= {searchTerm}
                onChange={(evt) => {setSearchTerm(evt.target.value)}}
                onKeyDown={handleKeyDownSearch}
                 />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => {searchMovies(searchTerm)}} />
            </div>

            {
                movies?.length > 0?
                (<div className="container">
                    {movies.map((movie) => <MovieCard movie={movie} />)}
                </div>):(
                    <div className="empty">
                        <h2>No movies found.</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App