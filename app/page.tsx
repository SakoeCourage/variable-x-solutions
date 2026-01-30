
import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-grow">
        <Hero />
        <About />
        <Products />
        <Portfolio />
        <Team />
        <Contact />
      </main>
    </div>
  );
}
