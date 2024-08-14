import Header from "../Components/Header";
import { useEffect } from "react";
import { useCart } from "../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Carrito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart, cartCount, addItem, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", margin: "0px", marginTop: "20px" }}>
        {" "}
        Carrito
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {" "}
        <select
          style={{
            marginTop: "20px",
            cursor: "pointer",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 10px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: "#6FCF85",
          }}
          onChange={(e) => navigate(`/${e.target.value}`)}
          className="carrito-agregar-servicio"
        >
          <option value="carrito">Agregar servicio</option>

          <option value="snacks">Snacks</option>
          <option value="bebidas">Bebidas</option>
          <option value="shots">Shots</option>
        </select>
      </div>

      <div
        style={{
          display: "flex",
          padding: "20px",

          flexDirection: "column",
          height: cartCount < 1 ? "0px" : "100vh",

          gap: "20px",
        }}
      >
        {cart.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "white",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              borderRadius: "10px",
              padding: "10px",

              gap: "1px",
            }}
            key={item.id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
              onClick={() => removeItem(item.id)}
            >
              <i
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                  backgroundColor: "#FF4D4D",
                  color: "white",
                  borderRadius: "50%",
                  padding: "5px",
                }}
                className="material-icons"
              >
                close
              </i>
            </div>

            <div
              style={{
                textAlign: "center",
                display: "flex",

                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-20px",

                gap: "1px",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                <strong>{item.servicio}</strong> <br /> <br />
                Cantidad: {item.descipcion} <br></br>{" "}
                <strong>Precio: ${item.precio}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: cartCount < 1 ? "none" : "flex",
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
          onClick={() => window.open("http://raffly.com.mx", "_blank")}
        >
          Confirmar Orden <br />
          Total: ${cart.reduce((acc, item) => acc + item.precio, 0)}
        </button>

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
          onClick={() => clearCart()}
        >
          Limpiar carrito
        </button>
      </div>
    </>
  );
};

export default Carrito;
