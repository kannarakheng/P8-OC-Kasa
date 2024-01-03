import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './housing.css';

import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse';

import DataHousing from '../../assets/housing.json';

function Housing() {
    const [housing, setHousing] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const data = DataHousing.find(housing => housing.id === id );
        if (data) {
            setHousing(data);
        } else {
            setHousing(null);
        }
    }, [id]);

    if (!housing) {
        return (<Error />);
    }

    const data = [
        {
            title: 'Description',
            text: housing.description
        },
        {
            title: 'Equipements',
            text: housing.equipments.map(equipment => (
                <p className='Collapse__Text' key={equipment}>{equipment}</p>
            ))
        }
    ]

    return (
        <>
        {housing.pictures && <Slider images={housing.pictures} />}

        <section className="ContInfo">
            <div className="ContInfoHousing">
                <h1 className="TittleInfo">{housing.title}</h1>
                <p className="TextInfo">{housing.housing}</p>
                <ul className="TagUl">
                    {housing.tags.map(tag => (
                        <li className="TagLi" key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div className="ContInfoOwner">
                <div className="CtT">
                    <p className="TextInfoOwner">{housing.host.name}</p>
                    <img className="ImgOwner" src={housing.host.picture} alt={housing.host.name} />
                </div>
                <Rating rating={housing.rating} />
            </div>
        </section>
        <Collapse data={data}/>
        </>
    )
}

export default Housing;