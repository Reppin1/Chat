import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from './chat.module.css';
import { Header } from '../Header/Header';
import { SideBar } from './SideBar/SideBar';
import { WindowChat } from './WindowChat/WindowChat';

const Chat = () => {
  const isActive = useSelector((state) => state.auth.isActive);

  const [redirect, setRedirect] = React.useState(false);

  React.useEffect(() => {
    if (!isActive) {
      setRedirect(true);
    }
  }, [isActive]);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mainMenu}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.chat}>
          <WindowChat />
        </div>
      </div>
    </div>
  );
};

export { Chat };
