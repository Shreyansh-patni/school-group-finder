import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClubDirectory from "@/components/ClubDirectory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClubDirectory />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
