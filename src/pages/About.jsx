import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Craftsman working on leather"
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
              Our Story
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting premium leather goods with passion since 2010.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white" id="our-story">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6">From Workshop to World Stage</h2>
              <p className="text-primary-700 mb-6 leading-relaxed">
                LUXE began in 2010 as a small workshop in Brooklyn, where our founder Emily Chen, a third-generation leather artisan, crafted bespoke bags for a discerning clientele. With an unwavering commitment to quality and traditional craftsmanship, what started as a passion project quickly developed a loyal following.
              </p>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Today, LUXE has grown into a respected name in luxury leather goods, but we remain true to our founding principles. Each bag is still handcrafted with the same attention to detail and dedication to excellence that defined our first creations.
              </p>
              <p className="text-primary-700 leading-relaxed">
                Our journey is one of preserving traditional techniques while embracing thoughtful innovation, creating timeless pieces that stand apart in a world of disposable fashion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3823541/pexels-photo-3823541.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Our workshop" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Philosophy</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              At LUXE, we believe in creating products that become more beautiful with time and use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Without Compromise",
                description: "We source only the finest full-grain leather and premium hardware, ensuring that every LUXE bag is built to last for generations.",
                image: "https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Thoughtful Design",
                description: "Every detail is considered, from the perfect pocket placement to the ideal strap length, creating bags that are as functional as they are beautiful.",
                image: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Ethical Production",
                description: "We maintain small production runs and fair labor practices, ensuring that our artisans are valued and our environmental footprint is minimized.",
                image: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">{pillar.title}</h3>
                  <p className="text-primary-600">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-white" id="craftmanship">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">The Art of Craftsmanship</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              Every LUXE bag represents over 20 hours of skilled handwork and centuries of leather-working tradition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-serif mb-6">From Raw Material to Heirloom</h3>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Our process begins with selecting the perfect hide – only the top 5% of full-grain leather meets our standards. Each piece is hand-cut, hand-stitched, and hand-finished by artisans with decades of experience.
              </p>
              <p className="text-primary-700 mb-6 leading-relaxed">
                We embrace traditional techniques that have stood the test of time: saddle stitching for durability, edge burnishing for a flawless finish, and hand-applied edge paint for protection and beauty.
              </p>
              <p className="text-primary-700 leading-relaxed">
                The result is a bag that not only looks exceptional when new but develops a rich patina over time, becoming uniquely yours with every use – a true companion for life's journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/1306250/pexels-photo-1306250.jpeg?auto=compress&cs=tinysrgb&w=1280" 
                alt="Craftsman working on a leather bag" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-secondary-900 text-white" id="sustainability">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Our Commitment to Sustainability</h2>
            <p className="text-secondary-300 max-w-xl mx-auto">
              Luxury and responsibility can coexist. We're committed to minimizing our environmental impact while maximizing product longevity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-4">Responsible Sourcing</h3>
              <p className="text-secondary-300 mb-4">
                We partner exclusively with tanneries certified by the Leather Working Group, ensuring environmental standards and ethical practices are maintained throughout our supply chain.
              </p>
              <p className="text-secondary-300">
                Our leather is a byproduct of the food industry, meaning no animals are harvested solely for their hides. We use vegetable tanning methods whenever possible to reduce chemical usage.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium mb-4">Lifetime Care</h3>
              <p className="text-secondary-300 mb-4">
                We believe the most sustainable product is one you never need to replace. That's why we offer lifetime repairs on all our bags, extending their useful life and keeping them out of landfills.
              </p>
              <p className="text-secondary-300">
                When a LUXE bag eventually reaches the end of its journey, we'll reclaim it for responsible disposal or upcycling, closing the loop on our products' lifecycle.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4">Minimal Waste Production</h3>
              <p className="text-secondary-300 mb-4">
                Our small-batch production minimizes overstock and waste. We carefully plan each cutting session to maximize leather usage, and repurpose remnants into small accessories or donate them to educational institutions.
              </p>
              <p className="text-secondary-300">
                All packaging is made from recycled and recyclable materials, and we're continually working to reduce our packaging footprint without compromising product protection.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-4">Community Impact</h3>
              <p className="text-secondary-300 mb-4">
                We invest in the communities where we operate through apprenticeship programs that preserve traditional leather crafting skills and provide meaningful employment opportunities.
              </p>
              <p className="text-secondary-300">
                Through our LUXE Legacy program, we donate 5% of profits to organizations working to protect traditional crafts and support artisan communities around the world.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="/sustainability-report" variant="accent">
              Read Our Full Sustainability Report
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-primary-600 max-w-xl mx-auto">
              The passionate individuals behind every LUXE creation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Emily Chen",
                title: "Founder & Creative Director",
                bio: "A third-generation leather artisan who founded LUXE to preserve traditional craftsmanship while creating modern, functional designs.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                name: "James Rodriguez",
                title: "Master Craftsman",
                bio: "With over 25 years of experience, James oversees our workshop and trains our next generation of leather artisans.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                name: "Aisha Johnson",
                title: "Design Director",
                bio: "Combining her background in fashion and industrial design, Aisha ensures our bags are both beautiful and perfectly functional.",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                name: "Michael Tan",
                title: "Sustainability Officer",
                bio: "Leading our environmental initiatives, Michael works to reduce our footprint while maintaining the highest quality standards.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((person, index) => (
              <motion.div
                key={person.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 relative inline-block">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-1">{person.name}</h3>
                <p className="text-accent-600 mb-3">{person.title}</p>
                <p className="text-primary-600">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Join Our Journey
            </motion.h2>
            <motion.p 
              className="text-primary-200 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're always looking for talented individuals who share our passion for craftsmanship and sustainable luxury.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button href="/careers" variant="accent" size="lg">
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;