import Logo from "../assets/LogoJoli.jpg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

const Header = () => {
  const { cart, cartCount } = useCart();
  const navigate = useNavigate();
  return (
    <header>
      <div
        style={{
          backgroundColor: "black",

          height: "60px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",

          position: "sticky",
          top: "0",

          zIndex: "10",
        }}
      >
        <i style={{ cursor: "pointer" }} className="material-icons">
          menu
        </i>
        <img
          style={{
            height: "60px",
            width: "60px",
            objectFit: "contain",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
          src={Logo}
          alt="Logo"
        />

        <div style={{ cursor: "pointer" }} onClick={() => navigate("/carrito")}>
          {" "}
          <i className="material-icons">shopping_bag</i>
          <sub
            style={{
              fontWeight: "bold",
              color: "white",
              backgroundColor: "red",
              borderRadius: "50%",
              paddingLeft: "5px",
              paddingRight: "5px",
              fontFamily: "Poppins",
              position: "relative",
              top: "-15px",
              left: "-5px",

              fontSize: "10px",
            }}
          >
            {cartCount && cartCount}
          </sub>
        </div>
      </div>
    </header>
  );
};

export default Header;
