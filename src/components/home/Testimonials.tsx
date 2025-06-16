import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Mock data - would be fetched from Strapi in real implementation
const testimonials = [
  {
    id: 1,
    text: "I've had my LUXE tote for over 5 years now and it still looks as beautiful as the day I bought it. The leather has aged wonderfully and developed a unique patina that tells the story of all our adventures together.",
    author: "Sarah J.",
    location: "New York, NY",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 2,
    text: "The attention to detail is incredible. From the stitching to the hardware, everything about my LUXE backpack speaks of quality. It's an investment piece that I'm proud to carry every day.",
    author: "Michael T.",
    location: "Chicago, IL",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    text: "What sets LUXE apart is their commitment to sustainability without compromising on luxury. I love that my beautiful bag didn't come at the expense of the environment.",
    author: "Emma R.",
    location: "San Francisco, CA",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    } else {
      setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    }
  };

  // Auto-advance slides
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      paginate(1);
    }, 6000);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  return (
    <section className="py-20 bg-secondary-900 text-white relative overflow-hidden">
      <div 
        className="absolute top-10 left-10 opacity-5"
        aria-hidden="true"
      >
        <Quote size={120} />
      </div>
      <div 
        className="absolute bottom-10 right-10 opacity-5"
        aria-hidden="true"
      >
        <Quote size={120} />
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-secondary-300 max-w-xl mx-auto">
            Read about the experiences of our valued customers with their LUXE bags.
          </p>
        </motion.div>

        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].author}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-secondary-700"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <Quote className="text-accent-500 mb-4 h-8 w-8" />
                  <p className="text-lg md:text-xl italic mb-6">
                    {testimonials[current].text}
                  </p>
                  <div>
                    <p className="font-medium text-lg">{testimonials[current].author}</p>
                    <p className="text-secondary-300">{testimonials[current].location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 mb-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? 'bg-accent-500' : 'bg-secondary-600 hover:bg-secondary-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;