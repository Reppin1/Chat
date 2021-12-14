import React from 'react';
import { useSelector } from 'react-redux';
import { MessageItem } from '../MessageItem/MessageItem';
import { AddReaction, Microphone, PaperClip } from './Icons/Icons';
import styles from './chat.module.css';

const WindowChat = () => {
  const items = useSelector((state) => state.messages.messages);

  return items.length ? (
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
  ) : <div>У вас пока нет сообщений</div>;
};

export { WindowChat };
