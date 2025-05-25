import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Sobre } from "./_components/sobre";

export default function Home(){
  return (
  <>
    <Navbar />
    <main>
      <Hero />
      <Sobre />
    </main>
  </>
  )
}