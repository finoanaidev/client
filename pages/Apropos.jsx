import React from 'react';
import NavBar from '../components/NavBar';
import Footer from './Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Apropos() {

  const [hoveredParagraph, setHoveredParagraph] = useState(null);


  
  return (
    <div>
      <NavBar />
      <section id="QuisommesNous" className="text-white flex justify-center my-24">
  <div className="max-w-4xl px-8 flex flex-col items-center">
    <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-8 italic text-blue-600 text-center">
    [Nom de l entreprise] s engage à créer un environnement de travail sûr et sain pour tous ses employés.
     Fondée en [année de fondation], [nom de l entreprise] est une entreprise [description brève de l activité
      principale de l entreprise].
      Notre objectif est de garantir la sécurité 
    et le bien-être de nos employés tout en assurant une performance exceptionnelle dans toutes nos activités.
    </h1>
    <Link href="/en-savoir-plus">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 my-12">
        En savoir plus
      </button>
    </Link>
  </div>
</section>



<div className="bg-cyan-600 p-8">
  <section>
    <div className="mx-48">
      <div className="flex justify-between">
        <div className="flex flex-col items-start"
             onMouseEnter={() => setHoveredParagraph(1)}
             onMouseLeave={() => setHoveredParagraph(null)}>
          <div style={{position: 'relative'}}>
            <Image src="/images/fond1.jpg" alt="Image 1" width={300} height={300} className="rounded-full" />
            <div className="image-text-wrapper" style={{width: '300px'}}> {/* Ajustez la largeur ici pour correspondre à l'image */}
              <p className="text-center mt-2 cursor-pointer text-purple-900 hover:underline font-bold text-lg md:text-xl lg:text-2xl text-A1529F">
                Identification et Communication des Avantages
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center"
             onMouseEnter={() => setHoveredParagraph(2)}
             onMouseLeave={() => setHoveredParagraph(null)}>
          <Image src="/images/fond2.jpg" alt="Image 2" width={300} height={300} className="rounded-full" />
          <div className="image-text-wrapper" style={{width: '300px'}}> {/* Ajustez la largeur ici pour correspondre à l'image */}
              <p className="text-center mt-2 cursor-pointer text-purple-900 hover:underline font-bold text-lg md:text-xl lg:text-2xl text-A1529F">
              Personnalisation et Pertinence
              </p>
            </div>
        </div>
        <div className="flex flex-col items-end"
             onMouseEnter={() => setHoveredParagraph(3)}
             onMouseLeave={() => setHoveredParagraph(null)}>
          <Image src="/images/fond3.jpg" alt="Image 3" width={300} height={300} className="rounded-full" />
          <div className="image-text-wrapper" style={{width: '300px'}}> {/* Ajustez la largeur ici pour correspondre à l'image */}
              <p className="text-center mt-2 cursor-pointer text-purple-900 hover:underline font-bold text-lg md:text-xl lg:text-2xl text-A1529F">
              Formation et Support
              </p>
            </div>
        </div>
      </div>
    </div>
    {/* Contenu principal affiché en bas */}
    <div className="mt-8 mx-48">
      {hoveredParagraph === 1 && (
       <div className="flex flex-col items-center">
       <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">Mettre en évidence les avantages du DUERP pour l entreprise, tels que la réduction des accidents et des maladies professionnelles, l amélioration du bien-être des employés, la conformité aux réglementations en matière de santé et de sécurité, et la protection de la réputation de l entreprise.</p>
     </div>
     
      )}
      {hoveredParagraph === 2 && (
        <div className="flex flex-col items-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">Adapter le DUERP aux besoins spécifiques de l entreprise et de son secteur d activité. Mettre en évidence la pertinence des mesures de prévention proposées et démontrer comment elles peuvent être intégrées de manière efficace et efficiente dans les processus de travail existants.</p>
        </div>
      )}
      {hoveredParagraph === 3 && (
        <div className="flex flex-col items-center">
           <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white">Fournir une formation et un support appropriés aux clients pour les aider à comprendre et à mettre en œuvre le DUERP dans leur entreprise. Cela peut inclure des sessions de formation sur l évaluation des risques, l élaboration de plans d action, et l utilisation d outils et de ressources pour la gestion de la santé et de la sécurité au travail.</p>
        </div>
      )}
    </div>
  </section>
</div>





 <Footer />
    </div>
  );
}

export default Apropos;
