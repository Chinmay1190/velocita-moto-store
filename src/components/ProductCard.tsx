
import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    name,
    brand,
    price,
    discountedPrice,
    images,
    featured,
    new: isNew,
    inStock,
  } = product;

  const discount = discountedPrice
    ? Math.round(((price - discountedPrice) / price) * 100)
    : 0;

  return (
    <Link 
      to={`/product/${id}`}
      className="group block product-card-hover overflow-hidden rounded-lg border bg-card"
    >
      <div className="relative">
        <img
          src={images[0] || "/placeholder.svg"}
          alt={name}
          className="product-img w-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {featured && (
            <Badge className="bg-bike-red text-white">Featured</Badge>
          )}
          {isNew && (
            <Badge variant="secondary">New</Badge>
          )}
          {!inStock && (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
          {discountedPrice && (
            <Badge variant="outline" className="bg-secondary text-secondary-foreground">
              {discount}% OFF
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <div className="text-xs font-medium text-muted-foreground mb-1">
          {brand}
        </div>
        <h3 className="font-semibold text-base md:text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          {discountedPrice ? (
            <>
              <span className="font-bold text-lg">{formatPrice(discountedPrice)}</span>
              <span className="text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="font-bold text-lg">{formatPrice(price)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
