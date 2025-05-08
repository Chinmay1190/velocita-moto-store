
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "./CartProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/lib/data";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-background/95 backdrop-blur-md shadow-md py-2"
      : "bg-transparent py-4"
  }`;

  return (
    <header className={navClasses}>
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-primary tracking-tight flex items-center"
        >
          <span className="mr-1">VELOCITA</span>
          <span className="text-sm font-light tracking-widest">MOTO</span>
        </Link>

        {!isMobile && (
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-primary transition-colors">
              Motorcycles
            </Link>
            <div className="group relative">
              <span className="font-medium hover:text-primary transition-colors cursor-pointer">
                Categories
              </span>
              <div className="absolute left-0 top-full mt-2 w-52 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2 space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/products?category=${category}`}
                      className="block px-4 py-2 hover:bg-accent rounded-md transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        )}

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          
          <ThemeToggle />
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="font-medium text-lg hover:text-primary transition-colors">
                    Home
                  </Link>
                  <Link to="/products" className="font-medium text-lg hover:text-primary transition-colors">
                    Motorcycles
                  </Link>
                  <div className="space-y-2">
                    <p className="font-medium text-lg">Categories</p>
                    <div className="pl-4 space-y-2">
                      {categories.map((category) => (
                        <Link
                          key={category}
                          to={`/products?category=${category}`}
                          className="block hover:text-primary transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link to="/about" className="font-medium text-lg hover:text-primary transition-colors">
                    About
                  </Link>
                  <Link to="/contact" className="font-medium text-lg hover:text-primary transition-colors">
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
