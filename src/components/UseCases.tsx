import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Mail, ShoppingCart, Users, Workflow, MessageSquare } from "lucide-react";
import webhookBenefitsImage from "@/assets/webhook-benefits.jpeg";

const UseCases = () => {
  const useCases = [
    {
      icon: CreditCard,
      title: "Paiements en ligne",
      description: "Notification immédiate lors de paiements réussis, échoués ou remboursements",
      examples: ["Stripe", "PayPal", "Mollie"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Synchronisation des commandes, stocks et statuts de livraison en temps réel",
      examples: ["Shopify", "WooCommerce", "Magento"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: Mail,
      title: "Automatisation marketing",
      description: "Déclenchement d'emails automatiques et suivi des interactions utilisateur",
      examples: ["Mailchimp", "SendGrid", "HubSpot"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Users,
      title: "Gestion d'utilisateurs",
      description: "Synchronisation des inscriptions, connexions et modifications de profil",
      examples: ["Auth0", "Okta", "Firebase"],
      color: "bg-success/10 text-success",
    },
    {
      icon: Workflow,
      title: "Intégrations SaaS",
      description: "Connexion entre différentes applications pour automatiser les workflows",
      examples: ["Zapier", "Make", "n8n"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Notifications de nouveaux messages, mentions ou mises à jour de statut",
      examples: ["Slack", "Discord", "Teams"],
      color: "bg-secondary/10 text-secondary",
    },
  ];

  return (
    <section id="usecases" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Cas d'
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Utilisation
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Les webhooks sont utilisés dans de nombreux domaines pour automatiser 
              les processus et créer des intégrations puissantes
            </p>
          </div>

          {/* Benefits Visual */}
          <Card className="mb-16 overflow-hidden border-2 shadow-card animate-fade-in-up">
            
          </Card>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="border-2 hover:shadow-lg transition-all duration-300 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${useCase.color} flex items-center justify-center mb-4`}>
                    <useCase.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.examples.map((example, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Real World Examples */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 shadow-card animate-slide-in-left">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Exemple : E-commerce</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2 text-primary">Scénario</p>
                    <p className="text-sm text-muted-foreground">
                      Un client passe une commande sur votre boutique en ligne
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2 text-secondary">Actions automatiques</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Email de confirmation au client</li>
                      <li>• Mise à jour du stock automatique</li>
                      <li>• Notification à l'équipe logistique</li>
                      <li>• Génération de la facture</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 shadow-card animate-slide-in-right">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <CreditCard className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Exemple : Paiement</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2 text-primary">Scénario</p>
                    <p className="text-sm text-muted-foreground">
                      Un paiement est traité via Stripe
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium mb-2 text-secondary">Actions automatiques</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Confirmation du paiement en temps réel</li>
                      <li>• Activation du compte utilisateur</li>
                      <li>• Envoi des accès au service</li>
                      <li>• Mise à jour de la comptabilité</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
