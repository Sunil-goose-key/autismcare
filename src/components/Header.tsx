import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🧩 AutismCare+
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/assessment" className="text-sm font-medium hover:text-primary transition-colors">
            Assessment
          </a>
          <a href="/professionals" className="text-sm font-medium hover:text-primary transition-colors">
            Professionals
          </a>
          <a href="/activities" className="text-sm font-medium hover:text-primary transition-colors">
            Activities
          </a>
          <a href="/community" className="text-sm font-medium hover:text-primary transition-colors">
            Community
          </a>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="default">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
