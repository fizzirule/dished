import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Dished 🍳</h1>
      <p className="text-gray-600">Learn cuisines by cooking real dishes</p>
      <Link href="/cuisines" className="rounded bg-black px-6 py-3 text-white">
      Start Cooking</Link>
    </main>
  );
}