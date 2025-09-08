import FavouritsMovie from "./FavouritsMovie";

export default function FavouritesMovieList(props){
    return (
        props.favourites.length === 0 ? <h2 style={{ textAlign: "center" }}>No favourites added</h2> :(    
        <div className="cards-container">
            {
            props.favourites.filter((movie, index, self) =>
            index === self.findIndex((m) => m.imdbID === movie.imdbID))   
            .map((movie)=>{
                return (
                    <FavouritsMovie 
                        key={movie.imdbID} 
                        movie={movie} 
                        RemoveFavourites={props.RemoveFavourites}
                        showModal = {props.showModal}
                        />
                )})
            }
        </div>)   
    );
}