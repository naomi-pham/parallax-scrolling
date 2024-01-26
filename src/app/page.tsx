import { Lato } from "next/font/google";
import PostList from "~/components/posts/PostList";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <main className="container mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4">
      <div className="space-y-6 mt-16">
        <h1 className={`text-brown-900 text-7xl font-bold ${lato.className}`}>
          Blog archive
        </h1>
        <h1 className={`text-2xl ${lato.className}`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
      </div>

      <PostList />
    </main>
  );
}
