import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  // Désactivation du bouton (toujours sombre)
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-accent cursor-not-allowed opacity-50"
      disabled
      aria-label="Thème sombre uniquement"
    >
      <Moon className="h-5 w-5 text-primary" />
    </Button>
  );
};
