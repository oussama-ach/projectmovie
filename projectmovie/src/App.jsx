import { useState } from "react";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const onButtonClick = (e) => {
    e.preventDefault();
    const apiUrl =
      "https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=false&query=" +
      searchValue;
    fetch(apiUrl)
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setMovies(resp.results);
      });
  };
  return (
    <>
      <div className="app">
        <form>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button onClick={onButtonClick}>Search</button>
        </form>
      </div>
      <div className="list-movies">
        {movies.map((movie) => {
          return (
            <div className="movie">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
                      : `https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg`
                  }
                  alt="Movie Poster"
                />
                <h2>{movie.original_name}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
