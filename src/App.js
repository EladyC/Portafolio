import profile from "./assets/img/profile.png";
import signature from "./assets/img/signature.png";

import skill_1 from "./assets/img/skill_1.png";
import skill_2 from "./assets/img/skill_2.png";
import skill_3 from "./assets/img/skill_3.png";
import skill_4 from "./assets/img/skill_4.png";
import skill_5 from "./assets/img/skill_5.png";
import skill_6 from "./assets/img/skill_6.png";
import skill_7 from "./assets/img/skill_7.png";
import skill_8 from "./assets/img/skill_8.png";
import skill_9 from "./assets/img/skill_9.png";
import skill_10 from "./assets/img/skill_10.png";
import skill_11 from "./assets/img/skill_11.png";
import skill_12 from "./assets/img/skill_12.png";

import study_1 from "./assets/img/study_1.png";
import study_2 from "./assets/img/study_2.png";
import study_3 from "./assets/img/study_3.png";

import project_1 from "./assets/img/project_1.png";
import project_2 from "./assets/img/project_2.png";
import project_3 from "./assets/img/project_3.png";
import project_4 from "./assets/img/project_4.png";

import contact from "./assets/img/contact.png";

import { Arrow, Sparkles } from "./assets/svg/icons";

function App() {
  const categorias = [
    "Sobre mi",
    "Skills",
    "Hobbies",
    "Formación",
    "Proyectos",
  ];
  const sociales = [
    { name: "Github", link: "https://github.com/EladyC" },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/lady-espinoza-aguedo-4b555120b/",
    },
    { name: "Instagram", link: "https://www.instagram.com/" },
    {
      name: "Currículo",
      link: "https://drive.google.com/file/d/1BBR8O6gI9TvrYdn897J8LNZEL-vM9_yF/view?usp=sharing",
    },
  ];
  const more = [
    {
      name: "Skills",
      top: false,
      categories: [
        { name: "html5", img: skill_1 },
        { name: "JavaScript", img: skill_2 },
        { name: "Php", img: skill_3 },
        { name: "NodeJS", img: skill_4 },
        { name: "React", img: skill_5 },
        { name: "CSS", img: skill_6 },
      ],
    },
    {
      name: "Hobbies",
      top: true,
      categories: [
        { name: "Patinaje", img: skill_7 },
        { name: "Tocar Bajo", img: skill_8 },
        { name: "Oir Música", img: skill_9 },
        { name: "Ver Series", img: skill_10 },
        { name: "Cocinar", img: skill_11 },
        { name: "Tomar Fotos", img: skill_12 },
      ],
    },
  ];
  const academica = [
    { name: "Analisis de Datos", time: "2018 - UFRP", img: study_1 },
    { name: "Formación en UX Design", time: "2019 - ALURA", img: study_2 },
    { name: "Posgrado en Design", time: "En curso - UFRJ", img: study_3 },
  ];
  const projects = [
    {
      boolean: [false, false],
      name: "Encriptador de texto",
      challenge: "Challenge Alura codificador",
      img: project_1,
    },
    {
      boolean: [true, true],
      name: "Juego creado con HTML y Javascript",
      challenge: "Challenge Oracle",
      img: project_2,
    },
    {
      boolean: [true, false],
      name: "Encriptador de texto",
      challenge: "Challenge Oracle",
      img: project_3,
    },
    {
      boolean: [true, true],
      name: "Juego creado con HTML y Javascript",
      challenge: "Challenge Oracle",
      img: project_4,
    },
  ];
  const inputs = ["Nombre", "Email", "Asunto"];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/*Navbar*/}
      <nav className="w-full bg-gray-100 flex items-center justify-center ">
        <div className="p-10 w-full max-w-[160vh] flex items-center justify-between">
          <div className="flex text-gray-800">
            <Sparkles features="h-6 w-6" />
            <h1 className="ml-3 text-base font-bold">Lady Espinoza</h1>
          </div>

          <div className="flex items-center">
            {categorias.map((el, index) => (
              <h2
                className="mr-8 hidden lg:block text-base font-medium cursor-pointer hover:text-blue-500"
                key={index}
              >
                {el}
              </h2>
            ))}
            <h2 className="ml-5 text-sm sm:text-base font-bold cursor-pointer hover:text-indigo-500">
              elady386@gmail.com
            </h2>
          </div>
        </div>
      </nav>

      {/*Header*/}
      <section className="w-full bg-gray-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh] flex flex-col sm:flex-row items-center">
          <div className="mt-5 sm:mt-0 w-full sm:w-2/3 order-last sm:order-first">
            <h1 className="text-[22px] lg:text-[52px] font-bold text-gray-800">
              Hola mi nombre es Lady Cristina Espinoza Aguedo y construyo
              páginas web
            </h1>
            <p className="mt-5 text-base lg:text-[22px] font-normal text-gray-700">
              Soy formada en.. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Tempore corrupti necessitatibus commodi illo?
              Eum assumenda molestias saepe. Error corporis dolores soluta sint,
              culpa, ex nam voluptates explicabo iste eaque facilis amet officia
              in natus nemo vel quod hic. Beatae, dicta.
            </p>
            <div className="mt-5 flex">
              {sociales.map((el, index) => (
                <div
                  className="mr-2 sm:mr-8 flex items-center cursor-pointer hover:text-blue-500"
                  key={index}
                >
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-medium"
                  >
                    {el.name}
                  </a>
                  <Arrow features="ml-2 h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
          <img
            className="sm:ml-10 w-1/3 order-first sm:order-last"
            src={profile}
            alt="profile"
          />
        </div>
      </section>

      {/*About*/}
      <section className="w-full bg-sky-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh]">
          <h1 className="text[22px] lg:text-[32px] font-bold text-gray-800">
            Sobre mi
          </h1>
          <p className="mt-5 w-3/4 text-sm lg:text-base font-normal text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
            dolore similique quibusdam aliquam, exercitationem, commodi nisi
            possimus iusto ducimus modi libero quas totam doloremque temporibus?
          </p>
          <p className="mt-3 w-3/4 text-sm lg:text-base font-normal text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            mollitia magnam, voluptatem deserunt blanditiis minima quasi iure
            adipisci quo. Necessitatibus recusandae illo facilis quis modi
            blanditiis, iusto porro iure sequi eligendi est numquam quibusdam.
            Repellendus!
          </p>
          <img className="mt-5" src={signature} alt="signature" />
        </div>
      </section>

      {/*Skills and Hobbies*/}
      <section className="w-full bg-gray-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh]">
          {more.map((el, index) => (
            <div className={`${el.top && "mt-20"}`} key={index}>
              <h2 className="text-[22px] lg:text-[32px] font-bold text-center text-gray-800">
                {el.name}
              </h2>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {el.categories.map((el, index) => (
                  <div
                    className="p-4 h-[15vh] lg:h-[20vh] bg-white relative cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-sky-100"
                    key={index}
                  >
                    <div className="absolute left-5 bottom-5">
                      <img
                        className="w-1/3 lg:w-1/2 mt-5"
                        src={el.img}
                        alt={`${el.name}`}
                      />
                      <p className="mt-2 text-base font-bold text-gray-700">
                        {el.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Académica*/}
      <section className="w-full bg-sky-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh]">
          <h1 className="text-[22px] lg:text-[32px] text-center font-bold text-gray-800">
            Formación académica
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-4">
            {academica.map((el, index) => (
              <div className="p-5" key={index}>
                <div className="bg-white flex items-center justify-center">
                  <img
                    className="w-2/3 py-10"
                    src={el.img}
                    alt={`${el.name}`}
                  />
                </div>
                <p className="mt-3 text-base lg:text-[22px] font-bold text-gray-800">
                  {el.name}
                </p>
                <p className="mt-2 text-sm lg:text-base font-medium text-gray-700">
                  {el.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Projects*/}
      <section className="w-full bg-gray-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh]">
          <h1 className="text-[22px] lg:text-[32px] text-center font-bold text-gray-800">
            Experiencia profesional
          </h1>

          {projects.map((el, index) => (
            <div
              className={`${
                el.boolean[0] ? "mt-20" : "mt-10"
              } flex flex-col lg:flex-row items-center`}
              key={index}
            >
              <img
                className={`lg:w-2/3 ${
                  el.boolean[1] ? "lg:order-first" : "lg:order-last"
                }`}
                src={el.img}
                alt={el.name}
              />
              <div
                className={`mt-5 lg:mt-0 lg:w-1/3 ${
                  el.boolean[1] ? "lg:ml-10 lg:order-1" : "lg:mr-10 lg:order-2"
                } w-full`}
              >
                <h2 className="text-[22px] font-bold text-gray-800">
                  {el.name}
                </h2>
                <p className="mt-2 text-base font-medium text-gray-700">
                  {el.challenge}
                </p>
                <div className="mt-5 flex">
                  <button className="p-5 border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-600 font-normal text-base">
                    Repositorio
                  </button>
                  <button className="ml-5 p-5 border border-blue-600 bg-blue-600 text-white font-normal text-base">
                    Ver demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Contacto*/}
      <section className="w-full bg-sky-100 flex items-center justify-center">
        <div className="p-10 w-full max-w-[160vh] flex items-center">
          <img
            className="hidden lg:block lg:w-1/2"
            src={contact}
            alt="contact"
          />

          <form className="w-full lg:ml-10 lg:w-1/2">
            <h1 className="text-left text-[22px] lg:text-[32px] text-gray-700 font-bold">
              Contacto
            </h1>
            <p className="mt-3 text-base lg:text-lg font-semibold">
              ¿Quieres contactarme?
            </p>
            <p className="mt-2 text-normal lg:text-base font-medium">
              Complete el siguiente formulario y me pondré en contacto con usted
              lo antes posible
            </p>
            {inputs.map((el, index) => (
              <div
                className="mt-4 p-4 bg-white rounded-sm shadow-sm"
                key={index}
              >
                <p className="text-sm text-gray-500">{el}</p>
                <input
                  type="text"
                  className="mt-2 w-full outline-none border-b-2 focus:border-blue-700"
                />
              </div>
            ))}
            <textarea
              className="mt-4 p-4 w-full text-base rounded-md shadow-md"
              placeholder="Mensaje"
            />
            <button className="mt-6 p-5 bg-blue-600 text-white">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>

      {/*Footer*/}
      <footer className="p-10 w-full bg-white flex flex-col items-center justify-center">
        <p>Desarrollado por Lady Cristina Espinoza Aguedo</p>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default App;
