import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="min-h-[80vh] flex items-center justify-center py-20 bg-primary-50">
        <div className="container-custom">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-8xl md:text-9xl font-serif font-bold text-primary-900">404</span>
            </motion.div>
            
            <motion.h1
              className="text-3xl md:text-4xl font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Page Not Found
            </motion.h1>
            
            <motion.p
              className="text-primary-600 max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href="/" variant="primary" size="lg">
                Return Home
              </Button>
              <Button href="/shop" variant="secondary" size="lg">
                Browse Collection
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;