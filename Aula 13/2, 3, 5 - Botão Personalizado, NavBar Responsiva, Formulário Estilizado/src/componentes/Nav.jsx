import glamorous from "glamorous";

const NavbarContainer = glamorous.nav({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#2c3e50",
  color: "white",

  "@media(max-width: 600px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

const Logo = glamorous.div({
  fontSize: "20px",
  fontWeight: "bold",
});

const Links = glamorous.div({
  display: "flex",
  gap: "20px",

  "@media(max-width: 600px)": {
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
});

const Link = glamorous.a({
  color: "white",
  textDecoration: "none",
  fontSize: "16px",

  ":hover": {
    color: "#1abc9c",
  },
});

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Tech4me</Logo>
      <Links>
        <Link href="#">Home</Link>
        <Link href="#">Vitrine</Link>
        <Link href="#">Sobre</Link>
        <Link href="#">Contato</Link>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
