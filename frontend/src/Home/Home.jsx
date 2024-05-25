import React from "react";
import Header from "./Header";
import Mentorship from "./Mentorship batch";
import PODJEE from "./PODJEE";
import Books from "./Books";
import FAQ from "./FAQ";
import Contact from "./contact";
import WaveFooter from "./Wavefooter";
import Footer from "./footer";
import Autoplay from "./autoplay";
// import Typewriter from './typewriter';

function Home() {
  return (
    <>
      <Header />
      <Mentorship />
      <PODJEE />
      <Books />
      <FAQ />
      <Contact />
      <WaveFooter />
      <Footer />
      {/* <Autoplay/> */}
      {/* <Typewriter/> */}
    </>
  );
}

export default Home;