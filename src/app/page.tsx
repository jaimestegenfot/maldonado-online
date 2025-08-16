import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import ProductCard from '@/components/products/ProductCard';
import { Product } from '@/types';

// Datos de ejemplo (esto debería venir de una API en producción)
const featuredProducts: Product[] = [
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
  // Agrega más productos de ejemplo aquí
];

const categories = [
  {
    id: '1',
    name: 'Electrónicos',
    image: '/categories/electronics.jpg',
    slug: 'electronicos',
  },
  {
    id: '2',
    name: 'Moda',
    image: '/categories/fashion.jpg',
    slug: 'moda',
  },
  {
    id: '3',
    name: 'Hogar',
    image: '/categories/home.jpg',
    slug: 'hogar',
  },
  // Agrega más categorías aquí
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen mt-16">
        <div className="absolute inset-0">
          <Image
            src="https://t4.ftcdn.net/jpg/05/32/25/49/360_F_532254922_8z4kSOcfYHmgbL5MuXouHPRI2LmodXEe.jpg"
            alt="Descripción"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Descubre lo Mejor
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Encuentra los mejores productos al mejor precio
            </p>
            <Link
              href="/productos"
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Comprar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explora Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.slug}`}
              className="group relative h-64 rounded-xl overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Productos Destacados
          </h2>
          <Link
            href="/productos"
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Calidad Garantizada
              </h3>
              <p className="text-gray-600">
                Todos nuestros productos pasan por un riguroso control de calidad
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Envío Rápido
              </h3>
              <p className="text-gray-600">
                Recibe tus productos en tiempo récord con nuestro servicio express
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pago Seguro
              </h3>
              <p className="text-gray-600">
                Tus pagos están protegidos con la más alta seguridad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Suscríbete para recibir las mejores ofertas y novedades directamente en tu correo
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">
                MaldonadoMarket
              </h3>
              <p className="text-sm">
                Tu marketplace de confianza para encontrar los mejores productos
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Categorías</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/categoria/electronicos" className="hover:text-white">
                    Electrónicos
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/moda" className="hover:text-white">
                    Moda
                  </Link>
                </li>
                <li>
                  <Link href="/categoria/hogar" className="hover:text-white">
                    Hogar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Útiles</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/terminos" className="hover:text-white">
                    Términos y Condiciones
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="hover:text-white">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-white">
                    Política de Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} MaldonadoMarket. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
