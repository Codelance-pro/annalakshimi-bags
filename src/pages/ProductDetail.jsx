import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Truck, Shield, RefreshCw, ChevronRight, ChevronLeft, Minus, Plus, Heart, Share2 } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Button from '../components/ui/Button';
import axios from 'axios';

// Mock data - would be fetched from Strapi in real implementation
const products = [
    {
        id: "1",
        name: "Classic Tote",
        price: 249.99,
        description: "Our signature tote crafted from premium full-grain leather. This timeless design features a spacious interior with a padded laptop sleeve, multiple organizational pockets, and secure top closure. The Classic Tote is built to accompany you through your daily adventures while developing a rich patina that tells your unique story.",
        features: [
            "Premium full-grain leather",
            "Cotton twill lining",
            "Interior laptop sleeve (fits up to 15\")",
            "Two interior slip pockets",
            "One interior zippered pocket",
            "Magnetic snap closure",
            "Dual top handles with 9\" drop",
            "Adjustable, removable shoulder strap",
            "Brass hardware with antique finish",
            "Dimensions: 16\"W x 12\"H x 5\"D"
        ],
        colors: [
            { name: "Black", code: "#1a181a" },
            { name: "Brown", code: "#5C4033" },
            { name: "Tan", code: "#D2B48C" }
        ],
        images: [
            "https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=1280",
            "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1280",
            "https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1280",
            "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1280"
        ],
        rating: 4.8,
        reviewCount: 124,
        inStock: true,
        relatedProducts: [2, 3, 7]
    }
];

const ProductDetail = () => {
    const { id } = useParams()
    const location = useLocation()
    //   const product = products.find(p => p.id === id) || products[0];
    const [product, setProducts] = useState([])
    const imageurl = "http://localhost:1337"
    // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('description');
    const [imageUrls, setImageUrls] = useState([]);
    const [mainImage, setMainImage] = useState(location.state?.image || []);

    const [productName, setProductName] = useState(location.state?.name || "Product Name");
    const [productDescription, setProductDescription] = useState(location.state?.description || "Product Description");
    const [productPrice, setProductPrice] = useState(location.state?.price || 0);
    const [productNegotiable, setProductNegotiable] = useState(location.state?.negotiable || false);



    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                    `https://jute-be-production.up.railway.app/api/pictures?filters[product][id][$eq]=${id}&populate=image`
                );

                const fetchedImages = response.data.data.flatMap(picture =>
                    picture.image.map(img =>
                        `https://jute-be-production.up.railway.app${img.url}`
                    )
                );

                const mergedImages = location.state?.image
                    ? [location.state.image, ...fetchedImages.filter(img => img !== location.state.image)]
                    : fetchedImages;

                setImageUrls(mergedImages);
                setMainImage(prev => prev || mergedImages[0]); // fallback if state is empty
            } catch (err) {
                console.error("Error fetching images:", err);
            }
        };

        fetchImages();
    }, [id]);



    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
    };

    const setImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <PageTransition>
            <section className="py-12 bg-primary-50">
                <div className="container-custom">
                    {/* Breadcrumbs */}
                    <div className="mb-8">
                        <nav className="flex">
                            <ol className="flex items-center">
                                <li className="text-primary-500">
                                    <a href="/" className="hover:text-accent-600 transition-colors">Home</a>
                                </li>
                                <ChevronRight size={16} className="mx-2 text-primary-400" />
                                <li className="text-primary-500">
                                    <a href="/shop" className="hover:text-accent-600 transition-colors">Shop</a>
                                </li>
                                <ChevronRight size={16} className="mx-2 text-primary-400" />
                                <li className="text-primary-900 font-medium">
                                    {product.name}
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Product Images */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            {/* Main Image */}
                            <div className="bg-white rounded-lg overflow-hidden relative aspect-square">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={mainImage}
                                        src={imageUrls[currentImageIndex] || mainImage}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </AnimatePresence>

                                {/* Navigation arrows */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-300 shadow-sm"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-300 shadow-sm"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {imageUrls.map((url, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setMainImage(url)}
                                        className={`w-24 h-24 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${currentImageIndex === index ? 'border-accent-600 shadow-md' : 'border-transparent'
                                            }`}
                                    >
                                        <img
                                            src={url}
                                            // alt={`${productName} thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{productName}</h1>

                            {/* <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                                        />
                                    ))}
                                    <span className="ml-2 text-primary-600">{product.rating}</span>
                                </div>
                                <span className="text-primary-500">|</span>
                                <a href="#reviews" className="text-primary-600 hover:text-accent-600 transition-colors">
                                    {product.reviewCount} reviews
                                </a>
                            </div> */}

                            {/* <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p> */}

                            {/* <div className="mb-8">
                                <h3 className="font-medium mb-3">Color</h3>
                                <div className="flex gap-3">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 rounded-full transition-all ${selectedColor.name === color.name ? 'ring-2 ring-offset-2 ring-accent-600' : ''
                                                }`}
                                            style={{ backgroundColor: color.code }}
                                            aria-label={`Select ${color.name} color`}
                                        />
                                    ))}
                                </div>
                                <p className="mt-2 text-primary-600">
                                    Selected: <span className="font-medium text-primary-900">{selectedColor.name}</span>
                                </p>
                            </div> */}

                            {/* Quantity Selector */}
                            {/* <div className="mb-8">
                                <h3 className="font-medium mb-3">Quantity</h3>
                                <div className="flex items-center">
                                    <button
                                        onClick={decrementQuantity}
                                        className="w-10 h-10 bg-primary-100 rounded-l-md flex items-center justify-center hover:bg-primary-200 transition-colors"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        min="1"
                                        className="w-16 h-10 border-y border-primary-200 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <button
                                        onClick={incrementQuantity}
                                        className="w-10 h-10 bg-primary-100 rounded-r-md flex items-center justify-center hover:bg-primary-200 transition-colors"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div> */}

                            {/* Add to Cart and Wishlist */}
                            <div className="flex flex-wrap gap-4 mb-8 mt-10">
                                <Button
                                    variant="accent"
                                    size="lg"
                                    className="flex-grow sm:flex-grow-0"
                                    onClick={() => window.location.href = "tel:+916374286960"}
                                >
                                    Contact Us
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="flex-grow sm:flex-grow-0"
                                >
                                    <Heart size={20} className="mr-2" />
                                    Negotiable {productNegotiable ? "Yes" : "No"}
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="p-3"
                                    onClick={() => {
                                        const productUrl = window.location.href; // current product URL
                                        if (navigator.share) {
                                            navigator.share({
                                                title: "Check out this product!",
                                                url: productUrl,
                                            }).catch((error) => console.error("Share failed:", error));
                                        } else {
                                            navigator.clipboard.writeText(productUrl);
                                            alert("Link copied to clipboard");
                                        }
                                    }}
                                >
                                    <Share2 size={20} />
                                </Button>
                            </div>

                            {/* Product Benefits */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                    <Truck className="text-accent-600" />
                                    <div>
                                        <p className="font-medium">Shipping Available</p>
                                        <p className="text-sm text-primary-500">We ship products directly upon contact</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                    <Shield className="text-accent-600" />
                                    <div>
                                        <p className="font-medium">Direct Purchase</p>
                                        <p className="text-sm text-primary-500">To order this product, please contact us</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                    <RefreshCw className="text-accent-600" />
                                    <div>
                                        <p className="font-medium">No Online Checkout</p>
                                        <p className="text-sm text-primary-500">All orders are handled manually via contact</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                                    <Shield className="text-accent-600" />
                                    <div>
                                        <p className="font-medium">Secure & Personal</p>
                                        <p className="text-sm text-primary-500">We ensure safe and direct communication</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Product Details Tabs */}
                    <div className="mt-16">
                        <div className="border-b border-primary-200 mb-8">
                            <nav className="flex gap-8">
                                {[
                                    { id: 'description', label: 'Description' },
                                    { id: 'shipping', label: 'Shipping & Returns' }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`pb-4 font-medium relative ${activeTab === tab.id
                                            ? 'text-primary-900'
                                            : 'text-primary-500 hover:text-primary-800'
                                            }`}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-600"
                                            />
                                        )}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-white rounded-lg p-8">
                            {activeTab === 'description' && (
                                <div>
                                    <h2 className="text-2xl font-serif mb-6">About this Product</h2>
                                    <p className="text-primary-700 mb-6 leading-relaxed">
                                        {productDescription}
                                    </p>
                                    {/* <p className="text-primary-700 leading-relaxed">
                                        Every LUXE bag is handcrafted by our skilled artisans, ensuring that no two pieces are exactly alike. We use only the finest materials, sourced responsibly to minimize environmental impact while maximizing durability and beauty.
                                    </p> */}
                                </div>
                            )}

                            {activeTab === 'features' && (
                                <div>
                                    <h2 className="text-2xl font-serif mb-6">Features & Specifications</h2>
                                    <ul className="space-y-3">
                                        {product.features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-accent-600 mr-2">•</span>
                                                <span className="text-primary-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <h3 className="text-xl font-medium mb-4">Care Instructions</h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <span className="text-accent-600 mr-2">•</span>
                                                <span className="text-primary-700">Clean with a soft, dry cloth</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-accent-600 mr-2">•</span>
                                                <span className="text-primary-700">Apply leather conditioner every 3-6 months</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-accent-600 mr-2">•</span>
                                                <span className="text-primary-700">Avoid exposure to extreme heat, water, and direct sunlight</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="text-accent-600 mr-2">•</span>
                                                <span className="text-primary-700">Store in the provided dust bag when not in use</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div>
                                    <h2 className="text-2xl font-serif mb-6">Customer Reviews</h2>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="text-4xl font-bold">{product.rating}</div>
                                        <div>
                                            <div className="flex mb-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={20}
                                                        className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-primary-500">Based on {product.reviewCount} reviews</p>
                                        </div>
                                    </div>

                                    {/* Sample Reviews */}
                                    <div className="space-y-8">
                                        {[
                                            {
                                                name: "Jennifer M.",
                                                date: "2 months ago",
                                                rating: 5,
                                                content: "I've had my eye on this bag for months, and I finally decided to treat myself. The quality is exceptional - the leather is buttery soft but feels substantial and durable. The organization inside is perfect for my daily essentials, and it transitions seamlessly from work to weekend. Worth every penny!"
                                            },
                                            {
                                                name: "David L.",
                                                date: "3 weeks ago",
                                                rating: 4,
                                                content: "Bought this as a gift for my wife, and she absolutely loves it. The craftsmanship is evident in every detail. The only reason for 4 stars instead of 5 is that the shoulder strap could be slightly more comfortable for long-term wear. Otherwise, it's a beautiful, functional bag."
                                            }
                                        ].map((review, index) => (
                                            <div key={index} className="pb-8 border-b border-primary-100 last:border-0">
                                                <div className="flex justify-between mb-2">
                                                    <p className="font-medium">{review.name}</p>
                                                    <p className="text-primary-500 text-sm">{review.date}</p>
                                                </div>
                                                <div className="flex mb-3">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                                                        />
                                                    ))}
                                                </div>
                                                <p className="text-primary-700">{review.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 text-center">
                                        <Button variant="secondary">View All Reviews</Button>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'shipping' && (
                                <div>
                                    <h2 className="text-2xl font-serif mb-6">Shipping & Returns</h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-medium mb-3">Shipping</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">All products are shipped directly by us after order confirmation.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">We currently offer standard shipping across India.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">Shipping time may vary based on location. You will be notified personally.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">No automated checkout – please <strong>contact us</strong> to place an order and get delivery info.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-medium mb-3">Returns & Exchanges</h3>
                                            <ul className="space-y-3">
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">Returns are accepted only for damaged or defective items.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">Please inspect your item upon delivery and report any issues within 48 hours.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">Return shipping will be coordinated directly by our team.</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-accent-600 mr-2">•</span>
                                                    <span className="text-primary-700">Custom-made products are non-returnable and non-refundable.</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="text-primary-700">
                                                Have questions? Reach out to us directly through the
                                                <a href="/contact" className="text-accent-600 hover:text-accent-700 ml-1">
                                                    Contact Us
                                                </a>
                                                page for more details on shipping and return support.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default ProductDetail;