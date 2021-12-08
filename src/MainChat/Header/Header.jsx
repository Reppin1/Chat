import styles from "./header.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/chat.png"
import { UserApi } from "../../api/createUser";
import { useSelector } from "react-redux";

const Header = () => {
  const path = useLocation().pathname
  const history = useHistory()
  const firstName = useSelector((state) => state.auth.firstName)
  const avatar = useSelector((state) => state.auth.avatarUrl)
  const initials = useSelector((state) => state.auth.initials)

  const logout = async () => {
    const result = await UserApi.logout()
    if(result) {
      history.push('/')
    }
  }

  return (
    <div className={styles.main}>
      {path.includes('main') ? <div>
        {avatar ? <Link to="/profile"><img className={styles.img} src={avatar} alt="" /></Link> :
          <div className={styles.img}>{initials}</div>}
      </div> : <Link to="/main"><img className={styles.chat} src={logo} alt="" /></Link>}
      <div className={styles.name}>
        {path.includes('main') ? firstName : "Обратно в чат"}
        <input className={styles.input} placeholder="Введите ID друга" type="text" />
      </div>
      <div onClick={logout} className={styles.exit}>
        Выход
      </div>
    </div>
  );
};

export { Header };