import { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, ShoppingBag, Heart, X } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import { a, desc, p } from 'framer-motion/client';
import axios from 'axios';

// Mock data - would be fetched from Strapi in real implementation
// const products = [
//   {
//     id: 1,
//     name: "Classic Tote",
//     price: 249.99,
//     image: "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "totes",
//     collection: "classics",
//     isNew: true,
//     colors: ["Black", "Brown", "Tan"]
//   },
//   {
//     id: 2,
//     name: "Urban Backpack",
//     price: 189.99,
//     image: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "backpacks",
//     collection: "classics",
//     isNew: false,
//     colors: ["Black", "Navy"]
//   },
//   {
//     id: 3,
//     name: "Mini Crossbody",
//     price: 159.99,
//     image: "https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "crossbody",
//     collection: "summer",
//     isNew: true,
//     colors: ["Black", "Burgundy", "Cream"]
//   },
//   {
//     id: 4,
//     name: "Business Briefcase",
//     price: 299.99,
//     image: "https://images.pexels.com/photos/6624859/pexels-photo-6624859.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "briefcases",
//     collection: "classics",
//     isNew: false,
//     colors: ["Black", "Brown"]
//   },
//   {
//     id: 5,
//     name: "Travel Weekender",
//     price: 349.99,
//     image: "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "travel",
//     collection: "summer",
//     isNew: true,
//     colors: ["Tan", "Navy"]
//   },
//   {
//     id: 6,
//     name: "Slim Wallet",
//     price: 89.99,
//     image: "https://images.pexels.com/photos/6624987/pexels-photo-6624987.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "wallets",
//     collection: "classics",
//     isNew: false,
//     colors: ["Black", "Brown", "Burgundy"]
//   },
//   {
//     id: 7,
//     name: "Bucket Bag",
//     price: 199.99,
//     image: "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "crossbody",
//     collection: "summer",
//     isNew: true,
//     colors: ["Beige", "Black"]
//   },
//   {
//     id: 8,
//     name: "Laptop Sleeve",
//     price: 79.99,
//     image: "https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=800",
//     category: "accessories",
//     collection: "classics",
//     isNew: false,
//     colors: ["Black", "Brown"]
//   }
// ];

// const allCategories = ["All", "Jute Bags", "Big Shoppers", "Wedding Bags", "Yellow Bags"];
const allCollections = ["All", "classics", "summer"];

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeCollection, setActiveCollection] = useState("All");
    const [showFilters, setShowFilters] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const imageurl = "https://jute-be-production.up.railway.app"
    const [allCategories, setAllCategories] = useState([]);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const { categorySlug } = useParams();
    const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-');


    // useEffect(() => {
    //     const categoryParam = searchParams.get('category');
    //     const collectionParam = searchParams.get('collection');

    //     if (categoryParam) setActiveCategory(categoryParam);
    //     if (collectionParam) setActiveCollection(collectionParam);

    //     filterProducts(categoryParam || "All", collectionParam || "All");
    // }, [searchParams]);

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
    if (categorySlug) {
        const category = allCategories.find(cat => slugify(cat.name) === categorySlug);
        console.log("category", category);
        if (category) {
            setActiveCategory(category.id);
            filterProducts(category.id);
        }
        else {
            setActiveCategory("All");
            fetchData()
        }
    } else {
        fetchData();
    }
}, [categorySlug, allCategories])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jute-be-production.up.railway.app/api/products?populate=image'); // Replace with your API endpoint
            const data = response.data.data;
            console.log("data", data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const fetchCategories = async () => {
        try {
            const response = await axios.get('https://jute-be-production.up.railway.app/api/categories')
            const categories = response.data.data;
            console.log('Fetched cat:', categories);
            const categoriesWithAll = [{ id: 'All', name: 'All' }, ...categories.map(cat => ({
                id: cat.id,
                name: cat.name
            }))];
            setAllCategories(categoriesWithAll);
            console.log('Fetched categories:', categoriesWithAll);
        } catch (error) {
            console.error('Error fetching categories:', error);
            return [];
        }
    };

    const filterProducts = async (categoryId, collection) => {
        try {
            const res = await axios.get(
                `https://jute-be-production.up.railway.app/api/products?filters[category][id][$eq]=${categoryId}&populate=*`
            );
            setProducts(res.data.data);
        } catch (error) {
            console.error('Error filtering products:', error);
        }
    };


    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
        setProducts([]);
        console.log('Selected category:', categoryId);

        if (categoryId == 'All') {
            fetchData(); // fetch all products
        } else {
            filterProducts(categoryId, activeCollection);
        }

        if (categoryId === 'All') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryId);
        }

        setSearchParams(searchParams);
    };


    const handleCollectionChange = (collection) => {
        setActiveCollection(collection);
        setProducts([]);
        if (collection === "All") {
            searchParams.delete('collection');
        } else {
            searchParams.set('collection', collection);
        }

        setSearchParams(searchParams);
        filterProducts(activeCategory, collection);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

      const handleFilter = async () => {
    let query = `http://localhost:1337/api/products?populate=*&filters[price][$gte]=${min || 0}`;
    if (max) {
      query += `&filters[price][$lte]=${max}`;
    }

    try {
      const res = await axios.get(query);
      setProducts(res.data.data)
    } catch (err) {
      console.error("Failed to fetch filtered products", err)
    }
  }

  

    return (
        <PageTransition>
            {/* Hero Banner */}
            <section className="relative h-80 md:h-96 flex items-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40 z-10" />
                    <img
                        src="https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Shop banner"
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
                            Shop Collection
                        </motion.h1>
                        <motion.p
                            className="text-white/90 text-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Discover our handcrafted leather bags designed for modern life.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Shop Content */}
            <section className="py-12 bg-primary-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Mobile Filter Toggle */}
                        <div className="lg:hidden mb-4">
                            <button
                                onClick={toggleFilters}
                                className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-md shadow-sm border border-primary-100"
                            >
                                <span className="flex items-center">
                                    <Filter size={20} className="mr-2" />
                                    Filter Products
                                </span>
                                {showFilters ? <X size={20} /> : <span className="text-xs bg-primary-100 px-2 py-1 rounded-full">{filteredProducts.length}</span>}
                            </button>
                        </div>

                        {/* Sidebar Filters */}
                        <motion.aside
                            className={`lg:w-1/4 xl:w-1/5 ${showFilters ? 'block' : 'hidden'} lg:block bg-white p-6 rounded-lg shadow-sm h-fit`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Categories Filter */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    {allCategories?.map((category) => (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => handleCategoryChange(category.id)}
                                                className={`w-full text-left py-1 px-2 rounded-md transition-colors ${activeCategory === category.id
                                                    ? 'bg-primary-100 text-primary-900 font-medium'
                                                    : 'text-primary-600 hover:bg-primary-50'
                                                    }`}
                                            >
                                                {/* {category.charAt(0).toUpperCase() + category.slice(1)} */}
                                                {/* {category === "All" && (
                                                    <span className="ml-2 text-xs bg-primary-200 px-2 py-0.5 rounded-full">
                                                        {products.length}
                                                    </span>
                                                )} */} {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Collections Filter */}
                            {/* <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Collections</h3>
                                <ul className="space-y-2">
                                    {allCollections.map((collection) => (
                                        <li key={collection}>
                                            <button
                                                // onClick={() => handleCollectionChange(collection.id)}
                                                className={`w-full text-left py-1 px-2 rounded-md transition-colors ${activeCollection === collection
                                                    ? 'bg-primary-100 text-primary-900 font-medium'
                                                    : 'text-primary-600 hover:bg-primary-50'
                                                    }`}
                                            >
                                                {collection.charAt(0).toUpperCase() + collection.slice(1)}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}

                            {/* Price Range Filter */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="text-sm text-primary-500 mb-1 block">Min</label>
                                            <input
                                                type="number"
                                                placeholder="$0"
                                                className="w-full p-2 border border-primary-200 rounded-md"
                                                value={min}
                                                onChange={(e) => setMin(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-primary-500 mb-1 block">Max</label>
                                            <input
                                                type="number"
                                                placeholder="$500"
                                                className="w-full p-2 border border-primary-200 rounded-md"
                                                value={max}
                                                onChange={(e) => setMax(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <button
                                        className="w-full mt-2 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors"
                                        onClick={handleFilter}
                                    >
                                        Apply
                                    </button>
                                </div>
                            </div>

                            {/* Color Filter */}
                            {/* <div>
                                <h3 className="text-lg font-medium mb-4">Color</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Black", "Brown", "Tan", "Navy", "Burgundy", "Cream", "Beige"].map((color) => (
                                        <button
                                            key={color}
                                            className="px-3 py-1 border border-primary-200 rounded-full text-sm hover:bg-primary-50 transition-colors"
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div> */}
                        </motion.aside>

                        {/* Product Grid */}
                        <motion.div
                            className="lg:w-3/4 xl:w-4/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Results Summary */}
                            <div className="flex justify-between items-center mb-6">
                                <p className="text-primary-600">
                                    Showing <span className="font-medium text-primary-900">{products.length}</span> products
                                </p>
                                <div className="flex items-center gap-2">
                                    <label className="text-primary-600 hidden sm:inline">Sort by:</label>
                                    <select className="border border-primary-200 rounded-md p-2 bg-white">
                                        <option>Newest</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Best Selling</option>
                                    </select>
                                </div>
                            </div>

                            {/* Products */}
                            {products?.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products?.map((product, index) => (

                                        <motion.div
                                            key={product.id}
                                            className="group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            onMouseEnter={() => setHoveredProduct(product.id)}
                                            onMouseLeave={() => setHoveredProduct(null)}
                                        >
                                            <div className="bg-white rounded-lg overflow-hidden relative mb-4">
                                                {product.negotiable == "yes" && (
                                                    <div className="absolute top-3 left-3 z-10 bg-accent-600 text-white text-xs font-medium px-2 py-1 rounded">
                                                        Negotiable
                                                    </div>
                                                )}
                                                <div className="aspect-square overflow-hidden">
                                                    <img
                                                        src={`${imageurl}${product?.image?.url}`}
                                                        alt='jute bag'
                                                        className="w-full h-full object-cover  transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                                                {/* Quick actions */}
                                                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={hoveredProduct === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="w-full"
                                                    >
                                                        <Link to={`/product/${product.id}`} state={{ image: `${imageurl}${product?.image?.url}`, name: product.name , price: product.price , description: product.description, negotiable: product.negotiable }} className="w-full">
                                                            <Button  variant="primary" className="w-full flex items-center justify-center gap-2">
                                                                <ShoppingBag size={16} />
                                                                <span>Quick View</span>
                                                            </Button>
                                                        </Link>

                                                    </motion.div>
                                                </div>

                                                {/* Wishlist button */}
                                                <motion.button
                                                    className="absolute top-3 right-3 bg-white/80 hover:bg-white text-primary-900 p-2 rounded-full"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={hoveredProduct === product.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.2 }}
                                                    aria-label="Add to wishlist"
                                                >
                                                    <Heart size={16} />
                                                </motion.button>
                                            </div>

                                            <div className="text-center">
                                                <h3 className="font-medium text-lg mb-1">
                                                    <a href={`/product/${product.id}`} className="hover:text-accent-600 transition-colors">
                                                        {product.name}
                                                    </a>
                                                </h3>
                                                <p className="text-primary-900 font-semibold"> One Piece - ₹ {product.price}</p>
                                                {/* <div className="mt-2 flex justify-center gap-1">
                          {product.colors.map((color) => (
                            <span key={color} className="text-sm text-primary-500">
                              {color}{color !== product.colors[product.colors.length - 1] && ", "}
                            </span>
                          ))}
                        </div> */}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-lg p-8 text-center">
                                    <p className="text-lg mb-4">No products found matching your criteria.</p>
                                    <Button onClick={() => {
                                        setActiveCategory("All");
                                        setActiveCollection("All");
                                        setSearchParams({});
                                        setFilteredProducts(products);
                                    }}>
                                        Reset Filters
                                    </Button>
                                </div>
                            )}

                            {/* Pagination */}
                            {filteredProducts.length > 0 && (
                                <div className="flex justify-center mt-12">
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
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Shop;