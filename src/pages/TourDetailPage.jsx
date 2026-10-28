import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Clock3, Languages, MapPin, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { experiences } from '../data/experiences.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import NotFoundPage from './NotFoundPage.jsx';

export default function TourDetailPage() {
  const { slug } = useParams(); const { language } = useLanguage(); const item=experiences.find(x=>x.slug===slug); const copy=language==='ar'&&item?.ar?{...item,...item.ar}:item;
  useEffect(()=>{if(item)document.title=`${copy.title} | Waheed Murad Tourism`},[item,copy?.title]);
  if(!item)return <NotFoundPage/>;
  const related=experiences.filter(x=>x.slug!==item.slug&&(x.category===item.category||x.destination===item.destination)).slice(0,3);
  const whatsapp=import.meta.env.VITE_WHATSAPP_NUMBER;
  return <>
    <section className="detail-hero"><img src={item.image} alt={copy.title}/><div className="detail-overlay"><span className="eyebrow">{item.eyebrow}</span><h1>{copy.title}</h1><div><span><MapPin/>{copy.destination}</span><span><Clock3/>{item.duration}</span><span><Languages/>{item.language}</span></div></div><span className="detail-index">WMT / {String(experiences.indexOf(item)+1).padStart(2,'0')}</span></section>
    <nav className="detail-nav" aria-label="On this page"><a href="#overview">Overview</a><a href="#itinerary">Itinerary</a><a href="#included">Included</a><a href="#good-to-know">Good to know</a><Link to={`/booking?experience=${item.slug}`}>Request booking <ArrowRight/></Link></nav>
    <section className="detail-layout" id="overview"><article><span className="eyebrow">The experience</span><h2>A considered way to see more.</h2><p className="lead">{item.description}</p><div className="detail-highlights">{item.features.map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p></div>)}</div><div className="info-panel"><ShieldCheck/><div><strong>Availability is always checked</strong><p>Submitting the form creates a pending request. It does not confirm availability, tickets, vehicles or payment.</p></div></div></article><aside className="booking-card"><span className="card-kicker">Plan this experience</span><h3>{item.priceLabel}</h3><p>Tell us your preferred date and party size for a tailored proposal.</p><Link className="button button-gold" to={`/booking?experience=${item.slug}`}>Request this journey <ArrowRight/></Link>{whatsapp?<a className="detail-whatsapp" target="_blank" rel="noreferrer" href={`https://wa.me/${whatsapp.replace(/\D/g,'')}?text=${encodeURIComponent(`Hello, I am interested in ${item.title}.`)}`}><MessageCircle/>Ask on WhatsApp</a>:<Link className="detail-whatsapp" to="/contact"><MessageCircle/>Ask our team</Link>}<small>No online payment. Manual confirmation required.</small></aside></section>
    <section className="itinerary-section" id="itinerary"><div className="itinerary-intro"><span className="eyebrow">A possible flow</span><h2>Experience<br/><em>itinerary.</em></h2><p>The exact order and duration may change with access, traffic, weather and the final service confirmed.</p></div><ol>{item.itinerary.map(([n,title,text])=><li key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section className="included-section" id="included"><div><span className="eyebrow">Your proposal</span><h2>Clear about what is—and is not—included.</h2></div><div className="included-columns"><div><h3><Check/>Included in the request</h3><ul>{item.inclusions.map(x=><li key={x}>{x}</li>)}</ul></div><div><h3><X/>Not automatically included</h3><ul>{item.exclusions.map(x=><li key={x}>{x}</li>)}</ul></div></div></section>
    <section className="know-section" id="good-to-know"><div><span className="eyebrow">Before you request</span><h2>Good to know.</h2></div><div className="know-grid"><article><span>01</span><h3>Pickup planning</h3><p>Share the exact location, party size and any accessibility or child-seat requirements.</p></article><article><span>02</span><h3>Dress & access</h3><p>Any attraction-specific dress, identification or access requirements are supplied before confirmation.</p></article><article><span>03</span><h3>Changes</h3><p>{item.cancellation}</p></article></div></section>
    {item.gallery?.length&&<section className="detail-gallery"><img src={item.gallery[0]} alt={`${item.title} landscape`}/><img src={item.gallery[1]} alt={`${item.title} atmosphere`}/></section>}
    <section className="section related"><div className="related-heading"><div><span className="eyebrow">Continue exploring</span><h2>Related journeys.</h2></div><Link className="text-link" to="/experiences">View all <ArrowRight/></Link></div><div className="experience-grid all">{related.map(x=><ExperienceCard item={x} key={x.slug}/>)}</div></section>
  </>;
}
