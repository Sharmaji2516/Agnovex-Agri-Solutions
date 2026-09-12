import Image from 'next/image';
import styles from './page.module.css';
import { Leaf, Sprout, Tractor, Bug, Droplets, PawPrint } from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';

export default function Home() {
  const categories = [
    { name: 'Offers', icon: <Leaf size={32} color="#22c55e" /> },
    { name: 'Seeds', icon: <Sprout size={32} color="#22c55e" /> },
    { name: 'Crop Protection', icon: <Bug size={32} color="#22c55e" /> },
    { name: 'Crop Nutrition', icon: <Droplets size={32} color="#22c55e" /> },
    { name: 'Equipments', icon: <Tractor size={32} color="#22c55e" /> },
    { name: 'Animal Husbandry', icon: <PawPrint size={32} color="#22c55e" /> },
  ];

  const featuredProducts = [
    { id: 1, name: 'Premium Hybrid Tomato Seeds (10g)', price: '₹350', originalPrice: '₹500', discount: '30% OFF', image: '/product1.jpg' },
    { id: 2, name: 'Organic NPK Fertilizer (1kg)', price: '₹120', originalPrice: '₹150', discount: '20% OFF', image: '/product1.jpg' },
    { id: 3, name: 'Battery Operated Knapsack Sprayer', price: '₹2,500', originalPrice: '₹3,200', discount: '22% OFF', image: '/product1.jpg' },
    { id: 4, name: 'Systemic Insecticide for Whitefly', price: '₹450', originalPrice: '₹600', discount: '25% OFF', image: '/product1.jpg' },
  ];

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Shop by Category</h2>
          <div className={styles.categoryGrid}>
            {categories.map((cat, idx) => (
              <div key={idx} className={styles.categoryTile}>
                <div className={styles.categoryIcon}>
                  {cat.icon}
                </div>
                <span className={styles.categoryName}>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Banner Strip */}
      <div className={styles.offerStrip}>
        <div className="container">
          🔥 SUPER SAVER WEEK: Get Flat 20% Off on all Hybrid Seeds! Use code: SEED20 🔥
        </div>
      </div>

      {/* Featured Products */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Deals of the Day</h2>
            <button className={styles.viewAllBtn}>View All Offers</button>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <div className={styles.discountBadge}>{product.discount}</div>
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill
                    className={styles.productImage}
                  />
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.productPrice}>{product.price}</span>
                    <span className={styles.originalPrice}>{product.originalPrice}</span>
                  </div>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
