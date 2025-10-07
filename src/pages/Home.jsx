import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import image from '../../assets/pexels-qhung999-18652087.jpg'
import Button from '../components/ui/Button';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import brand from '../../assets/brand.jpg';

// Lazy-loaded components
const FeaturedProducts = lazy(() => import('../components/home/FeaturedProducts'));
const InstagramFeed = lazy(() => import('../components/home/InstagramFeed'));
const FeaturedCategory = lazy(() => import('../components/home/FeaturedCategory'));

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen-90 flex items-center mt-16 md:mt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src={image}
            loading='lazy'
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
              className="text-white mb-6 text-4xl md:text-5xl font-bold mt-2"
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
      {/* <Suspense fallback={<LoadingSpinner />}>
        <FeaturedCategory />
      </Suspense> */}

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
                alt="Stylish tote bags arranged aesthetically"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-primary-900">
                Everyday Style Meets Eco-Friendly Design
              </h2>
              <p className="text-primary-700 mb-6 text-lg">
                Our tote bags are designed for those who love a perfect mix of fashion and functionality. Whether you're heading to college, work, shopping, or a weekend outing, these totes fit seamlessly into your lifestyle.
              </p>
              <p className="text-primary-700 mb-8 text-lg">
                Made from high-quality, sustainable materials, each tote bag is a reusable alternative to plastic, combining durability with timeless style. With versatile designs and spacious interiors, they’re ideal for both everyday use and special occasions.
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