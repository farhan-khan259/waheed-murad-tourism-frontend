import { Link } from 'react-router-dom';
export default function NotFoundPage(){return <section className="not-found"><span>404</span><h1>This route has<br/>left the map.</h1><p>Let’s get you back to the journey.</p><Link className="button button-gold" to="/">Return home</Link></section>}
