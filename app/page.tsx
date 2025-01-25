import Approach from "@/components/Approach";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navigation */}
        <FloatingNav navItems={navItems} />

        {/* Hero Section */}
        <Hero />

        {/* Grid Section */}
        <Grid />

        {/* Skills Section */}
        <Skills />

        {/* Recent Projects Section */}
        <RecentProjects />

        {/* Uncomment Client if required */}
  

        {/* Experience Section */}
        <Experience />

        {/* Approach Section */}
        <Approach />

        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
}
