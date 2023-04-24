import React from 'react';
import styles from '../styles/style.module.css';

const LeeBoy = () => {
  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className="text-xl font-bold">Lee Boy</div>
        <nav className={styles.nav}>
          <a href="#flavors">Flavors</a>
          <a href="#features">Unique Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Banner */}
      <div className={styles.banner}>
        <h1>Welcome to Lee Boy Sparkling Water!</h1>
      </div>

      {/* FlavorsSection */}
      <section id="flavors" className={styles.flavorsSection}>
        <h2 className="text-3xl font-bold mb-8">Flavors</h2>
        <div className={styles.flavorsGrid}>
          {/* Add flavor cards here */}
          {/* Example of a flavor card: */}
          <div className={styles.flavorCard}>
            <img src="IMAGE_URL" alt="Flavor Image" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Flavor Name</h3>
            <p className="text-gray-600">Flavor description</p>
          </div>
        </div>
      </section>

      {/* UniqueFeatures */}
      <section id="features" className={styles.featuresSection}>
        <h2 className="text-3xl font-bold mb-8">Why Lee Boy Sparkling Water?</h2>
        <div className={styles.featuresGrid}>
          {/* Add feature cards here */}
          {/* Example of a feature card: */}
          <div className={styles.featureCard}>
            <img src="IMAGE_URL" alt="Feature Image" className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold mb-2">Feature Name</h3>
            <p className="text-gray-600">Feature description</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>
          <h3 className="text-xl font-bold">Lee Boy Sparkling Water</h3>
          <p>&copy; {(new Date()).getFullYear()} Lee Boy. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p>Email: info@leeboy.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
};

export default LeeBoy;
