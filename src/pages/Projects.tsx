import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "OMPAY_API",
    url: "https://github.com/amycollendiaye/OMPAY",
    description: "Application de paiement mobile utilisant flutter pour le front-end, php laravel pour le back-end et postgres pour la base de données.",
    technologies: ["flutter", "php/laravel.js", "postgres","docker"],
  },
  {
    name: "projetmaxit",
    url: "https://github.com/amycollendiaye/projetmaxit.git",
    description: "Projet de maximisation, utilisant php et prostgres.",
    technologies: ["php",  "postgres", 'docker'],
  },
  {
    name: "watshapp_Projet",
    url: "https://github.com/amycollendiaye/watshapp_Projet.git",
    description: "Application de messagerie comme WhatsApp, utilisant javascript, vite  et mysql.",
    technologies: [" javascript vanilla ", "vite",  "mysql"],
  },
  {
    name: "front-console-ompay-dart",
    url: "https://github.com/amycollendiaye/front-console-ompay-dart.git",
    description: "Console front-end pour OMPAY en Dart, utilisant Flutter.",
    technologies: ["Dart", "Flutter"],
  },
  {
    name: "gestionapprenants",
    url: "https://github.com/amycollendiaye/gestionapprenants.git",
    description: "Système de gestion des apprenants utilisant php fonctionnel et jsonserver.",
    technologies: ["php fonctionnelle", "jsonserver"],
  },
  {
    name: "projethtmlcss",
    url: "https://github.com/amycollendiaye/projethtlmcss.git",
    description: "un projet   pour apprendre les  balises html et  les proprietes css les  transitions et aminations.",
    technologies: ["html","css"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Mes Projets
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Voir sur GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;