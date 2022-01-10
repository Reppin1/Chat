import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './header.module.css';
import logo from '../../assets/chat.png';
import { UserApi } from '../../api/createUser';
import { getInitials } from '../../utils/getInitials';
import { FindUserInput } from './FindUserInput/FindUserInput';
import { socket } from '../../Socket/socket';

const Header = () => {
  const path = useLocation().pathname;
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const avatar = useSelector((state) => state.auth.avatarUrl);
  const id = useSelector((state) => state.auth.id);

  const logout = async () => {
    await UserApi.logout();
    document.location.reload();
  };

  const logSocket = (info) => {
    console.log(info);
  };

  React.useEffect(() => {
    socket.on('connect', logSocket);
    return () => socket.removeListener('connect', logSocket);
  }, []);

  return (
    <div className={styles.main}>
      {path.includes('main') ? (
        <div>
          {avatar ? <Link to={`/profile/${id}`}><img className={styles.img} src={avatar} alt="" /></Link>
            : (
              <Link className={styles.link} to={`/profile/${id}`}>
                <div className={styles.img}>{getInitials(firstName, lastName)}</div>
              </Link>
            )}
        </div>
      ) : <Link to="/main"><img className={styles.chat} src={logo} alt="" /></Link>}
      <div className={styles.name}>
        {path.includes('main') ? firstName : 'Обратно в чат'}
      </div>
      <FindUserInput />
      <button type="button" onClick={logout} className={styles.exit}>
        Выход
      </button>
    </div>
  );
};

export { Header };
