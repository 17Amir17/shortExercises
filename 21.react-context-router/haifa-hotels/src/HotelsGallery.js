import React from 'react';
import Hotels from './Hotels';
import HotelCard from './HotelCard';
import { Link } from 'react-router-dom';
import Kebab from './Kebab';

export default class HotelsGallery extends React.Component {
  render() {
    return (
      <ul className="gallery">
        {Hotels.map((hotel) => {
          return (
            <Link to={`/${Kebab(hotel['מלון מרום'])}`} key={hotel['מלון מרום']}>
              <HotelCard img={hotel.image} name={hotel['מלון מרום']} />
            </Link>
          );
        })}
      </ul>
    );
  }
}
