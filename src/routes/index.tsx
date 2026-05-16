import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gungun Khatri — Data Analytics Portfolio" },
      {
        name: "description",
        content:
          "Data Science student specializing in analytics, dashboards, and business intelligence. Open to data analytics internships.",
      },
      { property: "og:title", content: "Gungun Khatri — Data Analytics Portfolio" },
      {
        property: "og:description",
        content:
          "Python · SQL · Power BI · Tableau · EDA. Turning data into decisions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
