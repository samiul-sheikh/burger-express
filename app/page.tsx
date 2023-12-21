import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Category from "./components/Category";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category />
    </div>
  );
}
