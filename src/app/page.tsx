import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustBar from "@/components/trust-bar";
import ProductShowcase from "@/components/product-showcase";
import OriginStory from "@/components/origin-story";
import Ingredients from "@/components/ingredients";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import CtaBanner from "@/components/cta-banner";
import InstagramFeed from "@/components/instagram-feed";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProductShowcase />
        <OriginStory />
        <Ingredients />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  );
}
