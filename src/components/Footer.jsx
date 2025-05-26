import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-cafe-brown text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">Café Artisan</h3>
            <p className="text-sm">Crafting moments of joy, one cup at a time.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Hours</h4>
            <p className="text-sm">Monday - Friday: 7am - 8pm</p>
            <p className="text-sm">Saturday - Sunday: 8am - 9pm</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaInstagram className="h-6 w-6 hover:text-cafe-accent cursor-pointer" />
              <FaFacebook className="h-6 w-6 hover:text-cafe-accent cursor-pointer" />
              <FaTwitter className="h-6 w-6 hover:text-cafe-accent cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}