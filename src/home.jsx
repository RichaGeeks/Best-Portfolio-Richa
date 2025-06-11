import FAQs from './faqs';
import Footer from './footer';
import Projects from './projects';
import Skills from './skills';
import Techstack from './components/techstack';
import Model from './astraiamodel';
import VerticalNav from './verticlenav'
const Experience = () => {
	return (
		< >
		    <VerticalNav />
			<section id="home"><Model/></section>
			<section id="skills"><Skills /></section>
			<section id="projects"><Projects /></section>
			<section id="faqs"><FAQs /></section>
			<section id="footer"><Footer /></section>
		
	    </>
	);
};
export default Experience;
