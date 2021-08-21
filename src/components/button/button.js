import styles from './button.module.scss';

const Button = ({ link, value, toggleDrawer }) => {
  return (
    <a
      href={link}
      onClick={toggleDrawer}
      className={`btn btn-primary ${styles}`}
    >
      {value}
    </a>
  );
};

export default Button;
