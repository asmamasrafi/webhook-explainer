import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Differences from "@/components/Differences";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Introduction />
      <Differences />
      <Architecture />
      <UseCases />
      <Conclusion />
      <Footer />
    </div>
  );
};

export default Index;
