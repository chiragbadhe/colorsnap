import { Karla } from "next/font/google";
import SEO from "@/components/ui/SEO";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const karla = Karla({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SEO />
      <main className={`${karla.className} overflow-hidden relative`}>
        <Header />
        <Hero />
      </main>
    </>
  );
}
