import Logo from "../assets/LogoJoli.jpg";

const Header = () => {
  return (
    <header
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
      }}
    >
      <i className="material-icons">menu</i>
      <img
        style={{
          height: "60px",
          width: "60px",
          objectFit: "contain",
          borderRadius: "50%",
        }}
        src={Logo}
        alt="Logo"
      />

      <div>
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
          0{" "}
        </sub>
      </div>
    </header>
  );
};

export default Header;
