"use client";

import { Home, Logout, People, Search, Send } from "@mui/icons-material";
import Link from "next/link";
import { createBrowserSupabaseClient } from "utils/supabase/client";

export default function Sidebar() {
  const supabase = createBrowserSupabaseClient();

  return (
    <aside className="h-screen w-fit p-6 border-r border-gray-300 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <Link href="/" className="mb-10">
          <Home className="" />
        </Link>
        <Link href="/people">
          <People className="" />
        </Link>
        <Link href="/discover">
          <Search className="" />
        </Link>
        <Link href="/chat">
          <Send className="" />
        </Link>
      </div>
      <div>
        <button onClick={async () => supabase.auth.signOut()}>
          <Logout className="text-deep-purple-900" />
        </button>
      </div>
    </aside>
  );
}
