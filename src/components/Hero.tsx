import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Communication en temps réel</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Comprendre les{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Webhooks
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Les webhooks permettent aux applications de communiquer instantanément 
            entre elles en temps réel, sans avoir à constamment vérifier les mises à jour.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("introduction")}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              Découvrir
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("differences")}
              className="border-2 hover:bg-muted"
            >
              Voir les différences
            </Button>
          </div>

          {/* Visual Indicator */}
          <div className="animate-bounce mt-8">
            <div className="h-12 w-12 mx-auto rounded-full border-2 border-primary/30 flex items-center justify-center">
              <div className="h-2 w-2 bg-primary rounded-full animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
