import './App.css';
import FavouritesMovieList from './FavouritesMovieList';
import MovieModal from './MovieModal';
import SearchMovie from './SearchMovie';
import React from 'react';

function App() {
   const [favourites,setFavourites] = React.useState([])
   const [isModalOpen,setIsModalOpen] = React.useState(false);
   const [selectedMovie,setSelectedMovie] = React.useState(null);

   const showModal = (movie) =>{
    setIsModalOpen(true);
    setSelectedMovie(movie);
   } 
   const closeModal =  ()=>{
    setIsModalOpen(false)
    setSelectedMovie(null);
   }
   const AddFavourites = (movies)=>{
      const moviesArray = Array.isArray(movies) ? movies : [movies];
      setFavourites(prev => [
        ...moviesArray.filter(
        movie => !prev.some(fav => fav.imdbID === movie.imdbID)
        ),
        ...prev
  ]);}
  const RemoveFavourites = (movie)=>{
    setFavourites(prev => prev.filter(fav => fav.imdbID !== movie.imdbID));
  }
  return (
    <div className="app">
      <SearchMovie AddFavourites={AddFavourites}/>
      <FavouritesMovieList 
        favourites={favourites} 
        RemoveFavourites={RemoveFavourites}
        showModal={showModal}
        />
      { 
      selectedMovie!==null?(
      <MovieModal
        isModalOpen={isModalOpen}
        movie = {selectedMovie}
        closeModal = {closeModal}
      /> ):null
      }
    </div>
  );
}

export default App;
