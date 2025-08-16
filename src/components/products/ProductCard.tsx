'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Wishlist Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
      >
        <Heart
          className={`h-5 w-5 ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`}
        />
      </button>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10 px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      <Link href={`/producto/${product.id}`} className="block relative aspect-square">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link href={`/producto/${product.id}`} className="block">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            {product.name}
          </h3>
        </Link>

        {/* Seller Info */}
        <p className="text-xs text-gray-500 mb-2">{product.seller.name}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          {product.discountPrice ? (
            <>
              <span className="text-lg font-semibold text-gray-900">
                ${product.discountPrice.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500 line-through">
                ${product.price.toLocaleString()}
              </span>
            </>
          ) : (
            <span className="text-lg font-semibold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`w-full py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            isHovered
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="font-medium">Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 