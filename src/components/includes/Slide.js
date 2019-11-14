import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const image1 = require('../../assets/img/1.jpg');
const caption1 =<> <h1>2020<br/>NOGIG<br/>COMPETITION</h1> <br/><button>Register for the Event</button></>;
const header1=<small>18TH EDITION</small>;

const items = [
  {
    src: [image1],
    altText: 'Slide 1',
    caption: [caption1],
    header: [header1],
    key: '1'
  },
  {
    src: [image1],
    altText: 'Slide 2',
    caption: [caption1],
    header: [header1],
    key: '2'
  },
  {
    src: [image1],
    altText: 'Slide 3',
    caption: [caption1],
    header: [header1],
    key: '3'
  }
];

const Slide = () => <UncontrolledCarousel items={items} />;

export default Slide;
