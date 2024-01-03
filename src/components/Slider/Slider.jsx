import { useState } from 'react';
import './slider.css';

import ArrowRight from '../../assets/arrow-right.png';
import ArrowLeft from '../../assets/arrow-left.png';

function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextImage() {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };
    
    function prevImage() {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    return (
        <section className="ContSlider">
            {images.length > 1 
            &&
            <>
                <p className="CountSlider">{ currentIndex + 1 } / {images.length}</p>

                <img className="ArrowSliderLeft" src={ArrowLeft} alt="Flèche gauche" onClick={nextImage} />
                <img className="ArrowSliderRight" src={ArrowRight} alt="Flèche droite" onClick={prevImage} />
            </>
            }
            <img className="ImgSlider" src={images[currentIndex]} alt="Housing" />
        </section>
    )
}

export default Slider;