import styles from "./profile.module.css";
import { Header } from "../Header/Header";

const Profile = () => {

  const photo="https://yt3.ggpht.com/ytc/AKedOLT6ta-YNTnLqNe9dYW7R3XiiW4RSdyJpvj5NeB_Bg=s900-c-k-c0x00ffffff-no-rj"

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.item}>
        <img className={styles.img} src={photo} alt="Фото пользователя" />
        <div className={styles.nameInfo}>
          <div className={styles.span}>
            <span className={styles.name}>Денис</span>
          </div>
          <div className={styles.message}>
            <p className={styles.p}>Тест инфа</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };