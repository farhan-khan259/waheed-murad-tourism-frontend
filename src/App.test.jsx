import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
test('renders the cinematic homepage',()=>{render(<MemoryRouter><LanguageProvider><App/></LanguageProvider></MemoryRouter>);expect(screen.getByRole('heading',{name:/Discover Dubai beyond ordinary/i})).toBeInTheDocument()});
