import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import aboutpage from '../../assets/aboutpage.jpg';
import about1 from '../../assets/about-1.webp';
import about2 from '../../assets/about-2.webp';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src={aboutpage}
            loading="lazy"
            alt="Artisan weaving eco-friendly bags"
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
              Handcrafting eco-friendly jute and cotton bags — rooted in tradition, driven by purpose.
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
              <h2 className="mb-6">Crafted with Care, Rooted in Tradition</h2>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Our journey began in a small village workshop in Tamil Nadu, where skilled artisans came together with a shared vision—to create eco-friendly, durable, and beautifully designed jute and cotton bags that celebrate Indian culture and sustainability.
              </p>
              <p className="text-primary-700 mb-6 leading-relaxed">
                From vibrant wedding "manja pai" return bags to practical big shoppers and everyday totes, every piece we craft carries the spirit of tradition, the touch of handwork, and a promise of quality.
              </p>
              <p className="text-primary-700 leading-relaxed">
                Today, our bags are loved not just across South India, but beyond—chosen for weddings, events, and conscious lifestyles. We are proud to promote zero-waste practices and support local artisans while helping customers celebrate moments with meaningful products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={about1}
                alt="Artisans crafting jute bags"
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
              We believe in sustainability, tradition, and craftsmanship. Every bag we make carries a story of purpose, people, and planet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly at Heart",
                description:
                  "We use biodegradable jute and organic cotton to reduce plastic waste and promote greener lifestyles—one bag at a time.",
                image:
                  "https://images.pexels.com/photos/11035214/pexels-photo-11035214.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Handcrafted with Pride",
                description:
                  "Each bag is handmade by local artisans with care, blending time-honored techniques with thoughtful designs made for modern life.",
                image:
                  "https://images.pexels.com/photos/5418892/pexels-photo-5418892.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Ethical & Empowering",
                description:
                  "We support fair wages, safe working conditions, and empower rural women by providing consistent employment through our craft.",
                image:
                  "https://images.pexels.com/photos/7679875/pexels-photo-7679875.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              Each of our jute and cotton bags reflects hours of dedicated handwork, passed down through generations of skilled artisans.
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
              <h3 className="text-2xl font-serif mb-6">From Thread to Tradition</h3>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Our journey begins by sourcing the highest quality natural fibers—jute and organic cotton. These eco-friendly materials are then transformed by hand into durable, beautiful bags.
              </p>
              <p className="text-primary-700 mb-6 leading-relaxed">
                Every cut, stitch, and fold is handled by skilled artisans who bring passion and precision to their craft. Whether it's intricate embroidery or custom printing, we value detail over mass production.
              </p>
              <p className="text-primary-700 leading-relaxed">
                The result? Timeless designs that blend sustainability with tradition—bags that are made to last, loved by nature, and cherished by you.
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
                src={about2}
                loading="lazy"
                alt="Artisan weaving jute"
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
              Sustainability is not a trend — it's our foundation. From raw materials to finished bags, every step is rooted in responsibility.
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
              <h3 className="text-xl font-medium mb-4">Sustainable Sourcing</h3>
              <p className="text-secondary-300 mb-4">
                We use 100% natural jute and organic cotton sourced from certified farms in India, grown without harmful chemicals or pesticides.
              </p>
              <p className="text-secondary-300">
                Our fabrics are biodegradable, renewable, and require minimal water to produce—making them kinder to the planet from the very start.
              </p>
            </motion.div>

            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium mb-4">Durable by Design</h3>
              <p className="text-secondary-300 mb-4">
                Our jute and cotton bags are made to be reused hundreds of times. Strong stitching, quality finishes, and timeless designs mean they age beautifully — not end up in landfills.
              </p>
              <p className="text-secondary-300">
                If your bag needs a repair, we’ll fix it. And if it’s truly at the end of life, we offer upcycling and recycling options.
              </p>
            </motion.div>

            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-4">Zero-Waste Practices</h3>
              <p className="text-secondary-300 mb-4">
                We follow a zero-waste approach in production. Scraps and remnants are reused for accessories, packaging, or donated to local artisans and students for training.
              </p>
              <p className="text-secondary-300">
                All our packaging is made from recycled kraft paper and compostable materials — no plastic, ever.
              </p>
            </motion.div>

            <motion.div
              className="bg-secondary-800 rounded-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-4">Empowering Communities</h3>
              <p className="text-secondary-300 mb-4">
                We work directly with rural artisan groups, especially women-led cooperatives, ensuring fair wages and empowering local economies.
              </p>
              <p className="text-secondary-300">
                A portion of every purchase goes toward skill development and education initiatives in the communities we call partners.
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
      {/* <section className="py-20 bg-white">
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
      </section> */}

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