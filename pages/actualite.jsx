import React from 'react';
import NavBar from '../components/NavBar';
function Actualite() {
  return (
    <div>
      <NavBar />
      <section
        id="actualite"
        className="text-white h-screen bg-black text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold ">
          Actualite
        </h1>
      </section>
    </div>
  );
}

export default Actualite;
