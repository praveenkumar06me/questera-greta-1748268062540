import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div>
      <div className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl text-white mb-4">Welcome to Café Artisan</h1>
            <p className="text-xl text-cafe-cream">Experience the art of coffee</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-cafe-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-serif text-3xl text-cafe-brown">Our Story</h2>
              <p className="text-gray-700">Founded in 2020, Café Artisan brings together the finest coffee beans and expert craftsmanship to create an unforgettable coffee experience.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31" 
                alt="Cafe interior" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}