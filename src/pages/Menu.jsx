import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '3.50', description: 'Rich and bold' },
    { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '4.75', description: 'Espresso with lots of steamed milk' }
  ],
  pastries: [
    { name: 'Croissant', price: '3.75', description: 'Buttery and flaky' },
    { name: 'Chocolate Muffin', price: '3.50', description: 'Rich chocolate goodness' },
    { name: 'Cinnamon Roll', price: '4.25', description: 'Fresh baked daily' }
  ]
};

export default function Menu() {
  return (
    <div className="bg-cafe-cream py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl text-cafe-brown text-center mb-12"
        >
          Our Menu
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl text-cafe-brown mb-6">Coffee</h2>
            <div className="space-y-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-xl">{item.name}</h3>
                    <span className="text-cafe-brown">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl text-cafe-brown mb-6">Pastries</h2>
            <div className="space-y-6">
              {menuItems.pastries.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-center">
                    <h3 className="font-serif text-xl">{item.name}</h3>
                    <span className="text-cafe-brown">${item.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}