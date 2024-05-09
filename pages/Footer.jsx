import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { BiLogoPinterestAlt } from 'react-icons/bi';

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];

  return (
    <footer className="bg-white">
      <div className="container mx-auto py-[10rem]">
        {/* footer div all */}
        <div className="flex justify-between flex-col md:flex-row items-center md:items-start md:gap-[5rem] text-left">
          {/* logo side */}
          <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
             <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold cursor-pointer">LOGO</h2>
              </Link>

            {/* <p className="text-[15px] font-medium text-[#646464]">
              Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
            </p> */}

       
            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start ">
              {iconsTab.map(({ icon }, index) => (
                <div
                  key={index}
                  className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                  style={{ transition: 'all 0.3s' }}
                >
                  {icon}
                </div>
              ))}
            </div>
            <p className="text-[16px] font-medium text-[#646464]">
              Privacy Policy | © {new Date().getFullYear()} Gymate <br /> Design by{' '}
              <a target="_blank" rel="noreferrer" href="https://www.radiustheme.com/">
                RadiusTheme
              </a>
            </p>
          </div>

          {/* middle div */}


          <div className="flex justify-center flex-col space-y-6 relative">
            <p className="text-[18px] font-bold footer-main">Informations</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366] mt-6"></span>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">
              Adresse: ssertert rtr-dferer
            </p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">Contact</p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">Email</p>
            {/* Add other working hours similarly */}
          </div>

          <div className="flex justify-center flex-col space-y-6 relative">
            <p className="text-[18px] font-bold footer-main">Mention Légales</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">Conditions d utilisation</p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">Politique de confidentialité</p>
            <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-bold hover:font-bold">
              Mention légale</p>
            {/* Add other working hours similarly */}
          </div>

          <div className="flex justify-center flex-col space-y-6 relative">
            <p className="text-[18px] font-bold footer-main">Navigation</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
            <Link href="/Accueil">
              <div className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Accueil
              </div>
            </Link>
            <Link href="/QuiSommesnous">
              <div className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Qui Sommes nous
              </div>
            </Link>
            <Link href="/Actualite">
              <div className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Actualite
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                contact
              </div>
            </Link>
            {/* Add other class links similarly */}
          </div>

          {/* right div */}
          <div className="flex justify-center flex-col space-y-6 relative">
            <p className="text-[22px] font-bold footer-main">Partenaires</p>
            <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>
            <p className="text-[16px] text-[#646464] font-bold">Partenaire1</p>
            <p className="text-[16px] text-[#646464] font-medium">Partenaire2</p>
            {/* Add other working hours similarly */}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
