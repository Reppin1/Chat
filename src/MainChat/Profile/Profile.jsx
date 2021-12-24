import { useHistory, useParams } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './profile.module.css';
import { Header } from '../Header/Header';
import { profileApi } from '../../api/profileUser';
import { getInitials } from '../../utils/getInitials';
import { UserApi } from '../../api/createUser';
import { setAuthInfo } from '../../redux/AuthReducer/authReducer';
import { dialogApi } from '../../api/userDialogs';

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [info, setInfo] = React.useState('');
  const id = history.location.pathname.split('/');
  const lastNumber = id[id.length - 1];
  const myId = useSelector((state) => state.auth.id);
  const userId = useParams().id;

  const createDialog = async () => {
    try {
      await dialogApi.createDialog({userId});
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    (async () => {
      const result = await profileApi.getProfile(lastNumber);
      const user = await UserApi.authMe();
      dispatch(setAuthInfo(user));
      setInfo(result.data);
    })();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.item}>
        {info.avatarUrl ? <img className={styles.img} src={info.avatarUrl} alt="Фото пользователя" />
          : <div className={styles.img}>{getInitials(info.firstName, info.lastName)}</div>}
        <div className={styles.nameInfo}>
          <div className={styles.span}>
            <span className={styles.name}>{`${info.firstName} ${info.lastName}`}</span>
          </div>
          <div className={styles.message}>
            <p className={styles.p}>Тест инфа</p>
          </div>
        </div>
        <div className={styles.id}>
          {myId === info.id ? `Ваш ID ${myId}` : ''}
          {myId !== info.id ? <button onClick={createDialog} className={styles.button} type="button">Написать сообщение</button> : ''}
        </div>
      </div>
    </div>
  );
};

export { Profile };
