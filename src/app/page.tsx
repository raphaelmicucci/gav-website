import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { Sobre } from "./_components/sobre";
import { Dados } from "./_components/dados";
import { Descricao } from "./_components/descricao";
import { Assinatura } from "./_components/assinatura";

export default function Home(){
  return (
  <>
    <Navbar />
    <main>
      <Hero />
      <Sobre />
      <Dados />
      <Descricao/>
      <Assinatura/>
    </main>
  </>
  )
}