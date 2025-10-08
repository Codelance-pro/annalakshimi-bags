import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import insta1 from '../../../assets/insta1.jpeg';
import insta2 from '../../../assets/insta2.jpeg';
import insta3 from '../../../assets/insta3.jpeg';
import insta4 from '../../../assets/insta4.jpeg';
import insta5 from '../../../assets/insta5.jpeg';
import insta6 from '../../../assets/insta6.jpeg';

// Mock data - would be fetched from Instagram API or Strapi in real implementation
const instagramPosts = [
  {
    id: 1,
    image: `${insta1}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 124,
    comments: 8
  },
  {
    id: 2,
    image: `${insta2}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 98,
    comments: 5
  },
  {
    id: 3,
    image: `${insta3}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 203,
    comments: 12
  },
  {
    id: 4,
    image: `${insta4}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 156,
    comments: 9
  },
  {
    id: 5,
    image: `${insta5}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 178,
    comments: 11
  },
  {
    id: 6,
    image: `${insta6}`,
    link: "https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==",
    likes: 143,
    comments: 7
  }
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Follow Our Journey</h2>
          <p className="text-primary-600 max-w-xl mx-auto mb-4">
            Join our community and share your Annalakshimi bag stories with us on Instagram.
          </p>
          <a 
            href="https://www.instagram.com/annalakshmi_jute_bagss?igsh=MXY5cWRyZmxsa3QzdQ==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-accent-600 hover:text-accent-700 transition-colors"
          >
            <Instagram size={20} className="mr-2" />
            @Annalakshimi_bags
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center">
                  <Instagram size={24} className="mx-auto mb-2" />
                  <div className="flex space-x-4 text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;