import Logo from "../../../../public/logo.png";

export const LogoComponent = () => {
  return (
    <a href="/hem" className="nav__logo logo">
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
    </a>
  );
};
