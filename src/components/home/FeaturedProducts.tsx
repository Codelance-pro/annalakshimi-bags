import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import Button from '../ui/Button';
import jute from '../../../assets/product-jute.jpg';
import tote from '../../../assets/tote.jpg';
import wedding from '../../../assets/wedding.jpg';
import { Link } from 'react-router-dom';

// Mock data - would be fetched from Strapi in real implementation
const products = [
  {
    id: 1,
    name: "Jute Bag",
    image: `${jute}`,
    category: "Jute",
    isNew: false,
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 2,
    name: "Classic Tote Bag",
    image: `${tote}`,
    category: "Tote Bags",
    isNew: true,
    colors: ["Black", "White"]
  },
  {
    id: 3,
    name: "Wedding Bag",
    image: `${wedding}`,
    category: "Wedding Bags",
    isNew: true,
    colors: ["Black", "Burgundy", "Cream"]
  },
];

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-primary-900">
            Featured Jute Bags
          </h2>
          <p className="text-primary-600 max-w-xl mx-auto text-lg">
            Explore our top-selling jute and cotton bags, known for their eco-friendly materials, elegant designs, and everyday functionality.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* New Arrival Badge */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10 bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded">
                    New Arrival
                  </div>
                )}

                {/* Image Wrapper (Increased height) */}
                <div className="w-full overflow-hidden  sm:h-[32rem] md:h-[36rem]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                {/* Quick View Button */}
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

                {/* Wishlist Button */}
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

              {/* Product Info */}
              <div className="text-center">
                <h3 className="font-medium text-lg mb-1">
                  <a href={`/product/${product.id}`} className="hover:text-accent-600 transition-colors">
                    {product.name}
                  </a>
                </h3>
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

        {/* View All Button */}
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
