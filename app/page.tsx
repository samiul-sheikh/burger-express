import Hero from "./components/Hero";
import Category from "./components/Category";
import Promo from "./components/Promo";
import About from "./components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
      <Promo />
      <About />
    </div>
  );
}
