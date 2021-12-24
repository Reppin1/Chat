import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageItem } from '../MessageItem/MessageItem';
import { AddReaction, Microphone, PaperClip } from './Icons/Icons';
import styles from './chat.module.css';
import { messagesApi } from '../../../api/userMessages';
import { addNewMessage, setMessage, setUserToChatWith } from '../../../redux/MessageReducer/messageReducer';
import { socket } from '../../../Socket/socket';
import { EmptyBlock } from '../../../Helpers/Empty';

const WindowChat = () => {
  const messages = useSelector((state) => state.messages.messages);
  const user = useSelector((state) => state.messages.user);
  const dialogId = useSelector((state) => state.dialogs.currentDialogId);
  const dispatch = useDispatch();
  const [text, setInputValue] = React.useState('');
  const sendMessage = async () => {
    await messagesApi.sendMessage({dialogId, text});
  };

  const checkButtonPress = async (event) => {
    if (event.key === 'Enter') {
      await sendMessage();
      setInputValue('');
    }
  };

  const handleNewMessage = (message) => {
    dispatch(addNewMessage(message));
  };

  React.useEffect(() => {
    (async () => {
      const response = await messagesApi.getMessages(dialogId);
      dispatch(setMessage(response.data[0].message));
      dispatch(setUserToChatWith(response.data[0].user));
    })();
  }, [dialogId]);

  React.useEffect(() => {
    socket.on('SERVER:NEW_MESSAGE', handleNewMessage);
    return () => socket.removeListener('SERVER:NEW_MESSAGE', handleNewMessage);
  }, [dispatch]);

  // eslint-disable-next-line no-nested-ternary
  return dialogId ? (
    messages.length
      ? (
        <div className={styles.main}>
          <div className={styles.messageItems}>
            {messages.map((el) => (
              <MessageItem key={el.id} message={el} user={user} />
            ))}
          </div>
          <div className={styles.inputMain}>
            <PaperClip />
            <textarea
              value={text}
              onKeyDown={checkButtonPress}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.input}
              placeholder="Введите сообщение"
            />
            <AddReaction />
            <Microphone />
          </div>
        </div>
      )
      : (
        <div className={styles.main}>
          <div className={styles.empty}>
            <EmptyBlock description="Ничего не найдено" />
          </div>
          <div className={styles.inputMainNotFound}>
            <PaperClip />
            <textarea
              value={text}
              onKeyDown={checkButtonPress}
              onChange={(e) => setInputValue(e.target.value)}
              className={styles.input}
              placeholder="Введите сообщение"
            />
            <AddReaction />
            <Microphone />
          </div>
        </div>
      )
  ) : (
    <div>
      <div className={styles.empty}>
        <EmptyBlock description="Откройте диалог" />
      </div>
    </div>
  );
};

export { WindowChat };
