import React from 'react';
import styles from './findUserInput.module.css';
import { getInitials } from '../../../utils/getInitials';
import { profileApi } from '../../../api/profileUser';

const FindUserInput = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [popup, setPopup] = React.useState(false);
  const [user, setUser] = React.useState('');

  const setCurrentProfile = async (event) => {
    setInputValue(event.target.value);
    try {
      if (event.target.value !== '') {
        const result = await profileApi.getProfile(event.target.value);
        setUser(result.data);
      }
    } catch (e) {
      setUser('');
    }
  };

  const openProfile = () => {
    if (user) {
      window.open(`http://localhost:3000/profile/${user.id}`);
    }
  };

  const hiddenPopup = () => {
    setTimeout(() => {
      setPopup(false);
    }, 100);
  };

  const showPopup = () => {
    setPopup(true);
  };

  return (
    <div className={styles.inputValue}>
      <input
        onBlur={hiddenPopup}
        className={styles.input}
        placeholder="Введите ID друга"
        type="text"
        value={inputValue}
        onChange={setCurrentProfile}
        onClick={showPopup}
      />
      {popup ? (
        <div role="button" tabIndex={0} onClick={openProfile} className={styles.findUser}>
          {user ? (
            <div>
              {user.avatarUrl ? (
                <div className={styles.main}>
                  <img className={styles.img} src={user.avatarUrl} alt="" />
                  <span className={styles.name}>{`${user.firstName} ${user.lastName}`}</span>
                </div>
              )
                : (
                  <div className={styles.main}>
                    <span className={styles.initial}>
                      {getInitials(user.firstName, user.lastName)}
                    </span>
                    <span className={styles.name}>{`${user.firstName} ${user.lastName}`}</span>
                  </div>
                )}
            </div>
          ) : <span className={styles.notFound}>Ничего не найдено</span>}
        </div>
      ) : null}
    </div>
  );
};

export { FindUserInput };
