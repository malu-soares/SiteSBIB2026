'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const registrationUrl = 'https://www.sympla.com.br/evento-online/xxiv-semana-brasileira-de-informatica-biomedica/3093188';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cronograma', label: 'Cronograma' },
  { href: '/streamings', label: 'Transmissões' },
  { href: '/products', label: 'Produtos' },
  { href: '/past_editions', label: 'Edições anteriores' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-[var(--sbib-cream)]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="brand-logo text-[var(--sbib-black)]">SBIB</span>
          <span className="hidden font-display text-sm font-black uppercase leading-tight text-black sm:block">
            2026
            <br />
            USP - UFCSPA - UFPR
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm font-bold uppercase text-[var(--sbib-forest)] transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sbib-button px-5 py-2 text-sm"
          >
            Inscreva-se
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border-2 border-black text-black md:hidden"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`border-t-2 border-black bg-[var(--sbib-mist)] md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-black/20 py-3 font-display text-sm font-bold uppercase text-black"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="sbib-button mt-4 px-5 py-3 text-sm"
          >
            Inscreva-se
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
