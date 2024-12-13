import LogoutButton from "components/logout-button";

export const metadata = {
  title: "Ingram",
  description: "Instagram clone project",
};

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="font-bold text-xl">Welcome {"user name!!!"}</h1>
      <LogoutButton />
    </main>
  );
}
