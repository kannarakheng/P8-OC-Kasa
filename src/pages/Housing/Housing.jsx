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
                <p className='TextCollapse' key={equipment}>{equipment}</p>
            ))
        }
    ]

    return (
        <>
        {housing.pictures && <Slider images={housing.pictures} />}

        <section>
            <div>
                <h1>{housing.title}</h1>
                <p>{housing.housing}</p>
                <ul>
                    {housing.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>

            <div>
                <div>
                    <p>{housing.host.name}</p>
                    <img src={housing.host.picture} alt={housing.host.name} />
                </div>
                <Rating rating={housing.rating} />
            </div>
        </section>
        <Collapse data={data}/>
        </>
    )
}

export default Housing;