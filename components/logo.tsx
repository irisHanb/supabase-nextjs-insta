import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="w-20 h-auto"
        src="/imgs/tmdbflix_logo.png"
        alt="TMDBFLIX logo"
        width={50}
        height={30}
      />
    </div>
  );
}
