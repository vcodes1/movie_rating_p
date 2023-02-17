import Movie from './Movie.js';
const spiderman = {
  title: "Spiderman: No Way Home",
  image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  rating: "4.5"
};

const harryPotterFirst= {
  title: "Harry Potter and Sorcers Stone",
  image: "https://rukminim1.flixcart.com/image/850/1000/l0pm3680/poster/3/i/j/large-harry-potter-the-sorcerer-s-stone-poster-poster-print-on-original-imagcfwh8av8gukb.jpeg?q=20",
  rating: "4.5"
};
const doctorStrange = {
  title: "Doctor Strange in Multiverse of Madness",
  image: "https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg",
  rating: "4.5"
};
const captainAmericaSecond = {
  title: "Captain America: Civil War",
  image: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
  rating: "5"
};

const movies = [
  captainAmericaSecond,
  doctorStrange,
  spiderman,
  harryPotterFirst
];
const showMovie = (movie) =>{
 return ( <Movie movie={movie}/>);
}
const MoviesList = () =>{
  return(
    <div>{
      movies.map(showMovie)}
      
    </div>
  )
}
export default MoviesList;