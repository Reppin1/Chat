import styles from "./header.module.css";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/chat.png"

const Header = () => {

  let history = useHistory()
  const img = 'https://pbs.twimg.com/media/EsZFwvJWMAA28Do.jpg'
  const path = useLocation().pathname

  const toggleUrl = () => {
    if (path.includes('main')) {
      history.push('/profile')
    } else {
      history.push('/main')
    }
  }

  return (
    <div className={styles.main}>
      {path.includes('main') ? <div>
        {img ? <img className={styles.img} src={img} alt="" onClick={toggleUrl} /> :
          <div className={styles.img}>AK</div>}
      </div> : <img onClick={toggleUrl} className={styles.chat} src={logo} alt="" />}
      <div className={styles.name}>
        {path.includes('main') ? "Денис" : "Обратно в чат"}
        <input className={styles.input} placeholder="Введите ID друга" type="text" />
      </div>
      <div className={styles.exit}>
        Выход
      </div>
    </div>
  );
};

export { Header };