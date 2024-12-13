"use client";

import Link from "next/link";
import Logo from "./logo";
import { useRecoilState } from "recoil";
import { searchState } from "utils/recoil/atoms";

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <header className="fixed top-0 left-0 right-0 px-4 py-2 bg-gray-900 flex items-center justify-between z-50">
      <nav className="flex gap-4">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="flex text-white gap-2">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex gap-2 items-center max-w-72 border border-white bg-transparent text-white rounded-md p-2">
        <i className="fas fa-search" />
        <input
          className="bg-transparent"
          placeholder="Search Movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
