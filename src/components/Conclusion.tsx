import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, TrendingUp, Shield } from "lucide-react";

const Conclusion = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Temps Réel",
      description: "Communication instantanée sans latence",
    },
    {
      icon: TrendingUp,
      title: "Efficacité",
      description: "Réduit la charge serveur et optimise les ressources",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Système événementiel robuste et prévisible",
    },
    {
      icon: CheckCircle,
      title: "Automatisation",
      description: "Workflows automatisés entre applications",
    },
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary-foreground">
              Les Webhooks : Essentiels au Développement Moderne
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Les webhooks ont révolutionné la façon dont les applications communiquent entre elles. 
              Ils permettent de créer des systèmes réactifs, efficaces et automatisés qui répondent 
              instantanément aux événements.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="border-2 border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-foreground/20">
                      <advantage.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-primary-foreground">
                        {advantage.title}
                      </h3>
                      <p className="text-sm text-primary-foreground/80">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final Message */}
          <Card className="border-2 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Prêt à utiliser les Webhooks ?
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Les webhooks sont devenus un standard dans le développement web moderne. 
                Que vous construisiez une application, une intégration ou un système d'automatisation, 
                les webhooks vous permettront de créer des expériences plus réactives et efficaces.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
                <span>✓ Faciles à implémenter</span>
                <span>✓ Standards de l'industrie</span>
                <span>✓ Hautement scalables</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
