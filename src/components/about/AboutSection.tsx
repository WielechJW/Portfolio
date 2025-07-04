'use client';

import { motion } from 'framer-motion';
import styles from './AboutSection.module.scss';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.text}>
          <h2>Kim jestem?</h2>
          <p>
            Nazywam się Jakub Wielechowski i jestem frontend developerem z pasją do tworzenia dopracowanych aplikacji webowych. Specjalizuję się w React, Next.js i nowoczesnych technologiach frontendowych. Uwielbiam czysty kod, animacje, performance i przemyślane UI.
          </p>
          <p>
            Na co dzień rozwijam projekty komercyjne i prywatne – zawsze z nastawieniem na jakość i rozwój. Pracuję z wykorzystaniem TypeScriptu, SCSS/Tailwind, Headless CMS i JAMstackowych podejść.
          </p>

          <div className={styles.tech}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>SCSS</span>
            <span>Tailwind</span>
            <span>Strapi</span>
          </div>

          <Link href="/cv" className={styles.btn}>
            Zobacz moje CV <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.image}>
          <motion.img
            src="/images/avatar.png"
            alt="Jakub Wielechowski"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </section>
  );
}
