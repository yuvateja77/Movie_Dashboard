import React from 'react'
import Image from 'next/image';
import { Metadata } from 'next';
interface MovieDetailsProp {
  params:{
    id:string;
  }
}

export const metadata: Metadata = {
  title: "Popular movie",
  description: "Popular Movie test",
};


const getMovieDetails = async  (id:string)=>{
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
  const movieJson = res.json();
  return movieJson;
}

const Page = async ({params}:MovieDetailsProp) =>{
    console.log('details :',await params);
    const {id} = await params;
    const moviedetails = await getMovieDetails(id);
    console.log("mobied",moviedetails);
  return (
    <div className="p-6 max-w-5xl mx-auto">
      
    {/* 🎬 Title */}
    <h1 className="text-3xl font-bold mb-4">
      {moviedetails.title}
    </h1>

    {/* 🖼️ Poster + Info */}
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* Poster */}
      <Image
        src={`https://image.tmdb.org/t/p/w500${moviedetails.poster_path}`}
        alt={moviedetails.title}
        width={300}
        height={450}
        className="rounded-xl"
      />

      {/* Info */}
      <div className="space-y-3">
        <p className="text-gray-700">
          {moviedetails.overview}
        </p>

        <p>
          <span className="font-semibold">Release Date:</span>{" "}
          {moviedetails.release_date}
        </p>

        <p>
          <span className="font-semibold">Rating:</span>{" "}
          ⭐ {moviedetails.vote_average}
        </p>

        <p>
          <span className="font-semibold">Runtime:</span>{" "}
          {moviedetails.runtime} mins
        </p>

        <p>
          <span className="font-semibold">Language:</span>{" "}
          {moviedetails.original_language.toUpperCase()}
        </p>

        {/* 🎭 Genres */}
        <div>
          <span className="font-semibold">Genres:</span>
          <div className="flex gap-2 mt-1 flex-wrap">
            {moviedetails.genres.map((genre:any) => (
              <span
                key={genre.id}
                className="bg-gray-200 px-2 py-1 rounded-md text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}


export default Page;