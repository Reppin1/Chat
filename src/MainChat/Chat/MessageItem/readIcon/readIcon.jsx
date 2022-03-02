import readedSvg from '../../../../assets/readed.svg';
import noReadedSvg from '../../../../assets/noreaded.svg';
import styles from '../messageItem.module.css';

const ReadIcon = ({isMe, isReaded}) => (isMe
  ? (isReaded ? (
    <div className={styles.statusReverseNoRead}>
      <img src={readedSvg} alt="Readed icon" />
    </div>
  ) : (
    <div className={styles.statusReverse}>
      <img
        src={noReadedSvg}
        alt="No readed icon"
      />
    </div>
  ))
  : null);

export { ReadIcon };
