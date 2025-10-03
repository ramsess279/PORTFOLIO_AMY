import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
	{
		period: "Septembre 2024 - Février 2025",
		company: "Kserv - Call Center Sonatel",
		position: "Conseillère Commerciale",
		description: "Gérer les dérangements clients du service 1413",
	},
	{
		period: "Avril 2023 - Mai 2023",
		company: "Tout en génie informatique TGI",
		position: "Développement web - Multimédia",
		description:
			"Développement d'une application de vente de voiture sur WordPress. Initiation aux multimédias avec Adobe Illustrator",
	},
	{
		period: "Avril 2022 - Mai 2022",
		company: "Tout en génie informatique TGI",
		position: "Maintenance informatique",
		description: "Réparation de machine",
	},
];

const Experience = () => {
	return (
		<div className="min-h-screen p-8">
			<div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
				<div className="pt-12 md:pt-20">
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
						Expériences Professionnelles
					</h1>
					<div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
				</div>

				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<Card key={index} className="p-6 hover-lift">
							<div className="flex gap-4">
								<div className="flex-shrink-0">
									<div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
										{/* Icône différente selon le poste */}
										{exp.position.toLowerCase().includes('maintenance') || exp.position.toLowerCase().includes('développement') ? (
											<GraduationCap className="h-6 w-6 text-primary" />
										) : (
											<Briefcase className="h-6 w-6 text-primary" />
										)}
									</div>
								</div>
								<div className="flex-1 space-y-2">
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
										<h3 className="text-xl font-semibold text-foreground">
											{exp.position}
										</h3>
										<span className="text-sm text-primary font-medium">
											{exp.period}
										</span>
									</div>
									<p className="text-lg text-muted-foreground font-medium">
										{exp.company}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
