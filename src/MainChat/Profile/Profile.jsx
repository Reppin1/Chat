import { useHistory, useParams } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Header } from '../Header/Header';
import { profileApi } from '../../api/profileUser';
import { getInitials } from '../../utils/getInitials';
import { UserApi } from '../../api/createUser';
import { setAuthInfo, setProfileStatus } from '../../redux/AuthReducer/authReducer';
import { dialogApi } from '../../api/userDialogs';
import { createAndRedirectToDialog } from '../../redux/DialogReducer/dialogReducer';

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [info, setInfo] = React.useState('');
  const id = history.location.pathname.split('/');
  const lastNumber = id[id.length - 1];
  const myId = useSelector((state) => state.auth.id);
  const aboutMe = useSelector((state) => state.auth.aboutMe);
  const userId = useParams().id;
  const [popup, setPopup] = React.useState(false);
  const [value, setValue] = React.useState(aboutMe);

  const createDialog = async () => {
    try {
      const dialog = await dialogApi.createDialog({userId});
      if (dialog.status === 201) {
        dispatch(createAndRedirectToDialog(dialog.data.id));
        history.push('/main');
        return;
      }
      dispatch(createAndRedirectToDialog(dialog.data.DialogId));
      history.push('/main');
    } catch (e) {
      console.log(e);
    }
  };

  const updateStatus = async () => {
    try {
      if (value.trim().length >= 1) {
        await dispatch(setProfileStatus(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const setAboutValue = (event) => {
    setValue(event.target.value);
  };

  const showPopup = () => {
    setPopup(true);
  };

  const togglePopup = async () => {
    setTimeout(() => {
      setPopup(false);
    }, 100);
  };

  React.useEffect(() => {
    (async () => {
      try {
        const user = await UserApi.authMe();
        if (user) {
          const result = await profileApi.getProfile(lastNumber);
          dispatch(setAuthInfo(user));
          setInfo(result.data);
        }
      } catch (e) {
        history.push('/');
      }
    })();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.block}>
        <div className={styles.item}>
          {info.avatarUrl ? <img className={styles.img} src={info.avatarUrl} alt="Фото пользователя" />
            : <div className={styles.img}>{getInitials(info.firstName, info.lastName)}</div>}
          <div className={styles.nameInfo}>
            <div className={styles.span}>
              <span className={styles.name}>{`${info.firstName} ${info.lastName}`}</span>
            </div>
            <div>
              {myId === info.id ? (
                <div className={styles.status}>
                  <p className={styles.p}>{aboutMe}</p>
                </div>
              )
                : <p className={styles.p}>{info.aboutMe}</p>}
              {/* eslint-disable-next-line no-nested-ternary */}
              {myId === info.id
                ? (
                  !popup ? (
                    <button type="button" className={styles.setStatus} onClick={showPopup}>
                      установить статус
                    </button>
                  ) : null
                )
                : null}
              {popup ? (
                <div onBlur={togglePopup} className={styles.popupMain}>
                  {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                  <input value={value} onChange={setAboutValue} autoFocus className={styles.popupInput} type="text" />
                  <button onClick={updateStatus} className={styles.popupButton} type="submit">Сохранить</button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.id}>
          {myId === info.id ? `Ваш ID: ${myId}` : ''}
          {myId !== info.id
            ? <button onClick={createDialog} className={styles.button} type="button">Написать сообщение</button> : ''}
        </div>
      </div>
    </div>
  );
};

export { Profile };
