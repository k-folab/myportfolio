import "@/app/globals.css";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ProjectSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
