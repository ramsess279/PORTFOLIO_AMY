import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Wrench, Users, Globe } from "lucide-react";

const skillCategories = [
	{
		title: "Langages de programmation",
		icon: Code,
		skills: ["C", "Java", "PHP", "JavaScript", "TypeScript"],
	},
	{
		title: "Développement web",
		icon: Code,
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"Node.js",
			"Express.js",
			"React.js",
			"Tailwind CSS",
			"Prisma",
			"Zod",
			"WordPress",
		],
	},
	{
		title: "Outils & environnements",
		icon: Wrench,
		skills: [
			"Git",
			"GitHub",
			"UML",
			"Figma",
			"Visual Studio Code",
			"PowerAMC",
			"Docker",
			"Canva",
			"Adobe Illustrator",
			"JSON Server",
			"Mermaid",
			"StartUml",
		],
	},
	{
		title: "Bases de données",
		icon: Database,
		skills: ["MySQL", "PostgreSQL"],
	},
	{
		title: "Autres compétences",
		icon: Code,
		skills: ["API REST", "MVC"],
	},
];

const softSkills = [
	{
		title: "Compétences transversales",
		icon: Users,
		skills: [
			"Travail en équipe",
			"Adaptabilité",
			"Gestion du temps",
			"Curiosité technologique",
		],
	},
];

const Skills = () => {
	return (
		<div className="min-h-screen p-8">
			<div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
						Compétences Techniques
					</h1>
					<div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
				</div>

				<Tabs defaultValue="technical" className="w-full">
					<TabsList className="flex flex-wrap justify-center gap-4 mb-8">
						<TabsTrigger value="technical" className="text-base">
							<Code className="h-4 w-4 mr-2" />
							Techniques
						</TabsTrigger>
						<TabsTrigger value="soft" className="text-base">
							<Users className="h-4 w-4 mr-2" />
							Transversales
						</TabsTrigger>
					</TabsList>

					<TabsContent value="technical" className="space-y-8">
						<div className="grid md:grid-cols-3 gap-6">
							{skillCategories.slice(0, 3).map((category, index) => (
								<Card
									key={index}
									className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
								>
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
												<category.icon className="h-5 w-5 text-primary" />
											</div>
											<h3 className="text-base font-semibold text-foreground">
												{category.title}
											</h3>
										</div>
										<div className="flex flex-wrap gap-2">
											{category.skills.map((skill, skillIndex) => (
												<span
													key={skillIndex}
													className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</Card>
							))}
							{/* Bases de données et Autres compétences sur la même ligne */}
							<div className="flex flex-col md:flex-row gap-6 md:col-span-3">
								{[skillCategories[3], skillCategories[4]].map((category, index) => (
									<Card
										key={category.title}
										className="flex-1 p-6 hover-lift border-2 hover:border-primary/50 transition-all"
									>
										<div className="space-y-4">
											<div className="flex items-center gap-3">
												<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
													<category.icon className="h-5 w-5 text-primary" />
												</div>
												<h3 className="text-base font-semibold text-foreground">
													{category.title}
												</h3>
											</div>
											<div className="flex flex-wrap gap-2">
												{category.skills.map((skill, skillIndex) => (
													<span
														key={skillIndex}
														className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
													>
														{skill}
													</span>
												))}
											</div>
										</div>
									</Card>
								))}
							</div>
						</div>
						<div className="grid md:grid-cols-2 gap-6">
							{skillCategories.slice(5).map((category, index) => (
								<Card
									key={index}
									className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
								>
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
												<category.icon className="h-5 w-5 text-primary" />
											</div>
											<h3 className="text-lg font-semibold text-foreground">
												{category.title}
											</h3>
										</div>
										<div className="flex flex-wrap gap-2">
											{category.skills.map((skill, skillIndex) => (
												<span
													key={skillIndex}
													className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</Card>
							))}
						</div>
					</TabsContent>

					<TabsContent value="soft" className="space-y-8">
						<div className="grid md:grid-cols-2 gap-6">
							{softSkills.map((category, index) => (
								<Card
									key={index}
									className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
								>
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
												<category.icon className="h-5 w-5 text-primary" />
											</div>
											<h3 className="text-lg font-semibold text-foreground">
												{category.title}
											</h3>
										</div>
										<div className="flex flex-wrap gap-2">
											{category.skills.map((skill, skillIndex) => (
												<span
													key={skillIndex}
													className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default shadow-sm"
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Skills;
