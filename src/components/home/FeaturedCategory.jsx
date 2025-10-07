import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import categoryjute from '../../../assets/category-jute.webp';
import tote from '../../../assets/tote.jpg';
import weddingbags from '../../../assets/weddingbags.webp';
import Button from '../ui/Button';

const FeaturedCategory = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4"> Explore Our Jute Bag And Wedding Bags Collections</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Discover premium eco-friendly jute bags—perfect for shopping, weddings, and everyday essentials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Jute Bags",
                image: `${categoryjute}`,
                link: "/shop/jute-bags"
              },
              {
                title: "Big Shopper",
                image: `${tote}`,
                link: "/shop/big-shopper"
              },
              {
                title: "Wedding Bags",
                image: `${weddingbags}`,
                link: "/shop/wedding-bags"
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                className="relative overflow-hidden group rounded-lg h-80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-primary-950/30 group-hover:bg-primary-950/20 transition-all duration-300 z-10" />
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                  <h3 className="text-white text-2xl font-serif mb-4">{category.title}</h3>
                  <Button href={category.link} variant="secondary" size="md">
                    Shop Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedCategory