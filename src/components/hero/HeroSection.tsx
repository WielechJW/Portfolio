'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>
          Cześć, jestem <span className={styles.name}>Jakub Wielechowski</span><br />
          <span className={styles.typewriter}>
            <Typewriter
              words={[
                'Frontend Developerem',
                'React Ninją',
                'Next.js Fanem',
                'Z pasją do detali',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </span>
        </h1>

        <p className={styles.subtitle}>
          Tworzę szybkie, nowoczesne i dopracowane aplikacje webowe. Zobacz moje projekty i przekonaj się sam.
        </p>

        <motion.a
          href="#projekty"
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Zobacz portfolio
        </motion.a>
      </motion.div>

      <div className={styles.bgOverlay} />
      <div className={styles.scrollIndicator}>
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
