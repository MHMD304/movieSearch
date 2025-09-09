import React from "react";
export default function SearchMovie(props) {
    const [query,setQuery] = React.useState("");
    const [loading,setLoading] = React.useState(false);
    const api_key =  "Your API Key from OMDb"; 
    const search = async () => {
    if (!query) return;
    setLoading(true); 
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${api_key}&s=${query}`
      );

      const jsonData = await response.json();

      const detailedMovies = await Promise.all(
        jsonData.Search.map(async (movie) => {
          const detailRes = await fetch(
            `https://www.omdbapi.com/?apikey=${api_key}&i=${movie.imdbID}&plot=full`
          );
          const detailData = await detailRes.json();
          return detailData;
        })
      );

      if (detailedMovies) {
        props.AddFavourites(detailedMovies);
      } else {
        props.AddFavourites([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      alert("Connection Error!");
    } finally {
      setLoading(false); 
    }
  };
    const isDisabled = query === "" ? true : false;
    return (
        <div className="search-container">
            <h1>Search Movies</h1>
            <input
                type="text"
                value={query}
                onChange={(e)=>(setQuery(e.target.value))}
                placeholder="write movie name"
            />
            <button disabled={isDisabled||loading}  onClick={search} >
                {
                loading?"Loading...":"search movie"
                }
                </button>
        </div>
        
    );
}