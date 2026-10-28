import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronDown, Globe2, MapPin, Menu, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import Logo from './Logo.jsx';

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { language, setLanguage, t } = useLanguage();
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }, [pathname]);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 36); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => {
    const onImageError = (event) => {
      const image = event.target;
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = 'true';
      image.src = '/images/experiences/dubai-skyline.jpg';
    };
    document.addEventListener('error', onImageError, true);
    return () => document.removeEventListener('error', onImageError, true);
  }, []);
  const links = [['/desert-safari', t.nav.desert], ['/dubai-tours', t.nav.city], ['/abu-dhabi-tours', t.nav.abu], ['/attractions', t.nav.attractions]];
  const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`navbar luxury-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-frame">
      <Link to="/" className="brand"><Logo /></Link>
      <nav className={`navlinks ${open ? 'is-open' : ''}`} aria-label="Main navigation">
        <div className="nav-dropdown"><NavLink to="/experiences">{t.nav.experiences}<ChevronDown /></NavLink><div className="mega-menu"><div><span>EXPLORE BY EXPERIENCE</span>{links.map(([to,label])=><Link key={to} to={to}>{label}<ArrowUpRight/></Link>)}</div><div><span>PRIVATE TRAVEL</span><Link to="/airport-transfers">Airport transfers<ArrowUpRight/></Link><Link to="/transfers">Chauffeur services<ArrowUpRight/></Link><Link to="/corporate">Corporate & groups<ArrowUpRight/></Link></div><Link className="mega-feature" to="/experiences/private-desert-evening"><strong>Signature desert evening</strong><small>Private pacing. Golden-hour landscape.</small></Link></div></div>
        <NavLink to="/destinations">{t.nav.destinations}</NavLink><NavLink to="/transfers">{t.nav.transfers}</NavLink><NavLink to="/guides">{t.nav.guides}</NavLink><NavLink to="/offers">{t.nav.offers}</NavLink>
        <div className="mobile-nav-actions"><Link className="button button-gold" to="/booking">{t.booking}</Link></div>
      </nav>
      <div className="nav-actions">
        <button className="language-switch" onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} aria-label="Switch language"><Globe2/>{language === 'en' ? 'عربي' : 'EN'}</button>
        <Link className="nav-booking" to="/booking"><span>{t.booking}</span><ArrowUpRight /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? t.close : t.menu}>{open ? <X /> : <Menu />}</button>
      </div>
      </div>
    </header>
    <main id="main"><Outlet /></main>
    <footer className="luxury-footer">
      <div className="footer-aura" />
      <div className="footer-cta">
        <div><span className="footer-index">WMT / DUBAI / UAE</span><span className="eyebrow">Your next chapter</span></div>
        <h2>Exceptional journeys<br/>begin with a <em>conversation.</em></h2>
        <Link to="/booking" className="footer-cta-link"><span>Plan your journey</span><ArrowRight /></Link>
      </div>
      <div className="footer-main">
        <div className="footer-brand"><Link to="/" className="footer-logo"><Logo /></Link><p>Thoughtfully arranged tours and private transportation across Dubai and the UAE.</p><div className="footer-location"><MapPin/><span>Dubai<br/>United Arab Emirates</span></div></div>
        <div className="footer-column"><span>Explore</span><Link to="/experiences">All experiences</Link><Link to="/desert-safari">Desert journeys</Link><Link to="/dubai-tours">Dubai city</Link><Link to="/abu-dhabi-tours">Abu Dhabi</Link><Link to="/attractions">Attractions</Link></div>
        <div className="footer-column"><span>Travel</span><Link to="/airport-transfers">Airport transfers</Link><Link to="/transfers">Private chauffeur</Link><Link to="/corporate">Corporate & groups</Link><Link to="/destinations">Destinations</Link><Link to="/guides">Travel guides</Link></div>
        <div className="footer-column"><span>Information</span><Link to="/about">Our story</Link><Link to="/faq">Frequently asked</Link><Link to="/contact">Contact</Link><Link to="/travel-information">Before you travel</Link><Link to="/policies/privacy">Privacy</Link></div>
      </div>
      <div className="footer-signature"><span>WAHEED MURAD</span><small>TOURISM & TRANSPORTATION</small></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Waheed Murad Tourism & Transportation</span><div><button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>{language === 'en' ? 'العربية' : 'English'}</button><Link to="/policies/terms">Terms</Link><Link to="/policies/cancellation">Cancellation</Link></div><span>Request first · Confirmed personally</span></div>
    </footer>
    {whatsapp ? <a className="whatsapp-float" href={`https://wa.me/${whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent('Hello, I would like to enquire about a UAE experience.')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry"><MessageCircle /><span>WhatsApp</span></a> : <Link className="whatsapp-float" to="/contact" aria-label="Contact enquiry"><MessageCircle /><span>Enquire</span></Link>}
  </div>;
}
