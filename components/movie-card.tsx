"use client";

import Link from "next/link";

export default function MovieCard({ movie }) {
  const { image_url, title, id } = movie;
  return (
    <div className="col-span-1 relative">
      {/* img */}
      <img className="w-full" src={image_url} />
      <Link href={`/movies/${id}`}>
        <div className="flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 cursor-pointer p-4">
          <p className="text-xl font-bold text-white text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
}
