import Image from "next/image";
import Navbar from "../components/Navbar/navbar";
import "@/app/globals.css";
import { ThemeProvider } from "@/context/Themecontext";
import ProjectSection from "@/components/Project/project";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ProjectSection />
      </ThemeProvider>
    </div>
  );
}
