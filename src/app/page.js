import Image from "next/image";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import Homesection from "@/components/Home/home";
import Pagetransition from "@/components/PageTransition/pagetransition";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/Themecontext";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Homesection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
