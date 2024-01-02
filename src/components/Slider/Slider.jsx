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
        <section>
            {images.length > 1 
            &&
            <>
                <p>{ currentIndex + 1 } / {images.length}</p>

                <img src={ArrowLeft} alt="Flèche gauche" onClick={nextImage} />
                <img src={ArrowRight} alt="Flèche droite" onClick={prevImage} />
            </>
            }
            <img src={images[currentIndex]} alt="Housing" />
        </section>
    )
}

export default Slider;