import styles from "./messageItem.module.css";

const MessageItem = ({item}) => {

  const itsMe = item.me

  return (
    <div className={styles.main}>
      <div className={itsMe ? styles.messageItem : styles.reverseMessage}>
        <img className={styles.img} src={item.from.photo} alt="Фото пользователя" />
        <div className={itsMe ? styles.item : styles.reverseItem}>
          {itsMe ?
            <div className={styles.span}><span className={styles.name}>{item.from.name}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
            :
            <div className={styles.reverseSpan}><span className={styles.reverseDate}>{item.date}</span>
              <span className={styles.reverseName}>{item.from.name}</span>
            </div>
          }
          <div className={styles.message}>
            <p className={styles.p}>{item.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MessageItem };