import Navbar from "../components/Navbar/navbar";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/Themecontext";
import ContactSection from "@/components/Contact/contact";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ContactSection />
      </ThemeProvider>
    </div>
  );
}
