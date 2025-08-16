import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';

// Datos de ejemplo (esto debería venir de una API en producción)
const newProducts: Product[] = [
  {
    id: '1',
    name: 'Smartwatch Pro X',
    description: 'El último smartwatch con monitoreo avanzado de salud',
    price: 299.99,
    images: ['/products/smartwatch.jpg'],
    category: 'Electrónicos',
    stock: 100,
    rating: 4.8,
    reviews: 45,
    seller: {
      id: '1',
      name: 'TechStore',
      rating: 4.8,
    },
    specifications: {
      'Pantalla': '1.4" AMOLED',
      'Batería': '7 días',
      'Resistencia': '5 ATM',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
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
    specifications: {
      'Cancelación de Ruido': 'Activa',
      'Batería': '30 horas',
      'Bluetooth': '5.2',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Agrega más productos nuevos aquí
];

export default function NuevosPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-16">
        {/* Hero Section */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90" />
          <div className="relative px-4 sm:px-8 py-12 sm:py-16 md:py-24 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Nuevos Productos
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Descubre las últimas novedades y tendencias en nuestra selección de productos recién llegados
            </p>
          </div>
        </div>

        {/* Filtros y Ordenamiento */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button className="px-3 sm:px-4 py-2 text-sm rounded-full bg-purple-600 text-white">
              Todos
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-full bg-white text-gray-600 hover:bg-gray-50">
              Electrónicos
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-full bg-white text-gray-600 hover:bg-gray-50">
              Moda
            </button>
            <button className="px-3 sm:px-4 py-2 text-sm rounded-full bg-white text-gray-600 hover:bg-gray-50">
              Hogar
            </button>
          </div>
          
          <select className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option value="recientes">Más recientes</option>
            <option value="precio-asc">Menor precio</option>
            <option value="precio-desc">Mayor precio</option>
            <option value="rating">Mejor valorados</option>
          </select>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 sm:mt-16 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Sé el Primero en Saber
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              Suscríbete para recibir notificaciones sobre nuevos productos y ofertas exclusivas
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-2 sm:py-3 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 sm:py-3 text-sm bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
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