
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { allProducts, formatPrice } from "@/lib/data";
import { useCart } from "@/components/CartProvider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ShoppingCart, Heart, Share2, ArrowLeft, Check, AlertTriangle } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = allProducts.find(p => p.id === id);
  const { addItem } = useCart();
  
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors[0] || ""
  );
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container pt-28 pb-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you are looking for does not exist or has been removed.
            </p>
            <Button onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container pt-28 pb-16">
        {/* Back button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border bg-accent/20">
              <img
                src={product.images[currentImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`aspect-square cursor-pointer rounded-md overflow-hidden border ${
                    currentImage === idx
                      ? "ring-2 ring-primary"
                      : "hover:opacity-80"
                  }`}
                  onClick={() => setCurrentImage(idx)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{product.brand}</div>
                <div className="flex gap-1">
                  {product.featured && <Badge className="bg-bike-red text-white">Featured</Badge>}
                  {product.new && <Badge variant="secondary">New</Badge>}
                </div>
              </div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-baseline gap-2">
                {product.discountedPrice ? (
                  <>
                    <div className="text-2xl font-bold">
                      {formatPrice(product.discountedPrice)}
                    </div>
                    <div className="text-muted-foreground line-through">
                      {formatPrice(product.price)}
                    </div>
                    <Badge variant="outline" className="bg-secondary text-secondary-foreground ml-2">
                      {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                    </Badge>
                  </>
                ) : (
                  <div className="text-2xl font-bold">
                    {formatPrice(product.price)}
                  </div>
                )}
              </div>
              
              <div className="pt-2">
                {product.inStock ? (
                  <Badge variant="outline" className="flex items-center gap-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 border-green-200 dark:border-green-800">
                    <Check className="h-3.5 w-3.5" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="flex items-center gap-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 border-red-200 dark:border-red-800">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Out of Stock
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map(color => (
                  <div
                    key={color}
                    className={`border rounded-md px-3 py-1 cursor-pointer transition-all ${
                      selectedColor === color
                        ? "border-primary bg-primary/10"
                        : "hover:border-muted-foreground"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
            
            {/* Product details tabs */}
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
                <TabsTrigger value="delivery" className="flex-1">Delivery & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="specs" className="pt-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Engine</div>
                    <div>{product.specifications.engine}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Power</div>
                    <div>{product.specifications.power}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Torque</div>
                    <div>{product.specifications.torque}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Transmission</div>
                    <div>{product.specifications.transmission}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Top Speed</div>
                    <div>{product.specifications.topSpeed}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Weight</div>
                    <div>{product.specifications.weight}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Fuel Capacity</div>
                    <div>{product.specifications.fuelCapacity}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-muted-foreground">Seat Height</div>
                    <div>{product.specifications.seatHeight}</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="delivery" className="pt-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Delivery Information</h4>
                    <p className="text-muted-foreground mb-2">
                      Free delivery across India for all motorcycles. Delivery time is typically 3-10 business days, depending on your location.
                    </p>
                    <p className="text-muted-foreground">
                      All motorcycles are delivered fully assembled and ready to ride after registration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Return Policy</h4>
                    <p className="text-muted-foreground">
                      We offer a 7-day inspection period. If you're not satisfied with your purchase, you can return the motorcycle in its original condition for a full refund (excluding delivery charges).
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
