import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, Share2, Facebook, Twitter, Instagram } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

// Mock data - would be fetched from Strapi in real implementation
const blogPosts = [
  {
    id: "1",
    title: "The Art of Leather Craftsmanship: Traditions & Techniques",
    excerpt: "Explore the centuries-old techniques that go into creating premium leather goods and how these traditions are being preserved in modern workshops.",
    content: `
      <p>The rich heritage of leather craftsmanship spans thousands of years, evolving from a basic necessity into a refined art form. At LUXE, we are dedicated to preserving these time-honored techniques while incorporating modern innovations that enhance durability and sustainability.</p>
      
      <h2>The Foundation: Selecting the Perfect Leather</h2>
      
      <p>Everything begins with the selection of the leather itself. We exclusively use full-grain leather, the highest quality available, prized for its durability and natural beauty. Full-grain leather retains the entire grain surface of the hide, complete with all its natural markings and character.</p>
      
      <p>Our master craftsmen carefully examine each hide, looking for the perfect balance of texture, color consistency, and structural integrity. Only about 5% of all leather produced worldwide meets our stringent standards.</p>
      
      <h2>Traditional Techniques in a Modern Workshop</h2>
      
      <p>Once the leather is selected, our artisans employ techniques that have remained largely unchanged for generations:</p>
      
      <h3>Hand-Cutting</h3>
      
      <p>Each piece is meticulously hand-cut according to patterns that have been refined over years of experience. This approach allows our craftsmen to work around any natural imperfections in the leather and to position the cuts to maximize the strength and beauty of each piece.</p>
      
      <h3>Saddle Stitching</h3>
      
      <p>Perhaps the most time-consuming yet crucial technique in our process is saddle stitching. Unlike machine stitching, which can unravel if a single stitch breaks, saddle stitching creates a secure bond that will hold even if several stitches are compromised.</p>
      
      <p>This method involves passing two needles through the same hole from opposite sides, creating a lockstitch that is significantly stronger than machine stitching. A single seam on one of our bags may contain over 800 individual hand-placed stitches.</p>
      
      <h3>Edge Finishing</h3>
      
      <p>The edges of the leather are carefully beveled, sanded, and burnished to create a smooth, refined finish that resists fraying and wear. Multiple layers of edge paint are then applied and polished to protect the edges while adding a subtle contrast that highlights the craftsmanship.</p>
      
      <h2>Balancing Tradition with Innovation</h2>
      
      <p>While we honor traditional methods, we also embrace thoughtful innovations that enhance the quality and sustainability of our products:</p>
      
      <ul>
        <li>We use environmentally friendly, water-based dyes and finishes that reduce chemical exposure for both our artisans and our customers.</li>
        <li>Modern edge sealants provide superior protection against moisture while maintaining the aesthetic appeal of traditional edge treatments.</li>
        <li>Precision tools allow for consistent quality across all our products while still preserving the handcrafted nature of each piece.</li>
      </ul>
      
      <h2>The Human Element: Training the Next Generation</h2>
      
      <p>Perhaps the most important aspect of preserving these traditional techniques is passing them on to the next generation of leather artisans. Our apprenticeship program pairs experienced craftsmen with aspiring leather workers for a three-year training period.</p>
      
      <p>During this time, apprentices learn not only the technical skills but also develop the patience, attention to detail, and commitment to excellence that defines our brand. Many of our current master craftsmen began as apprentices in our workshop.</p>
      
      <h2>The Result: Pieces with Soul</h2>
      
      <p>The combination of traditional techniques, premium materials, and dedicated craftsmanship results in products that transcend their functional purpose. Each LUXE bag carries with it the spirit of its maker and the rich heritage of leather craftsmanship.</p>
      
      <p>As you use and care for your LUXE bag, it will develop a rich patina that tells the story of your life together—a living testament to the enduring value of craftsmanship in our modern world.</p>
    `,
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1280",
    date: "May 15, 2025",
    author: "Emily Chen",
    authorTitle: "Founder & Creative Director",
    authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    category: "Craftsmanship",
    tags: ["leather", "craftsmanship", "tradition"],
    relatedPosts: [2, 3, 5]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id) || blogPosts[0]; // Fallback to first post if not found
  
  // Get related posts
  const relatedPostsData = post.relatedPosts.map(id => 
    blogPosts.find(p => p.id === id.toString())
  ).filter(Boolean);

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/blog" className="inline-flex items-center text-white mb-4 hover:text-accent-300 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {post.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap items-center text-white/80 text-sm gap-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                {post.date}
              </span>
              <span className="flex items-center mr-4">
                <User size={16} className="mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Tag size={16} className="mr-1" />
                {post.category}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-primary-700 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:text-accent-700">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-primary-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-primary-700 font-medium">Tags:</span>
                  {post.tags.map((tag) => (
                    <a 
                      key={tag} 
                      href={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors rounded-full text-sm"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 flex items-center flex-wrap gap-4">
                <span className="text-primary-700 font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors">
                    <Facebook size={18} className="text-primary-700" />
                  </button>
                  <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors">
                    <Twitter size={18} className="text-primary-700" />
                  </button>
                  <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors">
                    <Instagram size={18} className="text-primary-700" />
                  </button>
                  <button className="p-2 bg-primary-100 hover:bg-primary-200 rounded-full transition-colors">
                    <Share2 size={18} className="text-primary-700" />
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 bg-primary-50 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={post.authorImage} 
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-medium mb-1">{post.author}</h3>
                  <p className="text-accent-600 mb-4">{post.authorTitle}</p>
                  <p className="text-primary-600">
                    Emily is the founder of LUXE and a third-generation leather artisan. With over 15 years of experience in luxury leather goods, she combines traditional craftsmanship with modern design sensibilities.
                  </p>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="mt-16">
                <h2 className="text-2xl font-serif font-bold mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, index) => (
                    <a
                      key={index}
                      href={`/blog/${index + 1}`}
                      className="group"
                    >
                      <div className="bg-primary-50 rounded-lg overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src="https://images.pexels.com/photos/1306250/pexels-photo-1306250.jpeg?auto=compress&cs=tinysrgb&w=800" 
                            alt="Related post"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-lg mb-2 group-hover:text-accent-600 transition-colors line-clamp-2">
                            Sustainable Fashion: The Future of Luxury Accessories
                          </h3>
                          <p className="text-primary-500 text-sm">April 28, 2025</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              className="lg:w-1/3 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-primary-100">
                <h3 className="text-lg font-medium mb-4">Search Articles</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 pl-10 border border-primary-200 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400" size={18} />
                </div>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-primary-100">
                <h3 className="text-lg font-medium mb-4">Recent Articles</h3>
                <div className="space-y-4">
                  {[...Array(3)].map((_, index) => (
                    <a 
                      key={index} 
                      href={`/blog/${index + 1}`}
                      className="flex items-start group"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                        <img 
                          src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="Recent post"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-accent-600 transition-colors line-clamp-2">
                          How to Choose the Perfect Everyday Bag
                        </h4>
                        <p className="text-sm text-primary-500">April 12, 2025</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-primary-100">
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {["Craftsmanship", "Sustainability", "Style Guide", "Lifestyle", "Care Guide", "Trends"].map((category) => (
                    <li key={category}>
                      <a
                        href={`/blog?category=${category}`}
                        className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-primary-50 transition-colors"
                      >
                        <span className={category === post.category ? "text-accent-600 font-medium" : "text-primary-700"}>
                          {category}
                        </span>
                        <span className="bg-primary-100 text-primary-700 px-2 py-0.5 text-xs rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="bg-primary-900 text-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-4">Join Our Newsletter</h3>
                <p className="text-primary-200 mb-4">
                  Stay updated with our latest articles, product releases, and exclusive offers.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 bg-primary-800 border border-primary-700 rounded-md text-white placeholder-primary-400 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none"
                  />
                  <Button variant="accent" type="submit" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPost;