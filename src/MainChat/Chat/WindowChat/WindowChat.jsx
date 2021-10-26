import { MessageItem } from '../MessageItem/MessageItem'
import styles from './chat.module.css'
import { AddReaction, Microphone, PaperClip } from "./Icons/Icons";

const WindowChat = () => {

  const fistMessage = "ТУДА СЮДА ЧИХ Я СНОВА ЖИВУ sdasdasfddsddfjioshrguohdrznguiobndfibniuxlfdnbxfdnb Я СНОВА ЖИВУ" +
    "ТУДА СЮДА ЧИХ Я СНОВА ЖИВУ sdasdasfddsddfjioshrguohdrznguiobndfibniuxlfdnbxfdnb Я СНОВА ЖИВУ"
  const secondMessage = "Я СНОВА ЖИВУ sdasdasfddsddfjioshrguohdrznguiobndfibniuxlfdnbxfdnb Я СНОВА ЖИВУ sdasdasfddsddfjioshr" +
    "Я СНОВА ЖИВУ sdasdasfddsddfjioshrguohdrznguiobndfibniuxlfdnbxfdnb Я СНОВА ЖИВУ sdasdasfddsddfjioshr"

  return (
    <div className={styles.main}>
      <div className={styles.messageItems}>
        <MessageItem
          message={fistMessage}
          name="Леха"
          photo="https://yt3.ggpht.com/ytc/AKedOLT6ta-YNTnLqNe9dYW7R3XiiW4RSdyJpvj5NeB_Bg=s900-c-k-c0x00ffffff-no-rj"
          date="10:40"
          me={true}
        />
        <MessageItem
          message={secondMessage}
          name="Денис"
          photo="https://www.photogorky.ru/photos/e617ca56cb27c0110b751ef7880f2e8d.jpg"
          date="10:41"
          me={false}
        />
      </div>
      <div className={styles.inputMain}>
        <PaperClip />
        <textarea className={styles.input} placeholder="Введите сообщение"/>
        <AddReaction/>
        <Microphone />
      </div>
    </div>
  );
};

export { WindowChat };