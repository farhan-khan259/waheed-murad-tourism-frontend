import PageHero from '../components/PageHero.jsx';
import ExperienceCard from '../components/ExperienceCard.jsx';
import { experiences } from '../data/experiences.js';
import { useLanguage } from '../context/LanguageContext.jsx';
export default function CategoryPage({ category, destination, title, eyebrow, text }) {
  const { language } = useLanguage();
  const filtered = experiences.filter(x => (!category || x.category === category) && (!destination || x.destination === destination));
  const ar = category==='Desert Safari'?{eyebrow:'ما وراء المدينة',title:'الصحراء برؤية جديدة.',text:'طلبات رحلات صحراوية خاصة ومشتركة، تتم مراجعتها وتأكيدها يدوياً.'}:destination==='Dubai'?{eyebrow:'مجموعة المدينة',title:'دبي بكل تناقضاتها.',text:'من تراث الخور إلى معالم المستقبل، اكتشف مدينة مبنية على التباين.'}:destination==='Abu Dhabi'?{eyebrow:'أبوظبي',title:'العاصمة بإيقاع متوازن.',text:'معالم ثقافية وجزر وواجهات بحرية ضمن يوم مصمم بعناية.'}:category==='Attractions'?{eyebrow:'المعالم والتذاكر',title:'خطط لزيارة رموز المدينة.',text:'اطلب التذاكر والتوقيت المناسب ضمن برنامج إماراتي متكامل.'}:null;
  const copy=language==='ar'&&ar?ar:{eyebrow,title,text};
  return <><PageHero eyebrow={copy.eyebrow} title={copy.title} text={copy.text} image={filtered[0]?.image}/><section className="section category-listing"><div className="category-count"><span>{String(filtered.length).padStart(2,'0')}</span><p>{language==='ar'?'تجارب متاحة للطلب':'experiences available to request'}</p></div><div className="experience-grid all">{filtered.map(x => <ExperienceCard item={x} key={x.slug}/>)}</div></section></>;
}
