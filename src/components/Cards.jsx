import React from 'react'
import '../styles/Cards.css'
import pixel1 from "/pexels.jpg";
import coins from "/dollarcoin.jpg";
import image from '/image.jpg'
function Cards() {
  return (
    <div className='allcard'>
      <div className='allcard1'>
        <div className="card">
          <img src={pixel1} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p>Total Car rented</p>
          </div>
        </div>

        <div className="card">
          <img src={coins} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p>Earnings</p>
          </div>
        </div>
        <div className="card">
          <img src={image} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p>Deals</p>
          </div>
        </div>
      </div>
      
        <div className="card">
          <img src={image} className="cardimage" />
          <div className="cardparagraph">
            <p className="cardparagraph1">500+</p>
            <p>Companies</p>
          </div>
        </div>
    
    </div>
  );
}

export default Cards