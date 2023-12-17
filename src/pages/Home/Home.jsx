import './home.css';

import Banner from '../../assets/banner-home.png';

import HousingCard from '../../components/HousingCard/HousingCard';

function Home() {
    return (
        <section>
            <div className="BannerCont">
                <img className="BannerImg" src={Banner} alt="Paysage" />
            </div>
            <HousingCard />
        </section>
    )
}

export default Home;