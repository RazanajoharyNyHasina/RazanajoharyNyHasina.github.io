import { useTranslation } from 'react-i18next';
import './index.css';
import Layout from './layout/layout';
// import Hero from './pages/main/hero_section';
import type { TFunction } from 'i18next';
// import Skills from './pages/skills_section';
// import Portfolio from './pages/main/portfolio_section';
import Footer from './components/footer';
// import AI from './pages/main/ai_section';
// import Tech from './pages/main/tech_section';


import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./pages/main/hero_section'));
const Portfolio = lazy(() => import('./pages/main/portfolio_section'));
const AI = lazy(() => import('./pages/main/ai_section'));
const Tech = lazy(() => import('./pages/main/tech_section'));
const Skills = lazy(() => import('./pages/skills_section'));

export interface SectionsProps {
	t: TFunction<"translation">;
}

function App() {
	const { t } = useTranslation("translation");

	return (
		<Layout t={t}>
			<Suspense fallback={null}>
				<Hero t={t} />
				<Skills t={t} />
				<Portfolio t={t} />
				<AI t={t} />
				<Tech t={t} />
				<Footer t={t} />
			</Suspense>
		</Layout>
	)
}

export default App