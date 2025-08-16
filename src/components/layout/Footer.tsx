'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar la suscripción
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo y Descripción */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Maldonado Online"
                width={180}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Tu marketplace de confianza para encontrar los mejores productos al mejor precio.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/categorias"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Categorías
                </Link>
              </li>
              <li>
                <Link
                  href="/ofertas"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Ofertas
                </Link>
              </li>
              <li>
                <Link
                  href="/nuevos"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Nuevos Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/vender"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Vender
                </Link>
              </li>
              <li>
                <Link
                  href="/ayuda"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Centro de Ayuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Av. Principal 123, Ciudad, País
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a
                  href="mailto:info@maldonadoonline.com"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@maldonadoonline.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Suscríbete para recibir las últimas ofertas y novedades
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Maldonado Online. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/terminos"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/privacidad"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 