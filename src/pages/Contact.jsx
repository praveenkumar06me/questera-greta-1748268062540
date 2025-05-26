import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-cafe-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl text-cafe-brown mb-4">Contact Us</h1>
          <p className="text-gray-700">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <h2 className="font-serif text-2xl text-cafe-brown mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaPhone className="text-cafe-brown" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-cafe-brown" />
                <span>hello@cafeartisan.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-cafe-brown" />
                <span>123 Coffee Street, Brewtown, BT 12345</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-2 border rounded h-32"></textarea>
              </div>
              <button className="bg-cafe-brown text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}