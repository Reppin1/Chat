import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sideBar.module.css';
// eslint-disable-next-line import/named
import {
  addDialog, setActiveDialog, setCurrentDialogId, setDialogs,
} from '../../../redux/DialogReducer/dialogReducer';
import { dialogApi } from '../../../api/userDialogs';
import { getInitials } from '../../../utils/getInitials';
import { EmptyBlock } from '../../../Helpers/Empty';
import { socket } from '../../Header/Header';
import { lastSeen } from '../../../Helpers/lastSeen';

const SideBar = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.dialogs);
  const activeDialog = useSelector((state) => state.dialogs.activeDialog);

  const selectDialog = (id) => {
    dispatch(setActiveDialog(id));
    dispatch(setCurrentDialogId(id));
  };

  const addNewUserToSidebar = (infoDialog) => {
    dispatch(addDialog(infoDialog));
  };

  React.useEffect(() => {
    (async () => {
      const response = await dialogApi.getDialogs();
      dispatch(setDialogs(response.data));
    })();
  }, [dispatch]);

  React.useEffect(() => {
    socket.on('SERVER:NEW_DIALOG', addNewUserToSidebar);
    return () => socket.removeListener('SERVER:NEW_DIALOG', addNewUserToSidebar);
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {dialogs.length
        ? (
          <div className={styles.main}>
            {dialogs.map((el) => (
              <div
                role="button"
                tabIndex={0}
                onClick={() => selectDialog(el.dialogId)}
                key={el.dialogId}
                className={`${styles.chatList} ${el.dialogId === activeDialog ? styles.active
                  : ''}`}
              >
                {el.user.avatarUrl
                  ? (
                    <div className={styles.photo}>
                      <img className={styles.img} src={el.user.avatarUrl} alt="" />
                      {el.user.isOnline ? <div className={styles.onlineIcon} /> : ''}
                    </div>
                  )
                  : (
                    <div className={styles.photo}>
                      <div className={styles.img}>
                        {getInitials(el.user.firstName, el.user.lastName)}
                        {el.user.isOnline ? <div className={styles.onlineIcon} /> : ''}
                      </div>
                    </div>
                  )}
                <div className={styles.name}>
                  {`${el.user.firstName} ${el.user.lastName}`}
                  {el.user.isOnline ? <p className={styles.online}>Сейчас в сети</p>
                    : <p className={styles.online}>{`Был(-a) в сети ${lastSeen(el.user.lastSeen)} назад`}</p>}
                </div>
              </div>
            ))}
          </div>
        )
        : (
          <div className={styles.empty}>
            <EmptyBlock description="У вас нет диалогов" />
          </div>
        )}
    </div>
  );
};

export { SideBar };
