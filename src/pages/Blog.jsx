import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Tag } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';

// Mock data - would be fetched from Strapi in real implementation
const blogPosts = [
  {
    id: 1,
    title: "The Art of Leather Craftsmanship: Traditions & Techniques",
    excerpt: "Explore the centuries-old techniques that go into creating premium leather goods and how these traditions are being preserved in modern workshops.",
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "May 15, 2025",
    author: "Emily Chen",
    category: "Craftsmanship",
    tags: ["leather", "craftsmanship", "tradition"]
  },
  {
    id: 2,
    title: "Sustainable Fashion: The Future of Luxury Accessories",
    excerpt: "How the luxury bag industry is adapting to meet the growing demand for sustainable and ethically produced fashion accessories.",
    image: "https://images.pexels.com/photos/1306250/pexels-photo-1306250.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "April 28, 2025",
    author: "Michael Tan",
    category: "Sustainability",
    tags: ["sustainability", "ethical-fashion", "future-trends"]
  },
  {
    id: 3,
    title: "How to Choose the Perfect Everyday Bag",
    excerpt: "A comprehensive guide to selecting a bag that meets your daily needs while complementing your personal style and lifestyle.",
    image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "April 12, 2025",
    author: "Aisha Johnson",
    category: "Style Guide",
    tags: ["buying-guide", "everyday-essentials", "style"]
  },
  {
    id: 4,
    title: "The Psychology of Luxury: Why We Covet Premium Bags",
    excerpt: "Examining the emotional and psychological factors that drive our desire for luxury goods and how they reflect our values and aspirations.",
    image: "https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 30, 2025",
    author: "Dr. Sarah Williams",
    category: "Lifestyle",
    tags: ["psychology", "luxury", "consumer-behavior"]
  },
  {
    id: 5,
    title: "Caring for Leather: A Seasonal Guide",
    excerpt: "How to protect and maintain your leather bags throughout the year, with specific advice for different weather conditions and seasons.",
    image: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "March 15, 2025",
    author: "James Rodriguez",
    category: "Care Guide",
    tags: ["leather-care", "maintenance", "seasonal-tips"]
  },
  {
    id: 6,
    title: "From Runway to Street: Bag Trends for 2025",
    excerpt: "The latest bag styles and trends from fashion weeks around the world, and how to incorporate them into your everyday wardrobe.",
    image: "https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "February 28, 2025",
    author: "Aisha Johnson",
    category: "Trends",
    tags: ["fashion-trends", "runway", "style-inspiration"]
  }
];

const categories = [
  "All Categories",
  "Craftsmanship",
  "Sustainability",
  "Style Guide",
  "Lifestyle",
  "Care Guide",
  "Trends"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All Categories" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageTransition>
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
          <img
            src="https://images.pexels.com/photos/7147841/pexels-photo-7147841.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog hero"
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
              LUXE Journal
            </motion.h1>
            <motion.p 
              className="text-white/90 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Stories, guides, and insights from the world of premium leather goods.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Search Bar */}
              <motion.div 
                className="relative mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-primary-200 rounded-md bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-400" />
              </motion.div>
              
              {/* Category Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="text-primary-600 font-medium mr-2">Filter by:</span>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-primary-900 text-white'
                        : 'bg-white text-primary-600 hover:bg-primary-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
              
              {/* Blog Posts */}
              {filteredPosts.length > 0 ? (
                <div className="space-y-12">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      className="bg-white rounded-lg overflow-hidden shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 h-60 md:h-auto">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6 md:p-8">
                          <div className="flex items-center text-sm text-primary-500 mb-3">
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
                          </div>
                          
                          <h2 className="text-2xl font-serif font-bold mb-3">
                            <a href={`/blog/${post.id}`} className="hover:text-accent-600 transition-colors">
                              {post.title}
                            </a>
                          </h2>
                          
                          <p className="text-primary-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                              <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          
                          <Button href={`/blog/${post.id}`} variant="secondary" size="sm">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <motion.div 
                  className="bg-white rounded-lg p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-4">No articles found matching your criteria.</p>
                  <Button onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All Categories");
                  }}>
                    Reset Filters
                  </Button>
                </motion.div>
              )}
              
              {/* Pagination */}
              {filteredPosts.length > 0 && (
                <motion.div 
                  className="flex justify-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors">
                      Previous
                    </button>
                    <button className="px-4 py-2 bg-primary-900 text-white rounded-md">1</button>
                    <button className="px-4 py-2 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors">2</button>
                    <button className="px-4 py-2 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors">3</button>
                    <button className="px-4 py-2 border border-primary-200 rounded-md hover:bg-primary-50 transition-colors">
                      Next
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3 space-y-8">
              {/* Popular Posts */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <a 
                      key={post.id} 
                      href={`/blog/${post.id}`}
                      className="flex items-start group"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-accent-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-sm text-primary-500">{post.date}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
              
              {/* Categories */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-medium mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.slice(1).map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className="flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-primary-50 transition-colors"
                      >
                        <span className={activeCategory === category ? "text-accent-600 font-medium" : "text-primary-700"}>
                          {category}
                        </span>
                        <span className="bg-primary-100 text-primary-700 px-2 py-0.5 text-xs rounded-full">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              {/* Tags */}
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-medium mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors rounded-full text-sm"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              {/* Newsletter */}
              <motion.div 
                className="bg-primary-900 text-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h3>
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;