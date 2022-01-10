import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageItem } from '../MessageItem/MessageItem';
import { AddReaction, Microphone, PaperClip } from './Icons/Icons';
import styles from './chat.module.css';
import { messagesApi } from '../../../api/userMessages';
import { addNewMessage, setMessage, setUserToChatWith } from '../../../redux/MessageReducer/messageReducer';
import { socket } from '../../../Socket/socket';
import { EmptyBlock } from '../../../Helpers/Empty';
import { InputChat } from './InputChat/InputChat';
import { Scrollbar } from '../Scrollbar/Scrollbar';

const WindowChat = () => {
  const messages = useSelector((state) => state.messages.messages);
  const user = useSelector((state) => state.messages.user);
  const dialogId = useSelector((state) => state.dialogs.currentDialogId);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      const response = await messagesApi.getMessages(dialogId);
      dispatch(setMessage(response.data[0].message));
      dispatch(setUserToChatWith(response.data[0].user));
    })();
  }, [dialogId]);

  const handleNewMessage = (message) => {
    if (message.DialogId === dialogId) {
      dispatch(addNewMessage(message));
    }
  };

  React.useEffect(() => {
    socket.on('SERVER:NEW_MESSAGE', handleNewMessage);
    return () => socket.removeListener('SERVER:NEW_MESSAGE', handleNewMessage);
  }, [dispatch, dialogId]);

  return dialogId ? (
    messages.length
      ? (
        <div className={styles.main}>
          <div className={styles.scrollbar}>
            <Scrollbar messages={messages}>
              <div className={styles.messageItems}>
                {messages.map((el) => (
                  <MessageItem key={el.id} message={el} user={user} />
                ))}
              </div>
            </Scrollbar>
          </div>
          <div className={styles.inputMain}>
            <PaperClip />
            <InputChat dialogId={dialogId} />
            <AddReaction />
            <Microphone />
          </div>
        </div>
      )
      : (
        <div className={styles.main}>
          <div className={styles.empty}>
            <EmptyBlock description="Диалог пуст" />
          </div>
          <div className={styles.inputMainNotFound}>
            <PaperClip />
            <InputChat dialogId={dialogId} />
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
