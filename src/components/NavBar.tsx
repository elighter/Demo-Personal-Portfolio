import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "./ui/navigation-menu";

interface NavBarProps {
  onNavigate?: (section: string) => void;
  isFloating?: boolean;
}

const NavBar = ({ onNavigate = () => {}, isFloating = false }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", section: "home" },
    { label: "Projects", section: "projects" },
    { label: "Awards", section: "awards" },
    { label: "Leadership", section: "leadership" },
    { label: "Contact", section: "contact" },
  ];

  const navClasses = `
    w-full h-20 px-6 
    ${isFloating ? "fixed top-0 left-0 z-50" : "relative"}
    ${isScrolled ? "bg-[#0A192F]/95 backdrop-blur-sm shadow-lg" : "bg-[#0A192F]"}
    transition-all duration-300
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <div className="text-[#00A3FF] text-2xl font-bold">Jacob.</div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.section}>
                  <Button
                    variant="link"
                    className="text-gray-300 hover:text-[#00A3FF]"
                    onClick={() => onNavigate(item.section)}
                  >
                    {item.label}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-[#00A3FF]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0A192F] border-t border-[#112240]">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                className="w-full text-left text-gray-300 hover:text-[#00A3FF]"
                onClick={() => {
                  onNavigate(item.section);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
