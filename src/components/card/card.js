import Image from 'next/image';
import styles from './card.module.scss';

const Card = ({ amount, name, flag }) => {
  return (
    <div className="card" style={{ minWidth: '30%' }}>
      <div className="card-body">
        <p className={styles.name}>{name}</p>
        <div className={styles.amount}>
          <span className={styles.flag}>
            <Image src={flag} width={45} height={45} alt={name} />
          </span>
          {amount}
        </div>
        <p className={styles.balance}>Balance</p>
      </div>
    </div>
  );
};

export default Card;
