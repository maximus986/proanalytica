import React, { useEffect, useState } from 'react';
import { useTranslation } from '@3nvi/gatsby-theme-intl';
import { MobileMenu } from './mobile-menu/MobileMenu';

const MOBILE_SCREEN_SIZE = 768;

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== `undefined`) {
      return window.innerWidth <= MOBILE_SCREEN_SIZE;
    }
  });
  const { t } = useTranslation();
  const handleNavToggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.contentBoxSize) {
          setIsMobile(entry.contentRect.width <= MOBILE_SCREEN_SIZE);
        }
      });
    });
    window.addEventListener('resize', () => {
      observer.observe(body);
    });
    return () => {
      window.removeEventListener('resize', () => {
        observer.unobserve(body);
      });
    };
  });
  return (
    <header>
      {isMobile ? (
        <MobileMenu isMenuOpen={isMenuOpen} onNavToggle={handleNavToggle} />
      ) : (
        <div>LARGE SCREEN</div>
      )}
    </header>
  );
};
