import React from 'react';
import styles from '../chat.module.css';
import { messagesApi } from '../../../../api/userMessages';

const InputChat = ({dialogId}) => {
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

  React.useEffect(() => {
    setInputValue('');
  }, [dialogId]);

  const setInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onKeyDown={checkButtonPress}
        onChange={setInput}
        className={styles.input}
        placeholder="Введите сообщение"
      />
    </div>
  );
};

export { InputChat };
