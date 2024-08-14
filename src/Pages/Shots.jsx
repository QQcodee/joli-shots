import Header from "../Components/Header";
import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import "../App.css";

import ShotsMango from "../assets/ShotsMango.png";

const Shots = () => {
  const { cart, cartCount, addItem, removeItem, clearCart } = useCart();
  const [cantidad, setCantidad] = useState(0);
  const [price, setPrice] = useState(0);

  const [shotsPremium, setShotsPremium] = useState([
    {
      nombre: "Vodka",
      ingredientes: ["agua", "vodka"],
      img: ShotsMango,
    },
    {
      nombre: "Tequila",
      ingredientes: ["agua", "tequila"],
      img: ShotsMango,
    },
    {
      nombre: "Cerveza",
      ingredientes: ["agua", "cerveza"],
      img: ShotsMango,
    },
    {
      nombre: "Ron",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
    },
    {
      nombre: "Vodka",
      ingredientes: ["agua", "vodka"],
      img: ShotsMango,
    },
    {
      nombre: "Tequila",
      ingredientes: ["agua", "tequila"],
      img: ShotsMango,
    },
    {
      nombre: "Cerveza",
      ingredientes: ["agua", "cerveza"],
      img: ShotsMango,
    },
    {
      nombre: "Ron",
      ingredientes: ["agua", "ron"],
      img: ShotsMango,
    },
  ]);

  const navigate = useNavigate();

  console.log(cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const [selectedQuantity, selectedPrice] = selectedValue.split(",");

    // Set the quantity and price
    setCantidad(parseInt(selectedQuantity, 10));
    setPrice(parseFloat(selectedPrice));
  };

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
          >
            {" "}
            Menu
          </p>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <select
              style={{
                backgroundColor: "#F096FF",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: "10px",
                fontSize: "17px",
                fontWeight: "500",
              }}
              onChange={handleChange}
              className="snacks-select"
              value={`${cantidad}, ${price}`}
            >
              <option value={"0, 0"}>Seleccionar cantidad</option>
              <option value={"30, 1450"}>30 vasos - $1,450</option>
              <option value={"50, 2350"}>50 vasos - $2,350</option>
              <option value={"100, 3900"}>100 vasos - $3,900</option>
              <option value={"150, 5850"}>150 vasos - $5,850</option>
              <option value={"200, 7800"}>200 vasos - $7,800</option>
            </select>
          </div>
          <hr
            style={{ width: "20vw", height: "2px", backgroundColor: "black" }}
          />

          <div className="shots-grid">
            {shotsPremium.map((shot, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",

                  width: "150px",
                  height: "max-content",
                }}
                className="shots-card"
              >
                <img style={{ width: "120px" }} src={shot.img} alt={shot.alt} />
                {shot.ingredientes.map((ingrediente, index) => (
                  <p
                    key={index}
                    style={{
                      fontSize: "20px",
                      fontWeight: "300",
                      margin: "10px",
                    }}
                  >
                    {ingrediente}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ display: cantidad < 1 ? "none" : "flex" }}
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
                servicio: "Barra Snacks",
                precio: price,
                cantidad: cantidad,
                descipcion: `${cantidad} vasos`,
              });
              setCantidad(0);
              setPrice(0);

              navigate("/carrito");
            }}
          >
            Agregar barra de snacks <br /> {cantidad} vasos - ${price}
          </button>
        </div>
      </div>
    </>
  );
};

export default Shots;
