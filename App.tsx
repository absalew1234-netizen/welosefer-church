
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations } from './translations';
import { Language } from './types';
import { Menu, X, Globe, Phone, Mail, MapPin, Sun, Moon, MessageSquare, LogIn, UserPlus, LogOut, Facebook, Youtube, Video } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Developer from './pages/Developer';

const AuthModal = ({ 
  isOpen, 
  onClose, 
  authMode, 
  setAuthMode, 
  lang, 
  t, 
  setIsLoggedIn 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  authMode: 'login' | 'signup', 
  setAuthMode: (m: 'login' | 'signup') => void,
  lang: Language,
  t: any,
  setIsLoggedIn: (v: boolean) => void
}) => (
  <div 
    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    role="dialog"
    aria-modal="true"
    aria-labelledby="auth-modal-title"
    aria-hidden={!isOpen}
  >
    <div className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm" onClick={onClose}></div>
    <div className="relative bg-white dark:bg-gray-900 w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
      <div className="p-8 md:p-12">
        <div className="flex justify-between items-center mb-8">
          <h2 id="auth-modal-title" className="text-3xl font-black text-blue-900 dark:text-blue-400 tracking-tight uppercase">
            {authMode === 'login' ? t.auth.logIn : t.auth.signUp}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={lang === 'am' ? 'ዝጋ' : 'Close'}
          >
            <X size={20} />
          </button>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); onClose(); }}>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">{t.contact.email}</label>
            <input type="email" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none text-gray-900 dark:text-white outline-none ring-2 ring-transparent focus:ring-blue-600 transition-all font-bold" placeholder="email@example.com" />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">{lang === 'am' ? 'የይለፍ ቃል' : 'Password'}</label>
            <input type="password" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none text-gray-900 dark:text-white outline-none ring-2 ring-transparent focus:ring-blue-600 transition-all font-bold" />
          </div>

          {authMode === 'signup' && (
            <div className="flex items-center gap-3 px-2">
              <input type="checkbox" id="modal-subscribe" className="w-5 h-5 rounded border-none bg-gray-100 dark:bg-gray-800 text-blue-600 focus:ring-blue-600 cursor-pointer" />
              <label htmlFor="modal-subscribe" className="text-[10px] font-bold text-gray-500 uppercase tracking-wide leading-tight cursor-pointer">
                {lang === 'am' ? 'ተጨማሪ መረጃዎችን እና ወቅታዊ ዜናዎችን ለማግኘት እፈልጋለሁ' : 'I want to receive more updates and information'}
              </label>
            </div>
          )}

          <button className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest text-xs active:scale-95">
            {authMode === 'login' ? t.auth.logIn : t.auth.signUp}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
            className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:underline"
          >
            {authMode === 'login' 
              ? (lang === 'am' ? 'አዲስ አካውንት ለመክፈት' : 'Need an account? Sign Up') 
              : (lang === 'am' ? 'አካውንት ካለዎት ይግቡ' : 'Already have an account? Log In')}
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Header = ({ 
  lang, 
  setLang, 
  isDarkMode, 
  toggleDarkMode,
  isLoggedIn,
  setIsLoggedIn
}: { 
  lang: Language, 
  setLang: (l: Language) => void,
  isDarkMode: boolean,
  toggleDarkMode: () => void,
  isLoggedIn: boolean,
  setIsLoggedIn: (v: boolean) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'am' ? 'en' : 'am');
  };

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' },
    { name: t.nav.developer, path: '/developer' },
  ];

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  return (
    <nav 
      aria-label="Main Navigation"
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white dark:bg-gray-900 py-4'
      }`}
    >
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        authMode={authMode}
        setAuthMode={setAuthMode}
        lang={lang}
        t={t}
        setIsLoggedIn={setIsLoggedIn}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group" aria-label="Wolo Sefer Church Home">
              <div aria-hidden="true" className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-400 transform group-hover:rotate-12 transition-transform shadow-lg">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-black text-blue-900 dark:text-blue-400 tracking-tighter leading-none text-sm md:text-base uppercase">
                  {lang === 'am' ? 'ወሎ ሰፈር' : 'WOLO SEFER'}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                  {lang === 'am' ? 'ቅድስት ማርያም' : 'ST. MARY'}
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                role="menuitem"
                className={`relative px-4 py-2 text-[11px] font-black transition-all rounded-full uppercase tracking-widest ${
                  location.pathname === item.path 
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-100 dark:border-gray-800">
              {/* Authentication Buttons */}
              {!isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); }}
                    aria-label={t.auth.logIn}
                    className="flex items-center gap-2 px-4 py-2 text-[10px] font-black text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-blue-900 transition-all uppercase tracking-tight"
                  >
                    <LogIn size={14} aria-hidden="true" />
                    {t.auth.logIn}
                  </button>
                  <button 
                    onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); }}
                    aria-label={t.auth.signUp}
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all font-black text-[10px] shadow-lg uppercase tracking-tight border-2 border-blue-600"
                  >
                    <UserPlus size={14} aria-hidden="true" />
                    {t.auth.signUp}
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  aria-label={t.auth.logOut}
                  className="flex items-center gap-2 px-4 py-2 text-[10px] font-black text-red-600 dark:text-red-400 border-2 border-red-600 dark:border-red-400 rounded-xl hover:bg-red-600 hover:text-white transition-all uppercase tracking-tight"
                >
                  <LogOut size={14} aria-hidden="true" />
                  {t.auth.logOut}
                </button>
              )}

              <button
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? (lang === 'am' ? 'የብርሃን ሁነታን አብራ' : 'Switch to Light Mode') : (lang === 'am' ? 'የጨለማ ሁነታን አብራ' : 'Switch to Dark Mode')}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all shadow-sm"
              >
                {isDarkMode ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
              </button>

              <button
                onClick={toggleLang}
                aria-label={lang === 'am' ? 'ወደ እንግሊዝኛ ቀይር' : 'Switch to Amharic'}
                className="flex items-center gap-2 bg-blue-900 text-white px-3 py-2 rounded-xl hover:bg-blue-800 transition-all font-black text-[10px] shadow-md uppercase"
              >
                <Globe size={14} aria-hidden="true" />
                {lang === 'am' ? 'ENGLISH' : 'አማርኛ'}
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-3">
             <button 
                onClick={toggleDarkMode} 
                aria-label={isDarkMode ? (lang === 'am' ? 'የብርሃን ሁነታን አብራ' : 'Switch to Light Mode') : (lang === 'am' ? 'የጨለማ ሁነታን አብራ' : 'Switch to Dark Mode')}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? (lang === 'am' ? 'ዝጋ' : 'Close Menu') : (lang === 'am' ? 'ምናሌ' : 'Open Menu')}
              className="p-2 rounded-xl bg-blue-900 text-white shadow-lg"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-navigation"
        className={`lg:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ${isOpen ? 'top-full opacity-100 shadow-2xl' : '-top-[600px] opacity-0 pointer-events-none'}`}
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 rounded-2xl text-lg font-black text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-3 border-t border-gray-100 dark:border-gray-800">
             {!isLoggedIn ? (
               <div className="grid grid-cols-2 gap-2">
                 <button onClick={() => { setAuthMode('login'); setIsAuthModalOpen(true); setIsOpen(false); }} className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 font-black text-sm text-gray-700 dark:text-gray-200 uppercase"><LogIn size={18}/>{t.auth.logIn}</button>
                 <button onClick={() => { setAuthMode('signup'); setIsAuthModalOpen(true); setIsOpen(false); }} className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-yellow-400 font-black text-sm text-blue-900 uppercase"><UserPlus size={18}/>{t.auth.signUp}</button>
               </div>
             ) : (
               <button onClick={() => { setIsLoggedIn(false); setIsOpen(false); }} className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-red-600 font-black text-sm text-white uppercase"><LogOut size={18}/>{t.auth.logOut}</button>
             )}
            <button
              onClick={() => { toggleLang(); setIsOpen(false); }}
              className="w-full text-center flex items-center justify-center gap-3 py-4 rounded-2xl text-sm font-black text-white bg-blue-900 uppercase shadow-lg"
            >
              <Globe size={18} />
              {lang === 'am' ? 'English' : 'አማርኛ'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-gray-50 dark:bg-black py-20 border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold border-2 border-yellow-400">W</div>
              <h3 className="text-2xl font-black text-blue-900 dark:text-white uppercase">{lang === 'am' ? 'ወሎ ሰፈር ቤተክርስቲያን' : 'Wolo Sefer Church'}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              {t.home.intro}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest mb-6">{t.nav.contact}</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-bold">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("XQQF+9GJ, Addis Ababa")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={20} className="text-red-500" />
                </div>
                <span>Addis Ababa, Wolo Sefer</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-blue-500" />
                </div>
                <span>{lang === 'am' ? '+251 94 021 5521' : '+251 94 021 5521'}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-yellow-500" />
                </div>
                <span>{t.contact.displayEmail}</span>
              </div>
            </div>
            
            <div className="mt-10 p-6 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
              <h5 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                {lang === 'am' ? 'ለበለጠ መረጃ ይመዝገቡ' : 'Subscribe for Updates'}
              </h5>
              <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert(lang === 'am' ? 'ምዝገባው ተሳክቷል!' : 'Subscription successful!'); }}>
                <input 
                  type="email" 
                  required
                  placeholder={lang === 'am' ? 'ኢሜይል' : 'Email Address'} 
                  className="px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button type="submit" className="bg-blue-600 text-white py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg active:scale-95">
                  {lang === 'am' ? 'ይመዝገቡ' : 'Join Now'}
                </button>
              </form>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest mb-6">{t.contact.followUs}</h4>
            <div className="flex gap-4">
              <a href="https://web.facebook.com/people/%E1%89%A6%E1%88%8C-%E1%8B%88%E1%88%8E-%E1%88%B0%E1%8D%88%E1%88%AD-%E1%89%85%E1%8B%B5%E1%88%B5%E1%89%B5-%E1%88%9B%E1%88%AD%E1%8B%AB%E1%88%9D%E1%8A%93-%E1%89%85%E1%8B%B1%E1%88%B5-%E1%8C%88%E1%89%A5%E1%88%AD%E1%8A%A4%E1%88%8D-%E1%89%A4%E1%89%B0%E1%8A%AD%E1%88%AD%E1%88%B5%E1%89%B2%E1%8B%AB%E1%8A%95/61551674921669/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm" aria-label="Follow us on Facebook">
                <Facebook size={24} aria-hidden="true" />
              </a>
              <a href="https://youtu.be/6X7jibx_mMA?si=fzuVuBGRjTErTv5N" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-100 dark:bg-red-900/30 flex items-center justify-center rounded-2xl text-red-600 hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-sm" aria-label="Visit our YouTube channel">
                <Youtube size={24} aria-hidden="true" />
              </a>
              <a href="https://www.tiktok.com/@hailemikel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-2xl text-black dark:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-all transform hover:-translate-y-1 shadow-sm" aria-label="Follow us on TikTok">
                <Video size={24} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest mb-6">{t.nav.services}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-loose">{t.about.hours}</p>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-gray-400 dark:text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Wolo Sefer EOTC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500 ${lang === 'am' ? 'font-amharic' : 'font-sans'}`}>
        <Header 
          lang={lang} 
          setLang={setLang} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/gallery" element={<Gallery lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
            <Route path="/developer" element={<Developer lang={lang} />} />
          </Routes>
        </main>
        
        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <Link 
            to="/contact" 
            aria-label={lang === 'am' ? 'አግኙን' : 'Contact Us'}
            className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group"
          >
            <MessageSquare size={28} aria-hidden="true" />
            <span className="absolute right-20 bg-blue-900 text-white px-4 py-2 rounded-xl text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {lang === 'am' ? 'አግኙን' : 'Contact Us'}
            </span>
          </Link>
        </div>

        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;
