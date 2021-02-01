import React from 'react';
import '../../App.css';
import Cards from './courses/cards/Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Actual from "./courses/actual/Actual";

function Home() {
  return (
    <>
      <Actual />
      <Footer />
    </>
  );
}

export default Home;
