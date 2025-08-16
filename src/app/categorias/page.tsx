import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const categories = [
  {
    id: '1',
    name: 'Electrónicos',
    description: 'Encuentra los últimos gadgets y dispositivos electrónicos',
    image: '/categories/electronics.jpg',
    slug: 'electronicos',
    subcategories: [
      { id: '1-1', name: 'Smartphones', slug: 'smartphones' },
      { id: '1-2', name: 'Laptops', slug: 'laptops' },
      { id: '1-3', name: 'Tablets', slug: 'tablets' },
      { id: '1-4', name: 'Accesorios', slug: 'accesorios' },
    ],
  },
  {
    id: '2',
    name: 'Moda',
    description: 'Descubre las últimas tendencias en ropa y accesorios',
    image: '/categories/fashion.jpg',
    slug: 'moda',
    subcategories: [
      { id: '2-1', name: 'Ropa de Mujer', slug: 'ropa-mujer' },
      { id: '2-2', name: 'Ropa de Hombre', slug: 'ropa-hombre' },
      { id: '2-3', name: 'Calzado', slug: 'calzado' },
      { id: '2-4', name: 'Accesorios', slug: 'accesorios-moda' },
    ],
  },
  {
    id: '3',
    name: 'Hogar',
    description: 'Todo para hacer de tu hogar un lugar especial',
    image: '/categories/home.jpg',
    slug: 'hogar',
    subcategories: [
      { id: '3-1', name: 'Muebles', slug: 'muebles' },
      { id: '3-2', name: 'Decoración', slug: 'decoracion' },
      { id: '3-3', name: 'Electrodomésticos', slug: 'electrodomesticos' },
      { id: '3-4', name: 'Jardín', slug: 'jardin' },
    ],
  },
  {
    id: '4',
    name: 'Deportes',
    description: 'Equipamiento y ropa deportiva para todos los deportes',
    image: '/categories/sports.jpg',
    slug: 'deportes',
    subcategories: [
      { id: '4-1', name: 'Fútbol', slug: 'futbol' },
      { id: '4-2', name: 'Fitness', slug: 'fitness' },
      { id: '4-3', name: 'Running', slug: 'running' },
      { id: '4-4', name: 'Ciclismo', slug: 'ciclismo' },
    ],
  },
  {
    id: '5',
    name: 'Belleza',
    description: 'Productos de belleza y cuidado personal',
    image: '/categories/beauty.jpg',
    slug: 'belleza',
    subcategories: [
      { id: '5-1', name: 'Maquillaje', slug: 'maquillaje' },
      { id: '5-2', name: 'Cuidado Facial', slug: 'cuidado-facial' },
      { id: '5-3', name: 'Perfumes', slug: 'perfumes' },
      { id: '5-4', name: 'Cuidado Capilar', slug: 'cuidado-capilar' },
    ],
  },
  {
    id: '6',
    name: 'Juguetes',
    description: 'Juguetes y juegos para todas las edades',
    image: '/categories/toys.jpg',
    slug: 'juguetes',
    subcategories: [
      { id: '6-1', name: 'Juguetes Educativos', slug: 'juguetes-educativos' },
      { id: '6-2', name: 'Juegos de Mesa', slug: 'juegos-mesa' },
      { id: '6-3', name: 'Peluches', slug: 'peluches' },
      { id: '6-4', name: 'Juguetes Electrónicos', slug: 'juguetes-electronicos' },
    ],
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-4 sm:px-0">
          Explora Nuestras Categorías
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <Link href={`/categoria/${category.slug}`} className="block">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">
                      {category.name}
                    </h2>
                    <p className="text-white/90 text-xs sm:text-sm line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
                  Subcategorías
                </h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {category.subcategories.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`/categoria/${category.slug}/${sub.slug}`}
                      className="text-xs sm:text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
} 