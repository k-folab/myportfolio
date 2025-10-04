import "@/app/globals.css";

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
