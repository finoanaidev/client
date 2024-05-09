import { useState } from 'react';
import Footer from './Footer';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export default function ContactPage() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null); // Déclaration de la variable d'erreur
  const [success, setSuccess] = useState(false); // Déclaration de la variable de succès

  const handleSubmit = (e) => {
    e.preventDefault();
    // Votre logique de gestion de formulaire ici

    // Exemple de gestion d'erreur
    setError("Une erreur s'est produite lors de l'envoi du formulaire.");
    // Exemple de gestion de succès
    setSuccess(true);
  };

  return (
    <div>
      <NavBar />

      <div>

     <div className="mx-20 lg:mx-60">
        <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-8 italic text-blue-600 text-center my-28">
          Pour toute question ou assistance supplémentaire, veuillez remplir le formulaire ci-dessus ou nous contacter
          directement aux coordonnées fournies. Nous sommes là pour vous aider !
        </h1>
      </div>


      </div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        {/* Titre */}


        {/* Bordure à gauche avec le logo */}
        <div className="border-r-4 border-gray-200 p-8 max-w-xs">
          <Link href="/">
            <h2 className="text-2xl text-cyan-600 font-bold cursor-pointer">LOGO</h2>
          </Link>
          <div>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366] mt-6"></span>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold mb-2">
              Adresse: adresse de l entreprise
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold mb-2">Contact</p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold mb-2">Email</p>
          </div>
        </div>


        {/* Espace entre les deux bordures */}
        <div className="w-20"></div>

        {/* Bordure à droite avec le formulaire */}
        <div className="border-l-4 border-gray-200 p-8 max-w-md shadow-md rounded-md flex-grow">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="fullname">Nom complet</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Votre nom"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre mail professionnel"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="123456789"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Entrez votre message ici..."
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:border-blue-500"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>

          {/* Affichage des erreurs */}
          {error && (
            <div className={`text-red-600 px-5 py-2 mt-4 bg-red-100 border border-red-200 rounded-md`}>
              {error}
            </div>
          )}

          {/* Message de succès */}
          {success && (
            <div className={`text-green-600 px-5 py-2 mt-4 bg-green-100 border border-green-200 rounded-md`}>
              Votre message a été envoyé avec succès !
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
