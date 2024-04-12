import Profile from '../assets/profile_bw.png';
import Qr from '../assets/qr.svg';
import Logo from '../assets/viktoria-kota.svg';
import GithubLogo from '../assets/github-logo.png';
import GithubLogoHover from '../assets/github-logo-hover.png';
import LinkedinLogo from '../assets/linkedin-logo.png';
import LinkedinLogoHover from '../assets/linkedin-logo-hover.png';
import CVLogo from '../assets/cv-icon.png';
import CVLogoHover from '../assets/cv-icon-hover.png';
import Email from '../assets/email-icon.png';
import EmailHover from '../assets/email-icon-hover.png';
import Phone from '../assets/phone-icon.png';
import PhoneHover from '../assets/phone-icon-hover.png';
import www from '../assets/www-logo.png';
import wwwHover from '../assets/www-hover.png';
import Resume from '../assets/Kóta-Viktória-CV-EN.pdf';
import LeftArrow from '../assets/left-arrow.svg';

function QR() {
  return (
    <div className="bg-craft bg-bottom">
      <div className="mx-auto flex flex-col lg:flex-row justify-evenly items-center max-w-[1000px] xl:max-w-[1200px]  min-h-dvh">
        <div className="flex flex-row md:flex-col items-center">
          <div>
            <img src={Profile} alt="profile" className="w-32 lg:w-60 mx-2 sm:my-2" />
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src={Logo} alt="logo" className="h-10 md:h-14" />
            </div>
            <div className="font-elite font-bold text-md text-gray-800 uppercase mt-1">Frontend developer</div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-3">
          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href="https://github.com/vikikota"
              target="_blank"
              aria-label="github button"
              rel="noreferrer"
            >
              <img
                src={GithubLogo}
                alt="github logo"
                className="transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img
                src={GithubLogoHover}
                alt="github logo hover"
                className="w-7 md:w-9 absolute opacity-0 hover:opacity-100"
              />
            </a>
            <div className="hover:scale-105 font-unica font-bold uppercase text-gray-800 text-xl ms-4">
              <a href="https://github.com/vikikota" target="_blank" rel="noopener noreferrer">
                GITHUB ACCOUNT
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href="https://www.linkedin.com/in/viktoria-kota/"
              target="_blank"
              aria-label="linkedin button"
              rel="noreferrer"
            >
              <img
                src={LinkedinLogo}
                alt="Linkedin logo"
                className="transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img
                src={LinkedinLogoHover}
                alt="Linkedin logo hover"
                className="w-7 md:w-9 absolute opacity-0 hover:opacity-100"
              />
            </a>
            <div className="hover:scale-105 font-unica font-bold uppercase text-gray-800 text-xl ms-4">
              <a href="https://www.linkedin.com/in/viktoria-kota/" target="_blank" rel="noopener noreferrer">
                LINKEDIN PROFILE
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href="https://vikikota.github.io/hello/"
              target="_blank"
              aria-label="portfolio button"
              rel="noreferrer"
            >
              <img
                src={www}
                alt="world icon"
                className="transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img src={wwwHover} alt="world icon" className="w-7 md:w-9 absolute opacity-0 hover:opacity-100" />
            </a>
            <div className="hover:scale-105 font-unica font-bold uppercase text-gray-800 text-xl ms-4">
              <a href="https://vikikota.github.io/hello/" target="_blank" rel="noopener noreferrer">
                PORTFOLIO WEBSITE
              </a>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href={Resume}
              target="_blank"
              aria-label="cv button"
              rel="noreferrer"
            >
              <img
                src={CVLogo}
                alt="cv logo"
                className=" transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img src={CVLogoHover} alt="cv logo hover" className="w-7 md:w-9 absolute opacity-0 hover:opacity-100" />
            </a>
            <div className="z-0">
              <img src={LeftArrow} alt="left arrow" className="left-right w-10 md:w-12 ms-4 me-2" />
            </div>
            <div className="font-unica font-bold text-xl  text-gray-800 uppercase">open my cv</div>
          </div>
          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href="tel:+36304814858"
              target="_blank"
              aria-label="phone button"
              rel="noreferrer"
            >
              <img
                src={Phone}
                alt="phone icon"
                className="transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img
                src={PhoneHover}
                alt="phone icon hover"
                className="w-7 md:w-9 absolute opacity-0 hover:opacity-100"
              />
            </a>
            <div className="hover:scale-105 font-unica font-bold uppercase text-gray-800 text-xl ms-4">
              <a href="tel:+36304814858" target="_blank" rel="noopener noreferrer">
                +36 30 481 4858
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <a
              className="relative flex justify-start items-center hover:scale-110 cursor-pointer"
              href="mailto:viktoria.kota@gmail.com"
              target="_blank"
              aria-label="email button"
              rel="noreferrer"
            >
              <img
                src={Email}
                alt="email icon"
                className="transition duration-300 transform w-7 md:w-9 hover:opacity-0"
              />
              <img src={EmailHover} alt="email icon" className="w-7 md:w-9 absolute opacity-0 hover:opacity-100" />
            </a>
            <div className="hover:scale-105 font-unica font-bold uppercase text-gray-800 text-xl ms-4">
              <a href="mailto:viktoria.kota@gmail.com" target="_blank" rel="noopener noreferrer">
                VIKTORIA.KOTA@GMAIL.COM
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={Qr} alt="qr code" className="w-32 xs:w-60 lg:w-72 shadow-md" />
        </div>
      </div>
    </div>
  );
}

export default QR;
