import styles from './sideBar.module.css'
import React from "react";

const SideBar = () => {

  const arr = [
    {name: 'Денис Гончаров', photo: ''},
    {name: 'Гоша Семенюк', photo: 'https://i.pinimg.com/736x/ac/3e/25/ac3e25c19a979606312463aa6b1cc2fd.jpg'},
    {name: 'Дмитрий Ботыгин', photo: 'https://pbs.twimg.com/media/EsZFwvJWMAA28Do.jpg'},
    {name: 'Роман Прудников', photo: 'https://i.pinimg.com/736x/ac/3e/25/ac3e25c19a979606312463aa6b1cc2fd.jpg'},
  ]

  const [active, setActive] = React.useState(0)

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {arr.map((el, index) => <div onClick={() => setActive(index)} key={index + el}
           className={`${styles.chatList} ${index === active ? styles.active : ''}`}>
          {el.photo ? <img className={styles.img} src={el.photo} alt="" /> : <div className={styles.img}>ДГ</div>}
          <div className={styles.name}>
            {el.name}
          </div>
        </div>)}
      </div>
    </div>
  );
};

export { SideBar };