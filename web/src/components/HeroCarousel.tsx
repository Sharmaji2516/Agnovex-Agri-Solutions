"use client";

import { useState, useEffect } from 'react';
import styles from './HeroCarousel.module.css';
import { ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const banners = [
    {
      id: 1,
      type: 'image',
      src: '/hero_banner.jpg',
      alt: 'Special Offers Banner',
    },
    {
      id: 2,
      type: 'image',
      src: '/banner2.webp',
      alt: 'Janatha Agro Organic Inputs Banner',
    },
    {
      id: 3,
      type: 'image',
      src: '/banner3.webp',
      alt: 'Best Farm Implements Banner',
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length, isPaused]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Promotional Banners Carousel"
    >
      {/*
        carouselFrame is the ONE stable rectangle.
        Its height is locked via CSS for each breakpoint.
        It NEVER resizes based on image content.
      */}
      <div className={styles.carouselFrame}>
        {banners.map((banner, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={banner.id}
              className={`${styles.slide} ${isActive ? styles.active : styles.inactive}`}
              aria-hidden={!isActive}
            >
              {banner.type === 'image' && banner.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={banner.src}
                  alt={banner.alt || 'Banner'}
                  className={styles.bannerImage}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              )}
              {banner.type === 'css' && (
                <div
                  className={styles.cssBanner}
                  style={{ background: (banner as { background?: string }).background }}
                >
                  <div className={styles.cssBannerContent}>
                    <h2 className={styles.cssBannerTitle}>{(banner as { title?: string }).title}</h2>
                    <p className={styles.cssBannerSubtitle}>{(banner as { subtitle?: string }).subtitle}</p>
                    <button className={styles.cssBannerBtn}>
                      {(banner as { cta?: string }).cta} <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Dots Indicator — inside the frame so they overlay the banner */}
        <div className={styles.dotsContainer}>
          {banners.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
