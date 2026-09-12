import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#22c55e' }}>Agnovex Agri Solutions</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#cbd5e1' }}>
              Your one-stop destination for premium agricultural products, seeds, fertilizers, and farming equipment. Empowering farmers with the best tools.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link href="/contact" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link href="/faq" style={{ color: '#cbd5e1', textDecoration: 'none' }}>FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Categories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link href="/seeds" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Seeds</Link></li>
              <li><Link href="/fertilizers" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Fertilizers</Link></li>
              <li><Link href="/equipments" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Equipments</Link></li>
              <li><Link href="/offers" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Special Offers</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Contact Us</h3>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '0.5rem' }}>
              <strong>Email:</strong> support@agnovex.com
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '0.5rem' }}>
              <strong>Phone:</strong> 1800-3000-0000
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#cbd5e1' }}>
              <strong>Address:</strong> 123 Farming Hub, Agri Sector, New Delhi, India
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#94a3b8' }}>
          &copy; {new Date().getFullYear()} Agnovex Agri Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
