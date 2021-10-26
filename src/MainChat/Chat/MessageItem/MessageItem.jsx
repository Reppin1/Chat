import styles from "./messageItem.module.css"

const MessageItem = ({message, name, photo, date, me}) => {

  const itsMe = me

  return (
    <div className={styles.main}>
      <div className={itsMe ? styles.messageItem : styles.reverseMessage}>
        <img className={styles.img} src={photo} alt="Фото пользователя" />
        <div className={itsMe ? styles.item : styles.reverseItem}>
          {itsMe ? <div className={styles.span}><span className={styles.name}>{name}</span><span className={styles.date}>{date}</span></div> :
            <div className={styles.reverseSpan}><span className={styles.reverseDate}>{date}</span><span className={styles.reverseName}>{name}</span></div>}
          <div className={styles.message}>
            <p className={styles.p}>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MessageItem };