
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AnnouncementBar from "../components/AnnouncementBar";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnnouncementBar />
        <CategorySection />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
