import { MovieCard } from "./components/MovieCard";
const api_key = process.env.API_KEY;
const getMovies =async ()=>{
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
  const movies = await response.json()
  return movies;
}

export default async function Home() {
  const movieList = await getMovies();
  console.log(movieList);
  return (
<div >
    <div className="flex text-3xl font-bold justify-center"> <h1>Movie database</h1></div>
   
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  m-5">      {
        movieList.results.length > 0 && movieList.results.map((movie)=>{
          return (
            <MovieCard
              key = {movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              description={movie.popularity}
              id = {movie.id}/>
          )
        })
      }
    </div>
</div>
  );
}