import Header from "../Components/Header";
import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import "../App.css";

import SnacksBar from "../assets/Snacks.png";

const Snacks = () => {
  const { cart, cartCount, addItem, removeItem, clearCart } = useCart();
  const [cantidad, setCantidad] = useState(0);
  const [price, setPrice] = useState(0);

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

          <div className="menu-snacks">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "350px",
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
                width: "350px",
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
                width: "350px",
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

export default Snacks;

/*

 <div style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <img
            style={{
              width: "90vw",
              maxWidth: "800px",

              borderRadius: "10px",
              marginBottom: "60px",
            }}
            src={SnacksBar}
            alt="Bebidas"
          />
        </div>*/
