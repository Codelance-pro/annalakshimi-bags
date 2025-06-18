import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Button from '../ui/Button';
import jute from '../../../assets/product-jute.jpg';

// Mock data - would be fetched from Strapi in real implementation
const products = [
  {
    id: 1,
    name: "Classic-Tote",
    price: 249.99,
    image: `${jute}`,
    category: "totes",
    isNew: true,
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 2,
    name: "Urban Backpack",
    price: 189.99,
    image: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "backpacks",
    isNew: false,
    colors: ["Black", "Navy"]
  },
  {
    id: 3,
    name: "Mini Crossbody",
    price: 159.99,
    image: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "crossbody",
    isNew: true,
    colors: ["Black", "Burgundy", "Cream"]
  },
  {
    id: 4,
    name: "Business Briefcase",
    price: 299.99,
    image: "https://images.pexels.com/photos/6624859/pexels-photo-6624859.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "briefcases",
    isNew: false,
    colors: ["Black", "Brown"]
  }
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-primary-900">Featured Jute Bags</h2>
          <p className="text-primary-600 max-w-xl mx-auto text-lg">
            Explore our top-selling jute and cotton bags, known for their eco-friendly materials, elegant designs, and everyday functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="bg-primary-50 rounded-lg overflow-hidden relative mb-4">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded">
                    New Arrival
                  </div>
                )}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* Quick actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredProduct === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <Button
                      href={`/shop/${product.name}`}
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={16} />
                      <span>Quick View</span>
                    </Button>
                  </motion.div>
                </div>

                {/* Wishlist button */}
                <motion.button
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-primary-900 p-2 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredProduct === product.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Add to wishlist"
                >
                  <Heart size={16} />
                </motion.button>
              </div>

              <div className="text-center">
                <h3 className="font-medium text-lg mb-1">
                  <a href={`/product/${product.id}`} className="hover:text-accent-600 transition-colors">
                    {product.name}
                  </a>
                </h3>
                <p className="text-primary-900 font-semibold">${product.price.toFixed(2)}</p>
                <div className="mt-2 flex justify-center gap-1">
                  {product.colors.map((color) => (
                    <span key={color} className="text-sm text-primary-500">
                      {color}{color !== product.colors[product.colors.length - 1] && ", "}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/shop" variant="secondary">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;