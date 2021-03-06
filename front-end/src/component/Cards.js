import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Home2 from '../2ndComponent/Home2';

function Cards() {
  return (
    <div className='cards'>
        <Home2 />
       <h1>Class Search</h1>
            <h3>Select Class Type:</h3>
          
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

          <CardItem
              src='images/yoga.jpg'
              text='
              Live Streamed Mixed Levels via Zoom
              
              Please contact Bev for private sessions in Walnut Creek or in your home.'
              label='Yoga    '
              path='/yoga'
            />

            <CardItem
              src='images/arnold1.jpg'
              text='Bodybuilding is the use of progressive resistance exercise to control and develop ones musculature for aesthetic purposes. '
              label='WeightLifting'
              path='/weightlifting'
            />
            <CardItem
              src='images/Running.jpg'
              text='How to Run When You’re Just Getting Started,
              running has the power to change your life'
              label='Running.'
              path='/running'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Rond1.jpg'
              text='Blend the best aspects of striking and strategy with our Fitness Boxing Classes in Walnut Creek. We teach the sweet science with no contact. Just a high-energy system that helps you see sustainable results.'
              label='Boxing'
              path='/boxing'
            />
            <CardItem
              src='images/cardio.jpg'
              text='Elliptical. These machines were originally designed to minimize impact on the knees and hips, but still allow a great workout. ...
              Stair Climber. ...
              Jumping Rope. ...
              Cycling. ...
              Swimming. ...'
              label='Cardio Workouts'
              path='/cardio'
            />
            <CardItem
              src='images/dancing.jpg'
              text='Work Up A Sweat And Burn Away Unwanted Fat. Start Your Free Trial And Get 1,500+ Workouts, Nutrition Programs, And More! Maximize Results. Stream On All Devices. Free Trial. 1,500+ Workouts.'
              label='Dance Fitness'
              path='/dancing'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;