"use client";

import * as React from 'react';
import { motion} from 'framer-motion'; // Para la animación
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Para cargar la imagen del logo y los iconos

export default function Footer() {
  // useRef para rastrear el footer


  // Estado para asegurarse de que la animación solo ocurra una vez
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  // Estado para rastrear la dirección del scroll
  const [scrollDirection, setScrollDirection] = useState('down');

  // Detectar cuándo está en vista
  const { ref, inView } = useInView({ triggerOnce: true });

  // Ejecutar animación solo una vez cuando entra en la vista
  useEffect(() => {
    if (inView && !hasBeenViewed) {
      setHasBeenViewed(true);
    }
  }, [inView, hasBeenViewed]);

  // Rastrear la dirección del scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <motion.footer
      ref={ref}
      className={`flex flex-col items-center justify-center py-4 z-50 bg-white text-black ${
        hasBeenViewed ? 'sticky bottom-0' : ''
      }`}
      initial={{ opacity: 0, y: 20 }} // Estado inicial de la animación
      animate={
        hasBeenViewed
          ? scrollDirection === 'down'
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 20 }
          : {}
      } // Animar según la dirección del scroll
      transition={{ duration: 1 }} // Duración de la animación
    >
      {/* Logo centrado */}
      <div className="mb-4 z-50">
        <Image
          src="/images/LogoMemeorial.svg"
          alt="Memeorial Logo"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Iconos de redes sociales centrados */}
      <div className="z-10 flex space-x-4">
        <a
          href="https://www.instagram.com/memeorialart/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-80"
        >
          <Image
            src="/images/Icoinstagram.svg"
            alt="Instagram Icon"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://x.com/Memeorialart?t=2y3O9tYiNCTyMbxx1x8yow&s=09"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:opacity-80"
        >
          <Image
            src="/images/IcoTwitter.svg"
            alt="Twitter Icon"
            width={30}
            height={30}
          />
        </a>
        <a
          href="https://opensea.io/collection/meme-orial-collection"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="OpenSea"
          className="hover:opacity-80"
        >
          <Image
            src="/images/IcoOpensea.svg"
            alt="OpenSea Icon"
            width={24}
            height={24}
          />
        </a>
      </div>
    </motion.footer>
  );
}