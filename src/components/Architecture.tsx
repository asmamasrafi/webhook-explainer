import { Card, CardContent } from "@/components/ui/card";
import { Server, Globe, Lock, Database, ArrowRight } from "lucide-react";

const Architecture = () => {
  const components = [
    {
      icon: Server,
      title: "Application Émettrice",
      description: "L'application qui génère l'événement et envoie le webhook",
      details: ["Détecte les événements", "Prépare le payload", "Envoie la requête HTTP POST"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Globe,
      title: "URL de Réception",
      description: "L'endpoint HTTP qui reçoit les données du webhook",
      details: ["Doit être publiquement accessible", "Format: https://votreapp.com/webhook", "Peut nécessiter une authentification"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Lock,
      title: "Sécurité & Authentification",
      description: "Mécanismes pour garantir l'authenticité des webhooks",
      details: ["Signature HMAC", "Tokens secrets", "Vérification d'origine"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Database,
      title: "Application Réceptrice",
      description: "L'application qui traite les données reçues",
      details: ["Valide le payload", "Traite les données", "Retourne un code HTTP 200"],
      color: "bg-success/10 text-success",
    },
  ];

  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Architecture d'un{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Webhook
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez les composants clés et leur interaction dans un système de webhooks
            </p>
          </div>

          {/* Visual Flow Diagram */}
          <div className="mb-16 animate-fade-in-up">
            <Card className="overflow-hidden border-2 shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  {/* Step 1 */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Server className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Événement</h4>
                    <p className="text-sm text-muted-foreground">Déclenchement</p>
                  </div>

                  <ArrowRight className="h-8 w-8 text-primary hidden md:block" />

                  {/* Step 2 */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Database className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Payload</h4>
                    <p className="text-sm text-muted-foreground">Données JSON</p>
                  </div>

                  <ArrowRight className="h-8 w-8 text-primary hidden md:block" />

                  {/* Step 3 */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Globe className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">HTTP POST</h4>
                    <p className="text-sm text-muted-foreground">Vers l'URL cible</p>
                  </div>

                  <ArrowRight className="h-8 w-8 text-primary hidden md:block" />

                  {/* Step 4 */}
                  <div className="flex-1 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Lock className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold mb-2">Réponse</h4>
                    <p className="text-sm text-muted-foreground">Code 200 OK</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Component Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {components.map((component, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${component.color}`}>
                      <component.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{component.description}</p>
                      <ul className="space-y-2">
                        {component.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Payload Example */}
          <Card className="mt-12 overflow-hidden border-2 shadow-card animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Exemple de Payload</h3>
              <p className="text-muted-foreground mb-6">
                Voici à quoi ressemble un payload webhook typique envoyé en JSON :
              </p>
              <div className="bg-muted/50 rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-foreground">
{`{
  "event": "order.shipped",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "order_id": "ORD-12345",
    "customer": {
      "id": "CUST-789",
      "email": "client@example.com"
    },
    "items": [
      {
        "product_id": "PROD-456",
        "quantity": 2,
        "price": 49.99
      }
    ],
    "status": "shipped",
    "tracking_number": "TRK-ABC123"
  }
}`}
                  </code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
