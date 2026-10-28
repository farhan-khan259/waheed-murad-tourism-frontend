import { useEffect } from 'react';
export default function PageHero({ eyebrow, title, text, image }) {
  useEffect(() => { document.title = `${typeof title === 'string' ? title : 'Explore'} | Waheed Murad Tourism`; const meta = document.querySelector('meta[name="description"]'); if (meta && text) meta.setAttribute('content', text); }, [title, text]);
  return <section className="page-hero" style={image ? { '--page-image': `url(${image})` } : undefined}><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p></div></section>;
}
