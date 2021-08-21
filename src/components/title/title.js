import styles from './title.module.scss';

const Title = ({ title }) => {
  return <h3 className={styles.title}>{title}</h3>;
};

export default Title;
