import Header from "../Components/Header";
import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { useEffect, useState } from "react";
import "../App.css";

import ShotsMango from "../assets/ShotsMango.png";

const Shots = () => {
  const { cart, addItem } = useCart();
  const [cantidad, setCantidad] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [shotsPremium, setShotsPremium] = useState([
    {
      nombre: "Winnis",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Pandita",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Luna Azul",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Baby fresa",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Baby mango",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Baby sandia",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Pulparindo",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Citrus deelight",
      ingredientes: ["vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Tequila sunrise",
      ingredientes: ["Tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Mango sex",
      ingredientes: ["Tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Banderita",
      ingredientes: ["Tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Pika pika",
      ingredientes: ["Tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Michelado ",
      ingredientes: ["Tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Unicornio",
      ingredientes: ["Ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Capitan America",
      ingredientes: ["Ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Piña colada",
      ingredientes: ["Ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Laguna de fresa",
      ingredientes: ["Licor de cafe"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Mazapanazo",
      ingredientes: ["Licor de cafe"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Beso de angel",
      ingredientes: ["Licor de cafe"],
      img: ShotsMango,
      seleccionado: false,
    },
  ]);

  const [cantidadPremium, setCantidadPremium] = useState(0);

  const [shotsHappy, setShotsHappy] = useState([
    {
      nombre: "Cacao",
      ingredientes: ["agua", "vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Menta",
      ingredientes: ["agua", "tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Pitufo",
      ingredientes: ["agua", "cerveza"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Igreen",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Freson",
      ingredientes: ["agua", "vodka"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Cherry",
      ingredientes: ["agua", "tequila"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Durazno",
      ingredientes: ["agua", "cerveza"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Bannano",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Sandicha",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
      seleccionado: false,
    },
    {
      nombre: "Melonaxo",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
      seleccionado: false,
    },
  ]);

  const [cantidadHappy, setCantidadHappy] = useState(0);

  const [sabores, setSabores] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    setShotsPremium((prevShots) =>
      prevShots.map((shot) => ({ ...shot, seleccionado: false }))
    );

    setShotsHappy((prevShots) =>
      prevShots.map((shot) => ({ ...shot, seleccionado: false }))
    );
    const selectedValue = event.target.value;
    const [selectedQuantity, selectedPrice, cantidadPremium, cantidadHappy] =
      selectedValue.split(",");

    // Set the quantity and price
    setCantidad(parseInt(selectedQuantity, 10));
    setPrice(parseFloat(selectedPrice));
    setCantidadPremium(parseInt(cantidadPremium, 10));
    setCantidadHappy(parseInt(cantidadHappy, 10));
  };

  const maxSeleccionados = cantidadPremium;

  const maxSeleccionadosHappy = cantidadHappy;

  const [seleccionadosPremium, setSeleccionadosPremium] = useState(0);
  const [seleccionadosHappy, setSeleccionadosHappy] = useState(0);

  const handleShotClick = (index) => {
    setShotsPremium((prevShots) => {
      const updatedShots = [...prevShots];
      const currentlySelected = updatedShots.filter(
        (shot) => shot.seleccionado
      ).length;

      const shot = updatedShots[index];

      if (shot.seleccionado) {
        // If the shot is already selected, simply deselect it
        updatedShots[index] = { ...shot, seleccionado: false };
        const currentlySelected = updatedShots.filter(
          (shot) => shot.seleccionado
        ).length;

        setSeleccionadosPremium(currentlySelected);
      } else {
        // If the shot is not selected and the limit is not reached, select it
        if (currentlySelected < maxSeleccionados) {
          updatedShots[index] = { ...shot, seleccionado: true };
          const currentlySelected = updatedShots.filter(
            (shot) => shot.seleccionado
          ).length;

          setSeleccionadosPremium(currentlySelected);
        } else {
          alert("Maximo alcanzado");
        }
      }

      return updatedShots;
    });
  };

  const handleShotClickHappy = (index) => {
    setShotsHappy((prevShots) => {
      const updatedShots = [...prevShots];
      const currentlySelected = updatedShots.filter(
        (shot) => shot.seleccionado
      ).length;

      const shot = updatedShots[index];

      if (shot.seleccionado) {
        // If the shot is already selected, simply deselect it
        updatedShots[index] = { ...shot, seleccionado: false };
        const currentlySelected = updatedShots.filter(
          (shot) => shot.seleccionado
        ).length;
        setSeleccionadosHappy(currentlySelected);
      } else {
        // If the shot is not selected and the limit is not reached, select it
        if (currentlySelected < maxSeleccionadosHappy) {
          updatedShots[index] = { ...shot, seleccionado: true };
          const currentlySelected = updatedShots.filter(
            (shot) => shot.seleccionado
          ).length;
          setSeleccionadosHappy(currentlySelected);
        } else {
          alert("Maximo alcanzado");
        }
      }

      return updatedShots;
    });
  };

  const scrollToPaquetes = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [tipoPaquete, setPaquete] = useState(0);

  useEffect(() => {
    if (cantidadPremium && cantidadHappy > 0) {
      setPaquete("PaqueteHappy");
    }
    if (cantidadPremium > 0 && isNaN(cantidadHappy)) {
      setPaquete("PaquetePremium");
    }
  }, [cantidadPremium, cantidadHappy]);

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
            width: "100vw",
          }}
        >
          <h1 style={{ margin: "0px" }} className="shots-title">
            SHOTS
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
            Nuestra barra de shots es el corazón de la fiesta. Ofrecemos una
            selección variada de shots, desde los clásicos hasta creaciones
            exclusivas, todos elaborados con los mejores ingredientes.
          </p>
        </div>

        <div
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",

            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "42px",
              fontWeight: "800",
              margin: "0px",
              marginTop: "20px",

              textAlign: "center",
            }}
            id="menu"
          >
            {" "}
            Menu
          </p>

          <hr
            style={{ width: "20vw", height: "2px", backgroundColor: "black" }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <select
              id="paquetes"
              style={{
                backgroundColor: "#F096FF",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "17px",
                fontWeight: "500",
              }}
              onClick={() => scrollToPaquetes()}
              onChange={handleChange}
              className="snacks-select"
              value={
                cantidadHappy > 0
                  ? `${cantidad}, ${price}, ${cantidadPremium}, ${cantidadHappy}`
                  : `${cantidad}, ${price}, ${cantidadPremium}`
              }
            >
              <option value={"0, 0, 0, 0"}>Seleccionar paquete</option>
              <option disabled>----------------------</option>
              <option disabled></option>
              <option disabled>Shots Premium</option>

              <option disabled></option>
              <option value={"100, 1700, 3"}>100 shots premium - $1,700</option>
              <option value={"200, 3400, 3"}>200 shots premium - $3,400</option>
              <option value={"300, 5100, 3"}>300 shots premium - $5,100</option>
              <option value={"400, 6000, 4"}>400 shots premium - $6,000</option>
              <option value={"500, 7500, 5"}>500 shots premium - $7,500</option>
              <option value={"600, 9000, 6"}>600 shots premium - $9,000</option>
              <option value={"700, 10500, 7"}>
                700 shots premium - $10,500
              </option>
              <option value={"800, 11200, 8"}>
                800 shots premium - $11,200
              </option>
              <option value={"900, 12600, 9"}>
                900 shots premium - $12,600
              </option>
              <option disabled>----------------------</option>
              <option disabled>Shots Happy</option>
              <option disabled>(incluye 100 Shots Premium)</option>
              <option disabled></option>

              <option value={"30, 1450, 3, 3"}>200 shots happy - $2,500</option>
              <option value={"300, 3450, 3, 3"}>
                300 shots happy - $3,400
              </option>
              <option value={"400, 4100, 3, 6"}>
                400 shots happy - $4,100
              </option>
              <option value={"500, 5100, 3, 9"}>
                500 shots happy - $5,100
              </option>
              <option value={"600, 6100, 3, 9"}>
                600 shots happy - $6,100
              </option>
              <option value={"700, 7100, 3, 9"}>
                700 shots happy - $7,100
              </option>
              <option value={"800, 8100, 3, 9"}>
                800 shots happy - $8,100
              </option>
              <option value={"900, 9100, 3, 9"}>
                900 shots happy - $9,100
              </option>
            </select>
          </div>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "800",
              margin: "0px",
              marginTop: "60px",

              textAlign: "center",
            }}
          >
            {" "}
            Shots Premium
          </p>

          <p
            style={{
              fontSize: "24px",
              fontWeight: "500",
              margin: "0px",
              marginTop: "20px",

              textAlign: "center",
            }}
          >
            {" "}
            Elige{" "}
            {cantidadPremium === 0
              ? "un paquete para poder elegir shots"
              : "hasta " + cantidadPremium + " sabores"}
          </p>

          <div className="shots-grid">
            {shotsPremium.map((shot, index) => (
              <>
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow:
                      shot.seleccionado === true
                        ? "0px 0px 10px 5px rgba(78, 189, 120, 0.5)"
                        : "0 0 4px 4px rgba(0, 0, 0, 0.1)",

                    width: "150px",
                    height: "max-content",
                  }}
                  onClick={() => {
                    if (cantidadPremium === 0) {
                      return;
                    }
                    handleShotClick(index);
                  }}
                  className="shots-card"
                >
                  {" "}
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ width: "120px" }}
                      src={shot.img}
                      alt={shot.alt}
                    />
                    <strong>{shot.nombre}</strong>
                  </div>
                  <ul
                    style={{
                      textAlign: "left",
                      marginLeft: "15px",
                    }}
                  >
                    {shot.ingredientes.map((ingrediente, index) => (
                      <li
                        key={index}
                        style={{
                          fontSize: "15px",
                          fontWeight: "300",
                        }}
                      >
                        {ingrediente}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ))}
          </div>

          {cantidad > 0 && isNaN(cantidadHappy) ? null : (
            <>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  margin: "0px",
                  marginTop: "60px",

                  textAlign: "center",
                }}
              >
                {" "}
                Shots Happy
              </p>

              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  margin: "0px",
                  marginTop: "20px",

                  textAlign: "center",
                }}
              >
                {" "}
                Elige{" "}
                {cantidadHappy < 1 || isNaN(cantidadHappy)
                  ? "un paquete para poder elegir shots"
                  : "hasta " + cantidadHappy + " sabores"}
              </p>
            </>
          )}

          <div className="shots-grid">
            {cantidad > 0 && isNaN(cantidadHappy)
              ? null
              : shotsHappy.map((shot, index) => (
                  <>
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow:
                          shot.seleccionado === true
                            ? "0px 0px 10px 5px rgba(78, 189, 120, 0.5)"
                            : "0 0 4px 4px rgba(0, 0, 0, 0.1)",

                        width: "150px",
                        height: "max-content",
                      }}
                      onClick={() => {
                        if (cantidadHappy === 0) {
                          return;
                        }
                        handleShotClickHappy(index);
                      }}
                      className="shots-card"
                    >
                      {" "}
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={{ width: "120px" }}
                          src={shot.img}
                          alt={shot.alt}
                        />
                        <strong>{shot.nombre}</strong>
                      </div>
                      <ul
                        style={{
                          textAlign: "left",
                          marginLeft: "15px",
                        }}
                      >
                        {shot.ingredientes.map((ingrediente, index) => (
                          <li
                            key={index}
                            style={{
                              fontSize: "15px",
                              fontWeight: "300",
                            }}
                          >
                            {ingrediente}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ))}
          </div>
        </div>

        <div
          style={{
            display:
              tipoPaquete === "PaquetePremium" && seleccionadosPremium > 0
                ? "flex"
                : tipoPaquete === "PaqueteHappy" &&
                  seleccionadosHappy > 0 &&
                  seleccionadosPremium > 0
                ? "flex"
                : "none",
          }}
          className="botton-agregar-mobile"
        >
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "80vw",
              boxShadow: "0px 0px 4px 4px rgba(0, 0, 0, 0.1)",
            }}
            onClick={() => {
              addItem({
                servicio: "Barra Shots",
                precio: price,
                cantidad: cantidad,
                descipcion: `${cantidad} shots`,
                saboresPremium: `${shotsPremium
                  .filter((shot) => shot.seleccionado === true)
                  .map((shot) => shot.nombre)
                  .join(", ")}`,
                saboresHappy: `${shotsHappy
                  .filter((shot) => shot.seleccionado === true)
                  .map((shot) => shot.nombre)
                  .join(", ")}`,
              });
              setCantidad(0);
              setPrice(0);

              navigate("/carrito");
            }}
          >
            Agregar barra de shots <br /> {cantidad} Shots - $
            {price.toLocaleString()}
          </button>
        </div>
      </div>
    </>
  );
};

export default Shots;
