'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Jakub.dev
        </Link>

        <div className={styles.desktopLinks}>
          <NavLinks />
        </div>

        <div className={styles.actions}>
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}

          <button onClick={toggleMenu} className={styles.burger} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavLinks onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { href: "/about", label: "O mnie" },
    { href: "/projects", label: "Projekty" },
    { href: "/contact", label: "Kontakt" },
    { href: "/blog", label: "Blog" },
    { href: "/cv", label: "CV" },
    { href: "/tech", label: "Stack" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className={styles.link} onClick={onClick}>
          {link.label}
        </Link>
      ))}
    </>
  );
}
