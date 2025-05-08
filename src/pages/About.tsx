
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container pt-28 pb-16">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
          <div className="relative z-20 py-24 px-8 md:px-16">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl font-bold mb-4">About Velocita Moto</h1>
              <p className="text-lg mb-6">
                India's premier destination for high-performance motorcycles and superbikes.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll">
              <p className="mb-4">
                Founded in 2015 by a group of passionate motorcycle enthusiasts, Velocita Moto was born out of a shared vision to bring the world's finest superbikes to Indian riders.
              </p>
              <p className="mb-4">
                What started as a small showroom in Mumbai has now grown into India's most prestigious multi-brand superbike dealership with locations across major metropolitan cities.
              </p>
              <p>
                Our commitment to excellence, customer satisfaction, and the motorcycling community has established Velocita Moto as the trusted name in the premium motorcycle segment.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img
                src="/placeholder.svg"
                alt="Velocita Moto Showroom"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="bg-card border rounded-lg p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl italic">
              "To provide motorcycle enthusiasts with access to the world's finest machines, exceptional service, and a community that celebrates the passion for performance and freedom."
            </p>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Velocita Moto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4 text-primary">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Curated Selection</h3>
              <p className="text-muted-foreground">
                We carefully select only the finest motorcycles from prestigious manufacturers around the world, ensuring our customers access to exceptional machines.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4 text-primary">👨‍🔧</div>
              <h3 className="text-lg font-semibold mb-2">Expert Service</h3>
              <p className="text-muted-foreground">
                Our technicians are factory-trained specialists who treat each motorcycle with meticulous care and precision, using only genuine parts and equipment.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="text-4xl mb-4 text-primary">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Beyond being a dealership, we foster a vibrant community of riders through events, group rides, track days, and exclusive membership benefits.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-4 text-center">
              <img
                src="/placeholder.svg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold">Vikram Singh</h3>
              <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
              <p className="text-xs text-muted-foreground">
                Former motorcycle racer with 15+ years in the automotive industry
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4 text-center">
              <img
                src="/placeholder.svg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold">Ananya Patel</h3>
              <p className="text-sm text-muted-foreground mb-2">Head of Operations</p>
              <p className="text-xs text-muted-foreground">
                Motorcycle enthusiast with expertise in luxury retail management
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4 text-center">
              <img
                src="/placeholder.svg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold">Rajiv Mehra</h3>
              <p className="text-sm text-muted-foreground mb-2">Technical Director</p>
              <p className="text-xs text-muted-foreground">
                Master technician with certifications from top motorcycle manufacturers
              </p>
            </div>
            <div className="bg-card border rounded-lg p-4 text-center">
              <img
                src="/placeholder.svg"
                alt="Team Member"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold">Nandini Shah</h3>
              <p className="text-sm text-muted-foreground mb-2">Customer Experience</p>
              <p className="text-xs text-muted-foreground">
                Passionate about creating exceptional journeys for motorcycle enthusiasts
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Ride?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Visit our showroom to experience the thrill of these incredible machines in person, or browse our collection online to find the perfect motorcycle that matches your style and performance needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" asChild>
              <Link to="/products">Browse Motorcycles</Link>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      
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
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Policy</a></li>
                <li><a href="/refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</a></li>
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
