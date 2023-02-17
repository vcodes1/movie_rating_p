
const Movie = ({movie}) => {
  return(
    <div className='movie'>
      <div className='card'>
      <h2>{movie.title}</h2>
      <img src={movie.image}/>
      <p>Rating {movie.rating}</p>
    </div>
    </div>
  );
}

export default Movie;