"use client";

import * as React from 'react';
import { motion, useInView } from 'framer-motion'; // Para la animación
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image'; // Para cargar la imagen del logo y los iconos

export default function Footer() {
  // useRef para rastrear el footer
  const refFooter = useRef(null);

  // Estado para asegurarse de que la animación solo ocurra una vez
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  // Detectar cuándo está en vista
  const inView = useInView(refFooter);

  // Ejecutar animación solo una vez cuando entra en la vista
  useEffect(() => {
    if (inView && !hasBeenViewed) {
      setHasBeenViewed(true);
    }
  }, [inView, hasBeenViewed]);

  return (
    <motion.footer
      ref={refFooter}
      className="  flex flex-col items-center justify-center py-4 z-50 bg-white text-black"
      initial={{ opacity: 0, y: 20 }} // Estado inicial de la animación
      animate={hasBeenViewed ? { opacity: 1, y: 0 } : {}} // Solo animar si está en vista
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
