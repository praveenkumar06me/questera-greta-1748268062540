import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaCoffee className="h-6 w-6 text-cafe-brown" />
              <span className="font-serif text-xl text-cafe-brown">Café Artisan</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-cafe-brown">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-cafe-brown">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-cafe-brown">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-cafe-brown">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}