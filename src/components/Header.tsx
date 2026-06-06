import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, MessageSquare, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O que é AGC?', href: '#o-que-e' },
    { label: 'Atuação', href: '#areas' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Processo', href: '#processo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Escritório', href: '#escritorios' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
            : 'bg-gradient-to-b from-brand-dark/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4 h-11 relative">
            
            {/* MOBILE LAYOUT: Compresses everything to Hamburger LEFT and Logo RIGHT */}
            <div className="flex lg:hidden items-center justify-between w-full">
              {/* Hamburger Left */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Logo Right */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-1"
              >
                <span className={`text-2xl font-display font-extrabold tracking-widest ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  AGC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse font-sans">.</span>
              </a>
            </div>

            {/* DESKTOP LAYOUT (>= 1024px): Symmetrically aligned with dynamic flex distribution */}
            
            {/* Desktop Navigation Left */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 justify-start flex-1 whitespace-nowrap">
              {menuItems.slice(0, 3).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs xl:text-sm font-semibold tracking-wide hover:opacity-85 hover:text-red-500 transition-colors uppercase ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Logo Center */}
            <div className="hidden lg:flex items-center justify-center shrink-0 px-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center space-x-1"
              >
                <span className={`text-xl xl:text-2xl font-display font-extrabold tracking-widest ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  AGC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
              </a>
            </div>

            {/* Desktop Navigation Right */}
            <div className="hidden lg:flex items-center justify-between flex-1 pl-4 xl:pl-8">
              <div className="flex items-center space-x-4 xl:space-x-6 whitespace-nowrap">
                {menuItems.slice(3).map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xs xl:text-sm font-semibold tracking-wide hover:opacity-85 hover:text-red-500 transition-colors uppercase ${
                      isScrolled ? 'text-slate-705 text-slate-700' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Action and Social buttons */}
              <div className="flex items-center space-x-2 xl:space-x-3 ml-4 shrink-0">
                <a
                  id="header-ig"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`p-1.5 xl:p-2 rounded-full transition-colors ${
                    isScrolled
                      ? 'text-slate-600 hover:bg-slate-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  id="header-wa"
                  href="https://wa.me/5571999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%25."
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 xl:px-4 rounded-full text-[11px] xl:text-xs font-semibold tracking-wider flex items-center space-x-1.5 shadow-md shadow-emerald-950/10 transition-transform hover:scale-105 active:scale-95 shrink-0"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WHATSAPP</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-14 z-40 lg:hidden bg-brand-dark/95 backdrop-blur-lg border-b border-slate-800 text-white shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-medium tracking-wide hover:text-red-500 transition-colors py-2 uppercase border-b border-slate-800/50"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <a
                  id="drawer-wa"
                  href="https://wa.me/5571999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%2520um%2520diagn%25C3%25B3stico%25."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-semibold tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/20"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>FALAR NO WHATSAPP</span>
                </a>
                
                <div className="flex justify-center space-x-4 pt-2">
                  <a
                    id="drawer-ig"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-white px-4 py-2 border border-slate-800 rounded-lg text-sm bg-slate-900/40"
                  >
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>@agc.performance</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
