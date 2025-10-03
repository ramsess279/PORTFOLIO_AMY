import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pt-16 md:pt-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            À propos de moi
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
        </div>

        <Card className="p-8 hover-lift backdrop-blur-md bg-white/20 border border-white/30 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-white/10 pointer-events-none" />
          <div className="space-y-6 relative z-10 text-white">
            <p className="text-lg leading-relaxed">
              Développeuse Fullstack passionnée, je conçois des applications web complètes, 
              de la structure back-end au design front-end. Maîtrise des langages web 
              (HTML, CSS, JavaScript, PHP) et des outils comme WordPress, Figma et Git.
            </p>
            
            <p className="text-lg leading-relaxed">
              Autonome, curieuse et rigoureuse, je combine compétences techniques et sens 
              du service pour créer des solutions web modernes, fonctionnelles et centrées utilisateur.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Informations</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Âge:</span> 25 ans</p>
                  <p><span className="font-medium">Localisation:</span> Colobane, Dakar, Sénégal</p>
                  <p><span className="font-medium">Email:</span> amycollendiaye103@gmail.com</p>
                  <p><span className="font-medium">Téléphone:</span> +221 78 103 08 48</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary">Langues</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Français:</span> Experte</p>
                  <p><span className="font-medium">Anglais:</span> Intermédiaire</p>
                  <p><span className="font-medium">Wolof:</span> Bilingue</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
