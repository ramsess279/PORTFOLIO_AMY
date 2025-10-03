import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "amycollendiaye103@gmail.com",
		href: "mailto:amycollendiaye103@gmail.com",
	},
	{
		icon: Phone,
		label: "Téléphone",
		value: "+221 78 103 08 48",
		href: "tel:+221781030848",
	},
	{
		icon: MapPin,
		label: "Localisation",
		value: "Colobane, Dakar, Sénégal",
		href: null,
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		value: "Ndiaye Amy Colle",
		href: "https://www.linkedin.com/in/ndiaye-amy-colle-2832522b0/",
	},
];

const Contact = () => {
	return (
		<div className="min-h-screen p-8">
			<div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
						Me Contacter
					</h1>
					<div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
				</div>

				<Card className="p-8 hover-lift">
					<div className="space-y-8">
						<p className="text-lg text-muted-foreground leading-relaxed">
							N'hésitez pas à me contacter pour discuter de vos projets ou
							opportunités de collaboration. Je suis toujours ouverte aux nouvelles
							opportunités et défis intéressants.
						</p>

						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className="flex items-center gap-4 group"
								>
									<div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
										<info.icon className="h-6 w-6" />
									</div>
									<div className="flex-1">
										<p className="text-sm text-muted-foreground">
											{info.label}
										</p>
										{info.href ? (
											<a
												href={info.href}
												className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all"
												style={{ wordBreak: 'break-all' }}
											>
												{info.value}
											</a>
										) : (
											<p className="text-lg font-medium text-foreground break-all" style={{ wordBreak: 'break-all' }}>
												{info.value}
											</p>
										)}
									</div>
								</div>
							))}
						</div>

						<div className="pt-6 border-t border-border">
							<p className="text-sm text-muted-foreground mb-4">
								Disponible pour :
							</p>
							<div className="flex flex-wrap gap-3">
								<span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
									Développement Fullstack
								</span>
								<span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
									Projets Web
								</span>
								<span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
									Collaboration à distance
								</span>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Contact;
