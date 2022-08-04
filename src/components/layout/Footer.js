// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.created}>
          © {currentYear} Created by Herdian Permana (152235865101-461)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
