import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
	{
		period: "2025",
		school: "Orange Digital Center",
		degree: "Formation en cours",
		field: "Développement Web/Mobile",
	},
	{
		period: "2023 - 2024",
		school: "UNIPRO / UNIVERS PROFESSIONNEL",
		degree: "Licence 3",
		field: "Développement web",
	},
	{
		period: "2022 - 2023",
		school: "UNIPRO / UNIVERS PROFESSIONNEL",
		degree: "Licence 2",
		field: "Génie Informatique",
	},
	{
		period: "2021 - 2022",
		school: "UNIPRO / UNIVERS PROFESSIONNEL",
		degree: "Licence 1",
		field: "Génie Informatique",
	},
	{
		period: "2020 - 2021",
		school: "Université Cheikh Anta Diop, Dakar",
		degree: "Licence 2",
		field: "Physique Chimie et Science de la matière",
	},
	{
		period: "2018 - 2019",
		school: "Lycée Ababacar Sy de Tivaouane",
		degree: "Baccalauréat",
		field: "Série S2",
	},
];

const Education = () => {
	const university = education.filter(
		edu =>
			edu.school.includes("UNIPRO") ||
			edu.school.includes("Université") ||
			edu.school.includes("Orange")
	);
	const highschool = education.filter(edu => edu.school.includes("Lycée"));

	return (
		<div className="min-h-screen p-8">
			<div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
						Formation Académique
					</h1>
					<div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
				</div>

				<Tabs defaultValue="all" className="w-full">
					<TabsList className="grid w-full grid-cols-3 mb-8">
						<TabsTrigger value="all" className="text-base">
							<BookOpen className="h-4 w-4 mr-2" />
							Tout
						</TabsTrigger>
						<TabsTrigger value="university" className="text-base">
							<GraduationCap className="h-4 w-4 mr-2" />
							Supérieur
						</TabsTrigger>
						<TabsTrigger value="high-school" className="text-base">
							<Award className="h-4 w-4 mr-2" />
							Secondaire
						</TabsTrigger>
					</TabsList>

					<TabsContent value="all" className="space-y-6">
						{education.map((edu, index) => (
							<Card
								key={index}
								className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
							>
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
											<GraduationCap className="h-7 w-7 text-primary" />
										</div>
									</div>
									<div className="flex-1 space-y-2">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
											<h3 className="text-xl font-semibold text-foreground">
												{edu.degree} - {edu.field}
											</h3>
											<span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
												{edu.period}
											</span>
										</div>
										<p className="text-lg text-muted-foreground font-medium">
											{edu.school}
										</p>
									</div>
								</div>
							</Card>
						))}
					</TabsContent>

					<TabsContent value="university" className="space-y-6">
						{university.map((edu, index) => (
							<Card
								key={index}
								className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
							>
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
											<GraduationCap className="h-7 w-7 text-primary" />
										</div>
									</div>
									<div className="flex-1 space-y-2">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
											<h3 className="text-xl font-semibold text-foreground">
												{edu.degree} - {edu.field}
											</h3>
											<span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
												{edu.period}
											</span>
										</div>
										<p className="text-lg text-muted-foreground font-medium">
											{edu.school}
										</p>
									</div>
								</div>
							</Card>
						))}
					</TabsContent>

					<TabsContent value="high-school" className="space-y-6">
						{highschool.map((edu, index) => (
							<Card
								key={index}
								className="p-6 hover-lift border-2 hover:border-primary/50 transition-all"
							>
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
											<Award className="h-7 w-7 text-primary" />
										</div>
									</div>
									<div className="flex-1 space-y-2">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
											<h3 className="text-xl font-semibold text-foreground">
												{edu.degree} - {edu.field}
											</h3>
											<span className="px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm">
												{edu.period}
											</span>
										</div>
										<p className="text-lg text-muted-foreground font-medium">
											{edu.school}
										</p>
									</div>
								</div>
							</Card>
						))}
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
};

export default Education;
