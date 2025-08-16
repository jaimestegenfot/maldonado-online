import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';

// Datos de ejemplo (esto debería venir de una API en producción)
const discountedProducts: Product[] = [
  {
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
    specifications: {
      'Pantalla': '6.7" OLED',
      'Procesador': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Laptop Ultra Slim',
    description: 'Laptop ultraligera con procesador de última generación',
    price: 1299.99,
    discountPrice: 1099.99,
    images: ['/products/laptop.jpg'],
    category: 'Electrónicos',
    stock: 30,
    rating: 4.7,
    reviews: 89,
    seller: {
      id: '2',
      name: 'TechWorld',
      rating: 4.9,
    },
    specifications: {
      'Pantalla': '14" IPS',
      'Procesador': 'Intel Core i7',
      'RAM': '16GB',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Agrega más productos con descuento aquí
];

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Ofertas Especiales
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Aprovecha los mejores descuentos en productos seleccionados
            </p>
          </div>
          
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-3">
            <select className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Categoría</option>
              <option value="electronicos">Electrónicos</option>
              <option value="moda">Moda</option>
              <option value="hogar">Hogar</option>
            </select>
            <select className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">Ordenar por</option>
              <option value="descuento">Mayor descuento</option>
              <option value="precio-asc">Menor precio</option>
              <option value="precio-desc">Mayor precio</option>
              <option value="rating">Mejor valorados</option>
            </select>
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {discountedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Paginación */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <nav className="flex items-center gap-1 sm:gap-2">
            <button className="px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              Anterior
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-lg bg-purple-600 text-white">
              1
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              Siguiente
            </button>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
} 