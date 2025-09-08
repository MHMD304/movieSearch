export default function FavouritsMovie({movie,RemoveFavourites,showModal}){
    const handleShowModal = ()=>{
        showModal(movie);
    }
    const handleContentClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className="card" onClick={handleShowModal}>
            <div className="card-header" >
                <div className="image-container">
                    <img src={movie.Poster} alt={movie.Title}/>
                </div>
                <h3 className="movie-title">{movie.Title}</h3>
            </div>
            <div className="card-body" onClick={handleContentClick}>
                <p>{movie.Year}</p>
                {
                    movie.Country!=="N/A"?
                    (<p>{movie.Country}</p>):null
                }
                <button onClick={()=>RemoveFavourites(movie)}>Remove</button>
            </div>
        </div>
    )
}