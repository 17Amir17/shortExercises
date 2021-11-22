import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotelsGallery from './HotelsGallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hotels from './Hotels';
import Kebab from './Kebab';
import HotelPage from './HotelPage';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelsGallery key={HotelsGallery} />} />
        {Hotels.map((hotel) => {
          return (
            <Route
              path={`${encodeURIComponent(Kebab(hotel['מלון מרום']))}`}
              element={
                <HotelPage
                  name={Kebab(hotel['מלון מרום'])}
                  number={hotel[8254355]}
                />
              }
              key={hotel}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
