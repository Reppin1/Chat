import styles from "./header.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/chat.png"

const Header = () => {
  const img = 'https://pbs.twimg.com/media/EsZFwvJWMAA28Do.jpg'
  const path = useLocation().pathname

  return (
    <div className={styles.main}>
      {path.includes('main') ? <div>
        {img ? <Link to="/profile"><img className={styles.img} src={img} alt="" /></Link> :
          <div className={styles.img}>AK</div>}
      </div> : <Link to="/main"><img className={styles.chat} src={logo} alt="" /></Link>}
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