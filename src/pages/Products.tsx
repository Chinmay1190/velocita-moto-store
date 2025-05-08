
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { brands, categories, allProducts, Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, SortAsc, X, ChevronDown, ChevronUp } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showInStock, setShowInStock] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  // Min & Max prices from all products
  const maxPrice = Math.max(...allProducts.map(p => p.price));
  const minPrice = Math.min(...allProducts.map(p => p.price));
  
  // Initialize filter state from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const brandParam = searchParams.get("brand");
    const inStockParam = searchParams.get("inStock");
    const sortParam = searchParams.get("sort") || "featured";
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    if (brandParam) {
      setSelectedBrands([brandParam]);
    }
    
    if (inStockParam === "true") {
      setShowInStock(true);
    }
    
    setSortOrder(sortParam);
  }, [searchParams]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...allProducts];
    
    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }
    
    // Brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // In-stock filter
    if (showInStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Apply sorting
    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => {
          if (a.featured === b.featured) return 0;
          return a.featured ? -1 : 1;
        });
    }
    
    setFilteredProducts(result);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedCategories.length === 1) {
      params.set("category", selectedCategories[0]);
    }
    if (selectedBrands.length === 1) {
      params.set("brand", selectedBrands[0]);
    }
    if (showInStock) {
      params.set("inStock", "true");
    }
    if (sortOrder !== "featured") {
      params.set("sort", sortOrder);
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategories, selectedBrands, priceRange, showInStock, sortOrder, setSearchParams]);
  
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
  
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };
  
  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([minPrice, maxPrice]);
    setShowInStock(false);
    setSortOrder("featured");
    setSearchParams({});
  };
  
  const formatIndianRupees = (value: number) => {
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const [expandedCategories, setExpandedCategories] = useState(true);
  const [expandedBrands, setExpandedBrands] = useState(true);
  const [expandedPrice, setExpandedPrice] = useState(true);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container pt-28 pb-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Superbikes Collection</h1>
          <p className="text-muted-foreground">
            Discover our premium collection of high-performance motorcycles
          </p>
        </div>
        
        {/* Mobile Filters Button */}
        <div className="md:hidden mb-4">
          <Button 
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="w-full"
            variant="outline"
          >
            <Filter className="mr-2 h-4 w-4" /> 
            {filtersOpen ? "Hide Filters" : "Show Filters"}
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-card rounded-lg border p-4 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold">Filters</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-xs"
                >
                  Reset
                </Button>
              </div>
              
              {/* Categories filter */}
              <div className="border-b pb-4 mb-4">
                <div 
                  className="flex justify-between items-center mb-2 cursor-pointer"
                  onClick={() => setExpandedCategories(!expandedCategories)}
                >
                  <h3 className="font-medium">Categories</h3>
                  {expandedCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {expandedCategories && (
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Brands filter */}
              <div className="border-b pb-4 mb-4">
                <div 
                  className="flex justify-between items-center mb-2 cursor-pointer"
                  onClick={() => setExpandedBrands(!expandedBrands)}
                >
                  <h3 className="font-medium">Brands</h3>
                  {expandedBrands ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {expandedBrands && (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <label
                          htmlFor={`brand-${brand}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price Range filter */}
              <div className="border-b pb-4 mb-4">
                <div 
                  className="flex justify-between items-center mb-3 cursor-pointer"
                  onClick={() => setExpandedPrice(!expandedPrice)}
                >
                  <h3 className="font-medium">Price Range</h3>
                  {expandedPrice ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                {expandedPrice && (
                  <>
                    <div className="mb-6">
                      <Slider
                        defaultValue={[minPrice, maxPrice]}
                        min={minPrice}
                        max={maxPrice}
                        step={50000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange(value)}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{formatIndianRupees(priceRange[0])}</span>
                      <span>{formatIndianRupees(priceRange[1])}</span>
                    </div>
                  </>
                )}
              </div>
              
              {/* Availability filter */}
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="in-stock"
                    checked={showInStock}
                    onCheckedChange={() => setShowInStock(prev => !prev)}
                  />
                  <label
                    htmlFor="in-stock"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    In Stock Only
                  </label>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6 bg-card p-3 rounded-lg border">
              <div className="text-sm font-medium">
                {filteredProducts.length} products
              </div>
              <div className="flex items-center space-x-2">
                <label htmlFor="sort" className="text-sm mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="bg-background border rounded-md p-2 text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </div>
            </div>
            
            {/* Active Filters */}
            {(selectedCategories.length > 0 || selectedBrands.length > 0 || showInStock) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCategories.map(category => (
                  <div 
                    key={category}
                    className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    {category}
                    <button onClick={() => toggleCategory(category)} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {selectedBrands.map(brand => (
                  <div 
                    key={brand}
                    className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    {brand}
                    <button onClick={() => toggleBrand(brand)} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {showInStock && (
                  <div 
                    className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full flex items-center"
                  >
                    In Stock
                    <button onClick={() => setShowInStock(false)} className="ml-2">
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">No products match your filters</p>
                <Button onClick={resetFilters}>Clear Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
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
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.slice(0, 4).map(category => (
                  <li key={category}>
                    <a 
                      href={`/products?category=${category}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {category}
                    </a>
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
