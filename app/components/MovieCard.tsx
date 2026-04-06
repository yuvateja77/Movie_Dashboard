import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
interface MovieCardProps {
    posterPath: string;
    title:string;
    description : string;
    id:number;
}

export const MovieCard = ({posterPath,title,description,id}:MovieCardProps) => {
    console.log(posterPath);
    console.log(id);
  return (
    <Link href={`/movie/${id}`}>
    <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
  <Image
    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
    alt={title}
    width={300}
    height={220}
    className="w-full h-[220px] object-cover"
  />
  
  <div className="p-4">
    <h1 className="text-lg font-semibold text-gray-800 line-clamp-1">
      {title}
    </h1>
    
    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
      {description}
    </p>
  </div>
</div>
</Link>
  )
}
