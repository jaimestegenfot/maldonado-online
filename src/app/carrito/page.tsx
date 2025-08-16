'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';

// Datos de ejemplo (esto debería venir de un estado global o API)
const initialCartItems = [
  {
    product: {
      id: '1',
      name: 'Smartphone XYZ Pro Max',
      description: 'El último smartphone con las mejores características del mercado',
      price: 999.99,
      discountPrice: 899.99,
      images: ['/products/phone.jpg'],
      category: 'Electrónicos',
      stock: 50,
      rating: 4.5,
      reviews: 128,
      seller: {
        id: '1',
        name: 'TechStore',
        rating: 4.8,
      },
      specifications: {},
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    quantity: 1,
  },
  {
    product: {
      id: '2',
      name: 'Auriculares Inalámbricos Elite',
      description: 'Auriculares con cancelación de ruido y sonido premium',
      price: 199.99,
      images: ['/products/headphones.jpg'],
      category: 'Electrónicos',
      stock: 75,
      rating: 4.9,
      reviews: 32,
      seller: {
        id: '2',
        name: 'AudioTech',
        rating: 4.9,
      },
      specifications: {},
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    quantity: 2,
  },
];

export default function CarritoPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      (item.product.discountPrice || item.product.price) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-16">
        <div className="flex items-center gap-2 mb-6 sm:mb-8">
          <Link
            href="/"
            className="text-sm sm:text-base text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" />
            Continuar comprando
          </Link>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Carrito de Compras</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8 sm:py-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Agrega algunos productos a tu carrito para comenzar a comprar
            </p>
            <Link
              href="/productos"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {cartItems.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6 border-b border-gray-100 last:border-0"
                  >
                    {/* Imagen del producto */}
                    <div className="relative w-full sm:w-24 h-32 sm:h-24 flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>

                    {/* Información del producto */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4">
                        <div>
                          <Link
                            href={`/producto/${item.product.id}`}
                            className="text-sm sm:text-base font-medium text-gray-900 hover:text-purple-600"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Vendido por {item.product.seller.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="self-start sm:self-center text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-1 rounded-full hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          {item.product.discountPrice ? (
                            <>
                              <span className="text-sm sm:text-base font-semibold text-gray-900">
                                ${(item.product.discountPrice * item.quantity).toLocaleString()}
                              </span>
                              <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">
                                ${(item.product.price * item.quantity).toLocaleString()}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm sm:text-base font-semibold text-gray-900">
                              ${(item.product.price * item.quantity).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 sticky top-24">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  Resumen del Pedido
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-medium">
                      {shipping > 0 ? `$${shipping.toLocaleString()}` : 'Gratis'}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="font-semibold text-gray-900">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Incluye impuestos y envío
                    </p>
                  </div>
                </div>

                <button className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Proceder al Pago
                </button>

                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Métodos de Pago Aceptados
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-10 sm:w-12 h-6 sm:h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">VISA</span>
                    </div>
                    <div className="w-10 sm:w-12 h-6 sm:h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">MC</span>
                    </div>
                    <div className="w-10 sm:w-12 h-6 sm:h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-xs font-medium">AMEX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
} 