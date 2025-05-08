
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ProductCard";
import { allProducts, categories, formatPrice } from "@/lib/data";
import { ChevronRight, ShieldCheck, Truck, BadgeIndianRupee, Zap } from "lucide-react";

export default function Index() {
  const featuredProducts = allProducts.filter(product => product.featured);
  const newProducts = allProducts.filter(product => product.new);
  const animatedRefs = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    // Animation observer setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, 
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
      animatedRefs.current.push(el as HTMLElement);
    });
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container relative z-20 text-white">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-primary">New 2025 Models Available</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Unleash Your Racing Spirit</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Experience the thrill of precision engineering and cutting-edge design with Velocita's premium superbike collection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/products">Browse Bikes</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <ChevronRight size={30} className="text-white rotate-90" />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Bikes</h2>
            <Button variant="outline" asChild>
              <Link to="/products">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="animate-on-scroll">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link 
                key={category} 
                to={`/products?category=${category}`}
                className="animate-on-scroll bg-card border rounded-lg p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 text-primary">
                  {category === "Sport" && "🏍️"}
                  {category === "Cruiser" && "🛣️"}
                  {category === "Adventure" && "🌍"}
                  {category === "Naked" && "⚡"}
                  {category === "Touring" && "🧳"}
                  {category === "Off-Road" && "🏔️"}
                </div>
                <h3 className="font-semibold">{category}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore {category}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotion Banner */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-on-scroll">
              <h2 className="text-3xl font-bold mb-4">Limited Time Offer</h2>
              <p className="text-xl mb-6">
                Up to 15% off on select models. Free premium accessories package worth ₹25,000.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-12 animate-on-scroll">
              <img
                src="/placeholder.svg"
                alt="Promotion"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* New Arrivals */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Button variant="outline" asChild>
              <Link to="/products?new=true">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="animate-on-scroll">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Velocita</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center animate-on-scroll p-6 rounded-lg bg-card">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <ShieldCheck size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Warranty Protection</h3>
              <p className="text-muted-foreground">
                All bikes come with 3-year manufacturer warranty and roadside assistance.
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-on-scroll p-6 rounded-lg bg-card">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Truck size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-muted-foreground">
                Complimentary delivery to your doorstep across India.
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-on-scroll p-6 rounded-lg bg-card">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <BadgeIndianRupee size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Financing</h3>
              <p className="text-muted-foreground">
                Flexible payment options with competitive interest rates.
              </p>
            </div>
            <div className="flex flex-col items-center text-center animate-on-scroll p-6 rounded-lg bg-card">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Zap size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
              <p className="text-muted-foreground">
                Dedicated customer support and priority servicing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-card py-12 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Velocita Moto</h3>
              <p className="text-muted-foreground mb-4">
                Premium superbike dealership offering the finest motorcycles from around the world.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link to="/products" className="text-muted-foreground hover:text-foreground transition-colors">Motorcycles</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <li key={category}>
                    <Link 
                      to={`/products?category=${category}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="text-muted-foreground not-italic">
                <p>123 Bike Street</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p className="mt-2">contact@velocitamoto.in</p>
                <p>+91 98765 43210</p>
              </address>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Velocita Moto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
