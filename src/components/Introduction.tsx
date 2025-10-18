import { Card, CardContent } from "@/components/ui/card";
import { Bell, Send, CheckCircle } from "lucide-react";
import webhookFlowImage from "@/assets/webhook-flow.jpeg";
import webhookProcessImage from "@/assets/webhook-process.jpeg";

const Introduction = () => {
  const steps = [
    {
      icon: Bell,
      title: "Événement déclenché",
      description: "Une action se produit dans l'application source (ex: nouvelle commande)",
      color: "text-accent",
    },
    {
      icon: Send,
      title: "Envoi du Payload",
      description: "Un message HTTP POST contenant les données est envoyé vers l'URL cible",
      color: "text-primary",
    },
    {
      icon: CheckCircle,
      title: "Traitement",
      description: "L'application réceptrice traite les données et effectue les actions nécessaires",
      color: "text-success",
    },
  ];

  return (
    <section id="introduction" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Qu'est-ce qu'un{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Webhook
              </span>{" "}
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un webhook est un mécanisme qui permet à une application d'envoyer 
              automatiquement des données à une autre application en temps réel 
              lorsqu'un événement spécifique se produit.
            </p>
          </div>

          {/* Main Explanation Card */}
          <Card className="mb-12 overflow-hidden border-2 shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Le principe fondamental
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Imaginez un webhook comme un <strong className="text-foreground">système de notification automatique</strong>. 
                    Au lieu de vérifier constamment si quelque chose a changé, 
                    l'application vous <strong className="text-foreground">prévient directement</strong> quand c'est le cas.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    C'est comme avoir un facteur qui sonne à votre porte quand 
                    vous recevez du courrier, plutôt que de vérifier votre boîte 
                    aux lettres toutes les 5 minutes.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={webhookFlowImage}
                    alt="Schéma du flux webhook"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-10">
              Comment ça fonctionne ?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 animate-scale-in border-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-primary`}>
                        <step.icon className={`h-6 w-6 text-primary-foreground`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-primary">ÉTAPE {index + 1}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual Example */}
          <Card className="overflow-hidden border-2 shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Exemple visuel du processus
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg max-w-3xl mx-auto">
                <img
                  src={webhookProcessImage}
                  alt="Processus détaillé des webhooks"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
