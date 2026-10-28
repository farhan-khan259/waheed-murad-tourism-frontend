import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext.jsx';
export default function ExperienceCard({ item, large = false }) {
  const { language, t } = useLanguage();
  const copy = language === 'ar' && item.ar ? { ...item, ...item.ar } : item;
  return <motion.article className={`experience-card ${large ? 'large' : ''}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <Link to={`/experiences/${item.slug}`} className="card-image"><img src={item.image} alt={copy.title} loading="lazy" /><span>{copy.category}</span><i className="card-view">{t.details}</i></Link>
    <div className="card-body"><div className="card-meta"><span><MapPin size={14} />{copy.destination}</span><span><Clock3 size={14} />{item.duration}</span></div><h3>{copy.title}</h3><p>{copy.summary}</p><div className="card-footer"><span className="price-note">{language === 'ar' ? 'السعر عند الطلب' : item.priceLabel}</span><div className="card-actions"><Link className="card-inquire" to={`/booking?experience=${item.slug}`}>{t.booking}</Link><Link className="card-arrow" to={`/experiences/${item.slug}`} aria-label={`View ${copy.title}`}><ArrowUpRight /></Link></div></div></div>
  </motion.article>;
}
