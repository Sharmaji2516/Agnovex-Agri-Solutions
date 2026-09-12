import Image from 'next/image';
import Link from 'next/link';
import { Search, MapPin, User, ShoppingCart, Heart, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <Link href="/sell" className={styles.topBarLink}>Sell on AgriShop</Link>
          <Link href="/bulk" className={styles.topBarLink}>Bulk Order Inquiries</Link>
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Missed Call To Order: 1800-3000-0000</span>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.mainHeader}>
        <div className={`container ${styles.mainHeaderInner}`}>
          <Link href="/">
            <Image src="/logo.jpg" alt="Logo" width={160} height={48} className={styles.logo} />
          </Link>

          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} size={20} />
            <input 
              type="text" 
              placeholder="Search for seeds, fertilizers, equipments..." 
              className={styles.searchInput}
            />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.languageSelector}>
              <span className={styles.langText}>English</span>
              <ChevronDown size={16} className={styles.langIcon} />
            </div>

            <div className={styles.actions}>
            <button className={`${styles.actionItem} ${styles.showOnMobile}`}>
              <Search size={24} />
              <span>Search</span>
            </button>
            <button className={`${styles.actionItem} ${styles.hideOnMobile}`}>
              <MapPin size={24} />
              <span>Track Order</span>
            </button>
            <button className={`${styles.actionItem} ${styles.hideOnMobile}`}>
              <Heart size={24} />
              <span>Wishlist</span>
            </button>
            <button className={styles.actionItem}>
              <User size={24} />
              <span>Login</span>
            </button>
            <button className={styles.actionItem}>
              <ShoppingCart size={24} />
              <span>Cart</span>
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={`container ${styles.navBarInner}`}>
          <Link href="/brands" className={styles.navLink}>Brands</Link>
          <Link href="/seeds" className={styles.navLink}>Seeds</Link>
          <Link href="/crop-protection" className={styles.navLink}>Crop Protection</Link>
          <Link href="/crop-nutrition" className={styles.navLink}>Crop Nutrition</Link>
          <Link href="/equipments" className={styles.navLink}>Equipments</Link>
          <Link href="/animal-husbandry" className={styles.navLink}>Animal Husbandry</Link>
          <Link href="/organic" className={styles.navLink}>Organic</Link>
        </div>
      </nav>
    </header>
  );
}
