import React from 'react';
import NavBar from '../components/NavBar';
function Connexion() {
  return (
    <div>
      <NavBar />
      <section
        id="connexion"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold ">
          Connexion
        </h1>
      </section>
    </div>
  );
}

export default Connexion;
