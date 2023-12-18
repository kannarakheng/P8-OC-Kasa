import './about.css';

import Collapse from '../../components/Collapse/Collapse';

import Banner from '../../assets/banner-about.png'
import collapseData from '../../assets/collapse.json'

function About() {
    return (
        <section>
            <img className='BannerCtr' alt='Paysage' src={Banner} />
            <Collapse data={collapseData}/>
        </section>
    );
}

export default About;
