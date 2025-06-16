import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Collections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Seasonal Collections</h2>
          <p className="text-primary-600 max-w-xl mx-auto">
            Explore our latest collections, designed to meet the demands of the modern lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Summer Collection */}
          <motion.div 
            className="relative overflow-hidden rounded-lg min-h-[500px] group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/30 to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Summer Collection"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-accent-300 font-medium mb-2 block">New Arrivals</span>
                <h3 className="text-white text-3xl mb-4 font-serif">Summer Collection 2025</h3>
                <p className="text-white/80 mb-6 max-w-md">
                  Lightweight designs crafted from our special summer leather, perfect for your warm-weather adventures.
                </p>
                <Button href="/shop?collection=summer" variant="accent">
                  Explore Collection
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeless Classics */}
          <motion.div 
            className="relative overflow-hidden rounded-lg min-h-[500px] group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-950/30 to-transparent z-10" />
              <img
                src="https://images.pexels.com/photos/1306250/pexels-photo-1306250.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Timeless Classics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-accent-300 font-medium mb-2 block">Editor's Pick</span>
                <h3 className="text-white text-3xl mb-4 font-serif">Timeless Classics</h3>
                <p className="text-white/80 mb-6 max-w-md">
                  Our signature designs that transcend seasons, crafted from premium full-grain leather for lasting beauty.
                </p>
                <Button href="/shop?collection=classics" variant="accent">
                  Explore Collection
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Collections;