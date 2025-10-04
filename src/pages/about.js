import "@/app/globals.css";

export default function About() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <AboutSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
