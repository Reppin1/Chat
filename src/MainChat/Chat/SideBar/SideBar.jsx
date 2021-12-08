import styles from './sideBar.module.css'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentDialogId, setDialogItem } from "../../../redux/DialogReducer/dialogReducer";

const SideBar = () => {
  const dispatch = useDispatch()
  const item = useSelector((state) => state.dialog.item)
  const arr = [
    {id: 1, name: 'Денис Гончаров', photo: ''},
    {id: 2, name: 'Гоша Семенюк', photo: 'https://i.pinimg.com/736x/ac/3e/25/ac3e25c19a979606312463aa6b1cc2fd.jpg'},
    {id: 3, name: 'Дмитрий Ботыгин', photo: 'https://pbs.twimg.com/media/EsZFwvJWMAA28Do.jpg'},
    {id: 4, name: 'Роман Прудников', photo: 'https://i.pinimg.com/736x/ac/3e/25/ac3e25c19a979606312463aa6b1cc2fd.jpg'},
  ]
  const selectDialog = (id) => {
    dispatch(setCurrentDialogId(id))
  }
  const [active, setActive] = React.useState(null)

  React.useEffect(() => {
    dispatch(setDialogItem(arr))
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {item.map((el, index) =>
          <div onClick={() => selectDialog(el.id)} key={el.id}
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