import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

  };

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src="https://images.pexels.com/photos/3823541/pexels-photo-3823541.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact us"
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
              className="text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We'd love to hear from you. Get in touch with our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Mail className="text-accent-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Email Us</h3>
                    <p className="text-primary-600 mb-1">For general inquiries:</p>
                    <a href="mailto:info@luxebags.com" className="text-accent-600 hover:text-accent-700 transition-colors">
                      info@luxebags.com
                    </a>
                    <p className="text-primary-600 mt-2 mb-1">For customer support:</p>
                    <a href="mailto:support@luxebags.com" className="text-accent-600 hover:text-accent-700 transition-colors">
                      support@luxebags.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Phone className="text-accent-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Call Us</h3>
                    <p className="text-primary-600 mb-1">Customer Service:</p>
                    <a href="tel:+18005551234" className="text-accent-600 hover:text-accent-700 transition-colors">
                      +1 (800) 555-1234
                    </a>
                    <p className="text-primary-600 mt-2 mb-1">Corporate Office:</p>
                    <a href="tel:+12125557890" className="text-accent-600 hover:text-accent-700 transition-colors">
                      +1 (212) 555-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <MapPin className="text-accent-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                    <p className="text-primary-600 mb-1">New York Flagship Store:</p>
                    <address className="not-italic text-primary-700">
                      123 Madison Avenue<br />
                      New York, NY 10016
                    </address>
                    <p className="text-primary-600 mt-2 mb-1">Brooklyn Workshop:</p>
                    <address className="not-italic text-primary-700">
                      45 Water Street<br />
                      Brooklyn, NY 11201
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full shadow-sm mr-4">
                    <Clock className="text-accent-600 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Hours</h3>
                    <p className="text-primary-600 mb-1">Stores:</p>
                    <p className="text-primary-700">
                      Monday - Saturday: 10am - 7pm<br />
                      Sunday: 12pm - 5pm
                    </p>
                    <p className="text-primary-600 mt-2 mb-1">Customer Service:</p>
                    <p className="text-primary-700">
                      Monday - Friday: 9am - 6pm<br />
                      Saturday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                <p className="text-primary-600 mb-4">
                  Follow us on social media for the latest products, behind-the-scenes content, and special offers.
                </p>
                <div className="flex space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-primary-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-primary-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-primary-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 hover:bg-primary-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-primary-900" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0a12 12 0 00-4.373 23.178c-.072-.672-.128-1.7.028-2.438.146-.666.938-4.25.938-4.25s-.24-.48-.24-1.188c0-1.11.646-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.797.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.472 0 .688.267 1.425.595 1.826a.24.24 0 01.056.23c-.61.252-.198.798-.225.91-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.15 4.976-.81 0-1.572-.42-1.833-.919l-.498 1.902c-.18.695-.667 1.566-.994 2.097A12 12 0 1012 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h2>
              
              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-primary-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button onClick={() => setFormStatus('idle')} variant="secondary">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                      Subject*
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    ></textarea>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="accent"
                    className="w-full flex items-center justify-center"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-primary-500 mt-4">
                    Fields marked with * are required.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Visit Our Stores</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Experience our products in person at one of our beautifully designed retail locations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="rounded-lg overflow-hidden shadow-sm h-80 bg-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Map would go here in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-primary-100">
                <div className="text-center">
                  <MapPin className="mx-auto h-10 w-10 text-primary-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">New York Flagship Store</h3>
                  <p className="text-primary-600">123 Madison Avenue, New York, NY 10016</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-sm h-80 bg-primary-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Map would go here in a real implementation */}
              <div className="w-full h-full flex items-center justify-center bg-primary-100">
                <div className="text-center">
                  <MapPin className="mx-auto h-10 w-10 text-primary-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Brooklyn Workshop</h3>
                  <p className="text-primary-600">45 Water Street, Brooklyn, NY 11201</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Find quick answers to our most commonly asked questions.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {[
                {
                  question: "What is the warranty period for LUXE bags?",
                  answer: "All LUXE bags come with a 2-year warranty that covers manufacturing defects. Additionally, we offer lifetime repairs for a reasonable fee on all our products, helping extend their life for generations."
                },
                {
                  question: "How do I care for my leather bag?",
                  answer: "We recommend cleaning your bag with a soft, dry cloth regularly. Apply a quality leather conditioner every 3-6 months to maintain the leather's suppleness. Avoid exposure to extreme heat, water, and direct sunlight. Store your bag in the provided dust bag when not in use."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. You can see the exact rates at checkout after entering your shipping address."
                },
                {
                  question: "What is your return policy?",
                  answer: "We offer a 30-day return policy for unused items in original packaging. Free returns are available for orders within the United States. International returns are accepted, but return shipping costs are the responsibility of the customer."
                },
                {
                  question: "Can I have my bag personalized?",
                  answer: "Yes, we offer monogramming services for most of our products. You can add up to three initials for an additional fee. Please note that personalized items are final sale and cannot be returned."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="border-b border-primary-100 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6">
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className="ml-6 flex-shrink-0 text-primary-500 group-open:rotate-180 transition-transform">
                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-primary-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Button href="/faq" variant="secondary">
                View All FAQs
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;