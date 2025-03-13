import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/Themecontext";
import ContactSection from "@/components/Contact/contact";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
