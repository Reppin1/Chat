import { MessageItem } from '../MessageItem/MessageItem'
import React from "react";
import styles from './chat.module.css'
import { AddReaction, Microphone, PaperClip } from "./Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../../redux/MessageReducer/messageReducer";

const WindowChat = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.message.item)
  const dialogId = useSelector((state) => state.dialog.currentDialogId)

  const message = [{
    id: 1,
    message: "Это сообщение",
    userSend: 2,
    createdAt: new Date().toLocaleString(),
    dialogId: 2, //conversation id
  }]

  const conversation = [
    {
      id: 2,
      userOne: 2, //USER DATABASE
      userTwo: 1, //USER DATABASE
      me: true,
    },
    {
      id: 2,
      userOne: 1,
      userTwo: 2,
      me: false,
    }
  ]

  React.useEffect(() => {

  }, [dialogId])

  return items ? (
    <div className={styles.main}>
      <div className={styles.messageItems}>
        {items.map((item) => <MessageItem item={item} />)}
      </div>
      <div className={styles.inputMain}>
        <PaperClip />
        <textarea className={styles.input} placeholder="Введите сообщение" />
        <AddReaction />
        <Microphone />
      </div>
    </div>
  ) : <div>У вас пока нет сообщений</div>
};

export { WindowChat };