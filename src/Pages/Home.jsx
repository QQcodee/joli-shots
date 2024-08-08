import Header from "../Components/Header";

import Textura100 from "../assets/TexturaPapelFull.png";
import Textura20 from "../assets/TexturaPapel.png";
import Logo from "../assets/LogoGrande.png";
import BannerShot from "../assets/BannerShot.png";
import Bebidas from "../assets/bebidas.png";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${Textura20})`,

          height: "100vh",
          width: "100vw",

          display: "flex",

          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img
          style={{ width: "100vw", objectFit: "contain" }}
          src={BannerShot}
          alt="BannerShot"
        ></img>

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
            <a>SNACKS</a>
            <a>SHOTS</a>
            <a>BEBIDAS</a>
          </nav>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div
            style={{ width: "50vw", height: "200px", backgroundColor: "red" }}
          ></div>
          <div
            style={{ width: "50vw", height: "200px", backgroundColor: "blue" }}
          ></div>
          <div
            style={{ width: "50vw", height: "200px", backgroundColor: "blue" }}
          ></div>
          <div
            style={{ width: "50vw", height: "200px", backgroundColor: "red" }}
          ></div>
          <div
            style={{ width: "50vw", height: "200px", backgroundColor: "red" }}
          ></div>
          <div
            style={{
              width: "50vw",
              height: "200px",
              backgroundColor: "blue",
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
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ fontSize: "40px", margin: "0px" }}>Servicios</h2>
            <hr
              style={{
                width: "60vw",
                border: "1px solid black",
                marginTop: "-5px",
              }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <img
              style={{
                width: "300px",

                borderRadius: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
              }}
              src={Bebidas}
              alt="Bebidas"
            />

            <h3>BEBIDAS</h3>
            <p>Descripción</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
