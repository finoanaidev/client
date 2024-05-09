import React from "react";
import Image from "next/image";
import Slider from "../components/Slider";
function Header() {
  return (
    <div>
      <main className="bg-white w-full min-h-screen mx-auto grid place-items-center my-24">
  <Slider />
</main>


      <div>
        <h1 className="m-auto text-center font-waterfall text-7xl text-purple-600 font-bold my-28">
          L outil d évaluation des risques professionnels
        </h1>
      </div>

      <div className="mx-96 my-8">
        {" "}
        {/* Augmenter la valeur de mx pour augmenter l'espace */}
        <div className="flex justify-between">
          <div className="border border-gray-300 rounded-lg p-1 flex-grow mr-8 flex justify-center items-center">
            {" "}
            {/* Diminuer la valeur de p pour réduire la largeur de la bordure */}
            <div>
              <h2 className="text-lg font-bold mb-1 text-rose-800 text-center">
                Gestion de projet
              </h2>
              <p className="text-gray-800">
                Création et organisation de projets
              </p>
              <p className="text-gray-800">Attribution des tâches</p>
              <p className="text-gray-800">Suivi des progrès</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-1 flex-grow mr-8 flex justify-center items-center">
            {" "}
            {/* Diminuer la valeur de p pour réduire la largeur de la bordure */}
            <div>
              <h2 className="text-lg font-bold mb-1 text-rose-800 text-center">
                Collaboration
              </h2>
              <p className="text-gray-800">Communication en temps réel</p>
              <p className="text-gray-800">
                Partage de fichiers et de documents
              </p>
              <p className="text-gray-800">Commentaires et mentions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-32 my-8">
        <div className="flex justify-between">
          <div className="border border-gray-300 rounded-lg p-1 flex-grow mr-4 flex justify-center items-center">
            <div>
              <h2 className="text-lg font-bold mb-1 text-rose-800 text-center">
                Gestion des tâches
              </h2>
              <p className="text-gray-800">
                Définir des délais et des priorités
              </p>
              <p className="text-gray-800">Listes de tâches personnalisables</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-1 flex-grow mr-4 flex justify-center items-center">
            <div>
              <h2 className="text-lg font-bold mb-1 text-rose-800 text-center">
                Suivi du temps et facturation
              </h2>
              <p className="text-gray-800">
                Suivi du temps passé sur les tâches
              </p>
              <p className="text-gray-800">Facturation des clients</p>
              <p className="text-gray-800">Rapports détaillés</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg p-1 flex-grow flex justify-center items-center">
            <div>
              <h2 className="text-lg font-bold mb-1 text-rose-800 text-center">
                Intégrations et personnalisation
              </h2>
              <p className="text-gray-800">Intégrations avec d autres outils</p>
              <p className="text-gray-800">Personnalisation de l interface</p>
              <p className="text-gray-800">
                Extensions et modules complémentaires
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h1 className="m-auto text-center font-waterfall text-7xl text-purple-600 font-bold my-28">
          Comment ça marche?
        </h1>

        <div className="mx-64 my-28">
  <div className="flex justify-between items-center">
    <div className="border border-gray-300 rounded-lg p-4 flex justify-center items-center">
      <div className="w-128 h-128">
        <Image
          src="/images/fond3.jpg"
          alt="Logo"
          width={128}
          height={128}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
    <div className="border border-gray-300 rounded-lg p-4 mr-4 ml-20 w-64 mb-8">
      <div>
        <h2 className="text-xl font-bold mb-4 italic text-blue-600 text-left">
        Identifier les dangers
        </h2>
        <p className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-black text-left">
        Découvrez, agissez : Anticipez les risques potentiels grâce à
                  notre outil DUERP pour un environnement de travail plus sûr et
                  sécurisé
        </p>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4 italic text-blue-600 text-left">
          Evaluation des risques
          </h2>
          <p className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-black">
          Avec notre outil d évaluation des risques, transformez les
                  menaces en opportunités en protégeant votre environnement de
                  travail
          </p>
        </div>
      </div>
    </div>
  </div>
</div>




        <div className="mx-64 my-28">
          <div className="flex justify-between items-center">
            <div className="border border-gray-300 rounded-lg p-4 mr-4 ml-20 w-64 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-4 italic text-blue-600 text-left">
                  Mise en place de mesures de prévention
                </h2>
                <p className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-black text-left">
                  Protégez dès aujourd hui pour un avenir sûr : Mettez en place
                  des mesures de prévention efficaces pour garantir la sécurité
                  de votre personnel et la continuité de vos activités.
                </p>

                <div className="mt-12">
                  <h2 className="text-xl font-bold mb-4 italic text-blue-600 text-left">
                    Rédaction du document final
                  </h2>
                  <p className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-black">
                    Transformez les risques en opportunités avec une rédaction
                    experte et une vision sécuritaire pour l avenir
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 flex justify-center items-center">
              <div className="w-128 h-128">
                {" "}
                {/* Modifiez les valeurs ici pour ajuster la taille de l'image */}
                <Image
                  src="/images/fond1.jpg"
                  alt="Logo"
                  width={128}
                  height={128}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Header;
