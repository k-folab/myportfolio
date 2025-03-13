import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/Themecontext";
import ExperienceSection from "@/components/Experience/experience";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ExperienceSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
