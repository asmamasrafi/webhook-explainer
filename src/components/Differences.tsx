import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, RefreshCw, Zap, TrendingDown, TrendingUp } from "lucide-react";
import pollingVsWebhookImage from "@/assets/polling-vs-webhook.jpeg";

const Differences = () => {
  const comparisonData = [
    {
      feature: "Mode de communication",
      api: "Le client demande (Pull)",
      webhook: "Le serveur notifie (Push)",
    },
    {
      feature: "Fréquence",
      api: "Requêtes régulières (polling)",
      webhook: "Uniquement lors d'événements",
    },
    {
      feature: "Latence",
      api: "Délai entre les requêtes",
      webhook: "Temps réel instantané",
    },
    {
      feature: "Efficacité réseau",
      api: "Requêtes souvent inutiles",
      webhook: "Optimisé et ciblé",
    },
    {
      feature: "Charge serveur",
      api: "Élevée (polling constant)",
      webhook: "Réduite (événementiel)",
    },
    {
      feature: "Configuration",
      api: "Simple à implémenter",
      webhook: "Nécessite une URL publique",
    },
  ];

  return (
    <section id="differences" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Webhook vs{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                API
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprendre la différence fondamentale entre ces deux modes de communication
            </p>
          </div>

          {/* Visual Comparison */}
          <Card className="mb-12 overflow-hidden border-2 shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={pollingVsWebhookImage}
                  alt="Comparaison entre Polling avec APIs et Webhooks"
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          {/* Concept Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* API Card */}
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-slide-in-left shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <RefreshCw className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">API (Polling)</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Le client envoie des <strong className="text-foreground">requêtes répétées</strong> au serveur 
                  pour vérifier s'il y a de nouvelles données. Comme vérifier votre boîte aux lettres 
                  toutes les heures.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingDown className="h-4 w-4 text-destructive" />
                    <span>Consomme plus de ressources</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingDown className="h-4 w-4 text-destructive" />
                    <span>Latence entre les vérifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span>Simple à mettre en place</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Webhook Card */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 animate-slide-in-right shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <Zap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">Webhook</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Le serveur <strong className="text-foreground">envoie automatiquement</strong> les données 
                  dès qu'un événement se produit. Comme recevoir une notification sur votre téléphone.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span>Temps réel et instantané</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span>Économise les ressources</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span>Communication événementielle</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <Card className="overflow-hidden border-2 shadow-card animate-fade-in-up">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-semibold">Caractéristique</th>
                      <th className="text-left p-4 font-semibold text-primary">API (Polling)</th>
                      <th className="text-left p-4 font-semibold text-secondary">Webhook</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr
                        key={index}
                        className="border-t border-border hover:bg-muted/30 transition-colors"
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-muted-foreground">{row.api}</td>
                        <td className="p-4 text-muted-foreground">{row.webhook}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Differences;
