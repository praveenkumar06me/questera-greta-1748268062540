import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-cafe-cream min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl text-cafe-brown mb-4">About Us</h1>
          <p className="text-gray-700">Discover the passion behind every cup</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
            alt="Coffee brewing"
            className="rounded-lg shadow-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl text-cafe-brown">Our Philosophy</h2>
            <p className="text-gray-700">At Café Artisan, we believe that great coffee is an art form. Each cup is carefully crafted using ethically sourced beans and expert techniques passed down through generations.</p>
            
            <h2 className="font-serif text-2xl text-cafe-brown pt-4">Quality First</h2>
            <p className="text-gray-700">We work directly with farmers to ensure the highest quality beans, roasted to perfection in small batches to bring out their unique characteristics.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}