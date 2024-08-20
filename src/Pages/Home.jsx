import { useNavigate } from "react-router-dom";

import Header from "../Components/Header";

import Textura100 from "../assets/TexturaPapelFull.png";
import Textura20 from "../assets/TexturaPapel.png";
import Logo from "../assets/LogoGrande.png";

import BannerShot from "../assets/BannerShot.png";
import BlueShot from "../assets/BlueShot.png";

import Bebidas from "../assets/bebidas.png";
import Shots from "../assets/Shots.png";
import Snacks from "../assets/Snacks.png";

import Cocktail from "../assets/Cocktail.png";
import ShotIcon from "../assets/VodkaShot.png";
import SnackIcon from "../assets/SnacksIcon.png";
import Carousel from "../Components/Carousel";

import ShotsMorra from "../assets/morrashots.png";
import EventoShots from "../assets/eventoshots.png";
import Cherrs from "../assets/cheers.png";

const Home = () => {
  const navigate = useNavigate();

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          height: "auto",
          maxHeight: "630px",

          overflow: "hidden",
          zIndex: "9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel slides={[BannerShot, BlueShot]} />
      </div>

      <div
        style={{
          backgroundImage: `url(${Textura20})`,

          display: "flex",

          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          marginTop: "-10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
          <img
            style={{
              width: "281px",

              objectFit: "contain",
            }}
            src={Logo}
            alt="Logo"
          />

          <nav
            style={{
              display: "flex",
              gap: "40px",
              flexDirection: "column",
              marginTop: "50px",
              fontSize: "20px",
              textDecoration: "underline",
              fontWeight: "300",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              style={{ color: "black" }}
              onClick={() => scrollToElement("snacks")}
            >
              SNACKS
            </a>
            <a
              style={{ color: "black" }}
              onClick={() => scrollToElement("shots")}
            >
              SHOTS
            </a>
            <a
              style={{ color: "black" }}
              onClick={() => scrollToElement("bebidas")}
            >
              BEBIDAS
            </a>
          </nav>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100vw",
            maxWidth: "800px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
            }}
          >
            <img
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              src={ShotsMorra}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#5EF3BE",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#F0FF96",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "lightblue",
            }}
          >
            {" "}
            <img
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              src={EventoShots}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "grey",
            }}
          >
            {" "}
            <img
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              src={Cherrs}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#F096FF",
            }}
          ></div>
        </div>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div style={{ marginTop: "50px", maxWidth: "800px" }}>
            <h2 id="bebidas" style={{ fontSize: "40px", margin: "0px" }}>
              Servicios
            </h2>
            <hr
              style={{
                width: "80%",
                border: "1px solid black",
                marginTop: "10px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <img
              style={{
                width: "300px",

                borderRadius: "10px",
              }}
              src={Bebidas}
              alt="Bebidas"
            />

            <img
              style={{ width: "90px", borderRadius: "10px" }}
              src={Cocktail}
              alt="Cocktail"
            />
            <h3 style={{ margin: "0px" }}>BEBIDAS</h3>
            <p style={{ width: "80vw", maxWidth: "500px" }}>
              Nuestra selección de bebidas es insuperable. Ofrecemos una amplia
              gama de opciones, incluyendo cócteles artesanales, bebidas sin
              alcohol y refrescantes mezclas. Cada bebida es elaborada con los
              mejores ingredientes, asegurando una experiencia de sabor
              inigualable.
            </p>
            <button
              style={{
                fontSize: "24px",
                padding: "10px 20px",

                borderRadius: "10px",

                border: "none",

                backgroundColor: "#F096FF",
                color: "white",

                cursor: "pointer",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => {
                navigate("/bebidas");
              }}
            >
              Contratar
            </button>
          </div>

          <hr
            id="shots"
            style={{
              width: "60vw",
              border: "1px solid black",
              maxWidth: "500px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <img
              style={{
                width: "300px",

                borderRadius: "10px",
              }}
              src={Shots}
              alt="Bebidas"
            />

            <img
              style={{ width: "90px", borderRadius: "10px" }}
              src={ShotIcon}
              alt="Cocktail"
            />
            <h3 style={{ margin: "0px" }}>SHOTS</h3>
            <p style={{ width: "80vw", maxWidth: "500px" }}>
              Nuestra barra de shots es el corazón de la fiesta. Ofrecemos una
              selección variada de shots, desde los clásicos hasta creaciones
              exclusivas, todos elaborados con los mejores ingredientes. ¡Haz
              que tus eventos sean inolvidables con nuestra energía y
              creatividad!
            </p>
            <button
              style={{
                fontSize: "24px",
                padding: "10px 20px",

                borderRadius: "10px",

                border: "none",

                backgroundColor: "#F096FF",
                color: "white",

                cursor: "pointer",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => {
                navigate("/shots");
              }}
            >
              Contratar
            </button>
          </div>

          <hr
            id="snacks"
            style={{
              width: "60vw",
              border: "1px solid black",
              maxWidth: "500px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
            }}
          >
            <img
              style={{
                width: "300px",

                borderRadius: "10px",
              }}
              src={Snacks}
              alt="Bebidas"
            />

            <img
              style={{ width: "90px", borderRadius: "10px" }}
              src={SnackIcon}
              alt="Cocktail"
            />
            <h3 style={{ margin: "0px" }}>SNACKS</h3>
            <p style={{ width: "80vw", maxWidth: "500px" }}>
              Disfruta de nuestros exquisitos snacks, perfectos para cualquier
              tipo de evento. Ya sea que prefieras algo salado, dulce o una
              mezcla de ambos, tenemos lo que necesitas.
            </p>
            <button
              style={{
                fontSize: "24px",
                padding: "10px 20px",

                borderRadius: "10px",

                border: "none",

                backgroundColor: "#F096FF",
                color: "white",

                cursor: "pointer",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => {
                navigate("/snacks");
              }}
            >
              Contratar
            </button>
          </div>
        </div>

        <div style={{ marginTop: "50px", maxWidth: "800px", height: "200px" }}>
          <h2 style={{ fontSize: "40px", margin: "0px" }}>Reseñas</h2>
          <hr
            style={{
              width: "80%",
              border: "1px solid black",
              marginTop: "10px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
