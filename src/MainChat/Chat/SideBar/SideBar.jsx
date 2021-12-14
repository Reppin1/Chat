import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './sideBar.module.css';
import { setCurrentDialogId, setDialogs } from '../../../redux/DialogReducer/dialogReducer';
import { dialogApi } from '../../../api/userDialogs';
import { getInitials } from '../../../utils/getInitials';

const SideBar = () => {
  const dispatch = useDispatch();
  const dialogs = useSelector((state) => state.dialogs.dialogs);

  const [active, setActive] = React.useState(null);

  const selectDialog = (id) => {
    setActive(id);
    dispatch(setCurrentDialogId(id));
  };

  React.useEffect(() => {
    (async () => {
      const response = await dialogApi.getDialogs();
      dispatch(setDialogs(response.data));
    })();
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
                className={`${styles.chatList} ${el.dialogId === active ? styles.active
                  : ''}`}
              >
                {el.users[0].avatarUrl ? <img className={styles.img} src={el.users[0].avatarUrl} alt="" />
                  : (
                    <div className={styles.img}>
                      {getInitials(el.users[0].firstName, el.users[0].lastName)}
                    </div>
                  )}
                <div className={styles.name}>
                  {`${el.users[0].firstName} ${el.users[0].lastName}`}
                </div>
              </div>
            ))}
          </div>
        )
        : (
          <p>
            У вас нет диалогов
          </p>
        )}
    </div>
  );
};

export { SideBar };
