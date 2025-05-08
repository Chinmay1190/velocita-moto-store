
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/data";
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, subtotal, shipping, total } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/checkout-success");
      
      toast({
        title: "Order placed successfully!",
        description: "Your order has been placed and is being processed.",
      });
    }, 2000);
  };
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-28 pb-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <ShoppingCart size={64} className="mx-auto text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any motorcycles to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container pt-28 pb-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Button variant="outline" size="sm" onClick={clearCart}>
            Clear Cart
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.color}`}
                className="border rounded-lg p-4 bg-card flex flex-col sm:flex-row gap-4"
              >
                <div className="sm:w-1/4">
                  <img
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    className="aspect-[4/3] object-cover rounded-md w-full"
                  />
                </div>
                <div className="sm:w-3/4 flex flex-col sm:flex-row justify-between flex-1">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Brand: {item.product.brand} | Color: {item.color}
                    </p>
                    <p className="font-medium">
                      {formatPrice(item.product.discountedPrice || item.product.price)}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
              <Button
                variant="outline"
                className="flex items-center"
                asChild
              >
                <Link to="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-lg p-6 sticky top-28">
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              <Button
                className="w-full"
                size="lg"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Proceed to Checkout"}
              </Button>
              
              <div className="mt-4 text-xs text-center text-muted-foreground">
                <p>Taxes calculated at checkout</p>
                <p className="mt-1">Secure checkout powered by Razorpay</p>
              </div>
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
