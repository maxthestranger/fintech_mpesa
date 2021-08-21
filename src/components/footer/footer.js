import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        All Rights Reserved. {new Date().getFullYear()}. Made with 💖 by Max The
        Stranger
      </p>
    </footer>
  );
};

export default Footer;
