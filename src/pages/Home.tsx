import HeroSection from "@/components/HeroSection";
import Brands from "@/components/Brands";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import DressStyle from "@/components/DressStyle";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <title>Home</title>
        <HeroSection />
        <Brands />
        <NewArrivals />
        <TopSelling />
        <DressStyle />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Home;
