import { Webhook, Github, BookOpen, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    {
      title: "Ressources",
      items: [
        { label: "Documentation MDN", href: "https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST" },
        { label: "Webhooks.fyi", href: "https://webhooks.fyi/" },
        { label: "Stripe Webhooks", href: "https://stripe.com/docs/webhooks" },
      ],
    },
    {
      title: "Outils",
      items: [
        { label: "Webhook.site", href: "https://webhook.site/" },
        { label: "RequestBin", href: "https://requestbin.com/" },
        { label: "ngrok", href: "https://ngrok.com/" },
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Webhook className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Webhooks
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Un guide complet pour comprendre et maîtriser les webhooks 
              dans le développement web moderne.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://developer.mozilla.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Documentation"
              >
                <BookOpen className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Links */}
          {links.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                    >
                      {item.label}
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Webhooks Guide. Créé avec ❤️ pour les développeurs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
