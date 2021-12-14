import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './header.module.css';
import logo from '../../assets/chat.png';
import { UserApi } from '../../api/createUser';
import { getInitials } from '../../utils/getInitials';
import { setProfile } from '../../redux/AuthReducer/authReducer';

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const avatar = useSelector((state) => state.auth.avatarUrl);
  const id = useSelector((state) => state.auth.id);
  const [inputValue, setInputValue] = React.useState('');

  const logout = async () => {
    await UserApi.logout();
    document.location.reload();
  };

  const changeValue = (event) => {
    setInputValue(event.target.value);
  };

  const setCurrentProfile = async () => {
    dispatch(setProfile(inputValue));
  };

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
        <input onBlur={setCurrentProfile} className={styles.input} placeholder="Введите ID друга" type="text" value={inputValue} onChange={changeValue} />
      </div>
      <button type="button" onClick={logout} className={styles.exit}>
        Выход
      </button>
    </div>
  );
};

export { Header };
