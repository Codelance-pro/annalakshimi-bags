import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import image from '../../assets/pexels-qhung999-18652087.jpg'
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import categoryjute from '../../assets/category-jute.jpg';
import kattapai from '../../assets/kattapai.jpg';
import weddingbags from '../../assets/weddingbags.webp';
import brand from '../../assets/brand.webp';

// Lazy-loaded components
const FeaturedProducts = lazy(() => import('../components/home/FeaturedProducts'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Collections = lazy(() => import('../components/home/Collections'));
const InstagramFeed = lazy(() => import('../components/home/InstagramFeed'));

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen-90 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src={image}
            loading='eager'
            fetchPriority='high'
            alt="Jute Bags and Coton Bags"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container-custom relative z-20">
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-white mb-6 text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Sustainable Jute Bags & Cotton Totes
              <br />
              Crafted for Every Occasion.
            </motion.h1>
            <motion.p
              className="text-white/90 text-lg mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our eco-friendly collection of sturdy jute bags, roomy big shopper totes,
              elegant wedding “manja pai” gift bags, and breathable cotton bags—perfect for daily
              errands, special celebrations, and thoughtful gifting.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button href="/shop/jute-bags" variant="accent" size="lg">
                Shop Jute Bags
              </Button>
              <Button href="/shop/wedding-bags" variant="secondary" size="lg">
                Wedding “Manja Pai” Bags
              </Button>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Featured Categories */}
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
                image: `${kattapai}`,
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute inset-0 bg-primary-950/30 group-hover:bg-primary-950/20 transition-all duration-300 z-10" />
                <img
                  src={category.image}
                  alt={category.title}
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

      {/* Featured Products */}
      <Suspense fallback={<LoadingSpinner />}>
        <FeaturedProducts />
      </Suspense>

    {/* Brand Story */}
<section className="py-20 bg-primary-50">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={brand}
          alt="Artisan stitching a jute bag"
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="mb-6 text-3xl font-bold text-primary-900">Sustainable Craftsmanship in Every Stitch</h2>
        <p className="text-primary-700 mb-6 text-lg">
          At our core, we specialize in eco-friendly jute bags, traditional manja pai wedding bags, and durable cotton shoppers handcrafted by skilled artisans from South India.
        </p>
        <p className="text-primary-700 mb-8 text-lg">
          Every bag tells a story of sustainability, culture, and heritage—designed to support green living while celebrating Indian craftsmanship. Whether it’s for daily use or special occasions, our products combine beauty and purpose.
        </p>
        <Button href="/about" variant="primary">
          Discover Our Story
        </Button>
      </motion.div>
    </div>
  </div>
</section>


      {/* Collections */}
      {/* <Suspense fallback={<LoadingSpinner />}>
        <Collections />
      </Suspense> */}

      {/* Testimonials */}
      {/* <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense> */}

      {/* Instagram Feed */}
      <Suspense fallback={<LoadingSpinner />}>
        <InstagramFeed />
      </Suspense>

      {/* Newsletter */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Join Our Community</h2>
            <p className="text-primary-200 mb-8">
              Subscribe to our newsletter for exclusive offers, new product announcements, and styling tips.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md bg-white/10 border border-primary-700 focus:border-accent-500 text-white placeholder-primary-300 focus:outline-none sm:mb-0 mb-3 sm:rounded-r-none rounded-md"
              />
              <Button type="submit" variant="accent" className="sm:rounded-l-none rounded-md">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;