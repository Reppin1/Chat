import { useHistory } from 'react-router-dom';
import React from 'react';
import styles from './profile.module.css';
import { Header } from '../Header/Header';
import { profileApi } from '../../api/profileUser';
import { getInitials } from '../../utils/getInitials';

const Profile = () => {
  const history = useHistory();
  const [info, setInfo] = React.useState('');
  const id = history.location.pathname.split('/');
  const lastNumber = id[id.length - 1];

  React.useEffect(() => {
    (async () => {
      const result = await profileApi.getProfile(lastNumber);
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
      </div>
    </div>
  );
};

export { Profile };
