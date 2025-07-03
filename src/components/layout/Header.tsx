"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 border-b border-gray-200 dark:border-gray-800">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-4 sm:px-8">
        <Link href="/" className="text-xl font-bold">
          Jakub.dev
        </Link>
        <div className="space-x-4">
          <Link href="/about">O mnie</Link>
          <Link href="/projects">Projekty</Link>
          <Link href="/contact">Kontakt</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/cv">CV</Link>
          <Link href="/tech">Stack</Link>
        </div>
      </nav>
    </header>
  );
}
