
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-12">
          We'd love to hear from you. Get in touch with our team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <div className="mb-8 bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@velocitamoto.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      123 Bike Street, Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 bg-primary/10 p-2 rounded-full">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-muted-foreground">Mon-Sat: 10am - 7pm</p>
                    <p className="text-muted-foreground">Sun: 11am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Showroom Locations</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Mumbai (Flagship)</h3>
                  <p className="text-muted-foreground">
                    123 Bike Street, Mumbai, Maharashtra 400001
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Delhi</h3>
                  <p className="text-muted-foreground">
                    456 Moto Avenue, Delhi 110001
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Bangalore</h3>
                  <p className="text-muted-foreground">
                    789 Speed Road, Bangalore, Karnataka 560001
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 9876543210"
                      value={formState.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Product Inquiry"
                      value={formState.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4 space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-6 bg-muted rounded-lg overflow-hidden h-80">
              <div className="w-full h-full flex items-center justify-center bg-accent text-accent-foreground">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2 opacity-50" />
                  <p>Map location would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, bank transfers, and financing options. For high-value purchases, we also offer specialized motorcycle financing with competitive rates.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                Do you offer test rides?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer test rides on most of our motorcycles. You'll need to bring a valid motorcycle license, proper riding gear, and schedule an appointment in advance.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                What is your delivery policy?
              </h3>
              <p className="text-muted-foreground">
                We offer free delivery across India for all motorcycle purchases. Delivery times typically range from 3-10 business days depending on your location.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">
                Do you accept trade-ins?
              </h3>
              <p className="text-muted-foreground">
                Yes, we accept trade-ins of premium motorcycles in good condition. Our experts will evaluate your motorcycle and provide a fair offer that can be applied toward your new purchase.
              </p>
            </div>
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
                <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                <li><a href="/products" className="text-muted-foreground hover:text-foreground transition-colors">Motorcycles</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
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
