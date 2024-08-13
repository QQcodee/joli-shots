import Header from "../Components/Header";
import "../App.css";

import SnacksBar from "../assets/Snacks.png";

const Snacks = () => {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",

          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            height: "max-content",
          }}
        >
          <h1 style={{ margin: "0px" }} className="snacks-title">
            SNACKS
          </h1>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "300",

              padding: "20px",
              textAlign: "center",

              backgroundColor: "black",
              color: "white",
            }}
          >
            {" "}
            Disfruta de nuestros exquisitos snacks, perfectos para cualquier
            tipo de evento. Ya sea que prefieras algo salado, dulce o una mezcla
            de ambos, tenemos lo que necesitas.
          </p>
        </div>

        <div className="fondo-snacks">
          <p
            style={{
              fontSize: "42px",
              fontWeight: "800",

              textAlign: "center",
            }}
          >
            {" "}
            Menu
          </p>
          <hr
            style={{ width: "20vw", height: "2px", backgroundColor: "black" }}
          />

          <div
            style={{
              textAlign: "center",

              color: "black",
              width: "max-content",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              zIndex: "1",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="menu-snacks"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul className="lista-snacks">
                <p
                  style={{
                    fontSize: "27px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Dulces
                </p>
                <li>Panditas</li>
                <li>Tiburones</li>
                <li>Skwincles</li>
                <li>Lombriz gomita</li>

                <li>Lombriz azucar</li>
                <li>Mangos enchilados</li>
                <li>Aros de goma</li>
                <li>Palitos de tamarindo</li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ul className="lista-snacks">
                <p
                  style={{
                    fontSize: "27px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Botana Salada
                </p>
                <li>Tostitos Verdes o Flamin</li>
                <li>Cacahuates Japoneses</li>
                <li>Cacahuates Enchilados</li>
                <li>Papas Caseras</li>

                <li>Ruffles</li>
                <li>Doritos</li>
              </ul>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                marginBottom: "60px",
              }}
            >
              <ul className="lista-snacks">
                <p
                  style={{
                    fontSize: "27px",
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Fruta | Verdura
                </p>
                <li>Pepino</li>
                <li>Zanahoria</li>
                <li>Jicama</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img
            style={{
              width: "300px",

              borderRadius: "10px",
              marginBottom: "60px",
            }}
            src={SnacksBar}
            alt="Bebidas"
          />
        </div>
      </div>
    </>
  );
};

export default Snacks;
