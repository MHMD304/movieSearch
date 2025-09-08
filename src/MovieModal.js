import Modal from 'react-modal'
import { useEffect } from 'react';
export default function MovieModal({isModalOpen,movie,closeModal}){

      useEffect(() => {
        if (isModalOpen) {
            const scrollY = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            const appElement = document.querySelector('.app');
            appElement.style.filter = 'blur(3px)';
            appElement.style.pointerEvents = 'none';
            appElement.style.transition = 'filter 0.3s ease-in-out';            
            return () => {
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
                appElement.style.filter = '';
                appElement.style.pointerEvents = '';
                
            };
        }
    }, [isModalOpen]);

    return(
    <Modal
        className="modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={movie.Title}
    >
        <div className='modal-content' > 
            <span onClick={closeModal}>&times;</span>
            <div className="modal-header">

                <div className="modal-header-text">
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </div>
                 <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="modal-body">
                <p>
                    <strong>Genre:</strong>
                    {movie.Genre}
                </p>
                <p>
                    <strong>Language:</strong>
                    {movie.Language}
                </p>
                <p>
                    <strong>Director:</strong>
                    {movie.Director}
                </p>
                <p>
                    <strong>Actors:</strong>
                    {movie.Actors}
                </p>
                <p>
                    <strong>Awards:</strong>
                    {movie.Awards}
                </p>
                <p>
                    <strong>BoxOffice:</strong>
                    {movie.BoxOffice}
                </p>
                <p>
                    <strong>Country:</strong>
                    {movie.Country}
                </p>
            </div>
        </div>
    </Modal>
    )
}