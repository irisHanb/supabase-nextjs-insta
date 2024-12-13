import LogoutButton from "components/logout-button";
import { createServerSupabaseClient } from "utils/supabase/server";

export const metadata = {
  title: "Ingram",
  description: "Instagram clone project",
};

export default async function Home() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <main className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="font-bold text-xl">
        Welcome {session?.user?.email.split("@")[0]}!!!
      </h1>
      <LogoutButton />
    </main>
  );
}
