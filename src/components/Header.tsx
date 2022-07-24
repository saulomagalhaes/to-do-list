import Logo from "../../src/assets/Logo.svg";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logotipo" />
    </header>
  );
}

export { Header };
