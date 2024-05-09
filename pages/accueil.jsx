import React from 'react';
import NavBar from '../components/NavBar';
import Header from './Header';
import Footer from './Footer';
function Accueil() {
  return (
    <div>
      <NavBar />
   
      {/* <section
        id="accueil"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold ">
        Accueil
        </h1>
      </section> */}

      <Header />
      <Footer />
    </div>
  );
}

export default Accueil;
