import React from 'react';
import { useSelector } from 'react-redux';
import styles from './messageItem.module.css';
import { getInitials } from '../../../utils/getInitials';
import { getDate } from '../../../Helpers/localizationDate';

const MessageItem = ({message, user}) => {
  const [me, setMe] = React.useState(true);
  const myInfo = useSelector((state) => state.auth);

  const goToFriendProfile = () => {
    window.open(`http://localhost:3000/profile/${user.id}`);
  };

  const goToMyProfile = () => {
    window.open(`http://localhost:3000/profile/${myInfo.id}`);
  };

  React.useEffect(() => {
    if (message.UserId === myInfo.id) {
      setMe(false);
      return null;
    }
    return null;
  }, []);

  return (
    <div className={styles.main}>
      {me
        ? (
          <div className={styles.messageItem}>
            {user.avatarUrl
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              ? <img onClick={goToFriendProfile} className={styles.img} src={user.avatarUrl} alt="Фото пользователя" />
              : (
                <div role="button" tabIndex={0} onClick={goToFriendProfile} className={styles.img}>
                  {getInitials(user.firstName, user.lastName)}
                </div>
              )}
            <div className={styles.item}>
              <div className={styles.span}>
                <span
                  className={styles.name}
                >
                  {`${user.firstName} ${user.lastName}`}
                </span>
                <span className={styles.date}>{getDate(message.createdAt)}</span>
              </div>
              <div className={styles.message}>
                <div className={styles.p}>
                  <span className={styles.messageText}>{message.text}</span>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div className={styles.reverseMessage}>
            {myInfo.avatarUrl
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              ? <img onClick={goToMyProfile} className={styles.img} src={myInfo.avatarUrl} alt="Фото пользователя" />
              : (
                <div role="button" tabIndex={0} onClick={goToMyProfile} className={styles.img}>
                  {getInitials(myInfo.firstName, myInfo.lastName)}
                </div>
              )}
            <div className={styles.reverseItem}>
              <div className={styles.reverseSpan}>
                <span className={styles.reverseDate}>{getDate(message.createdAt)}</span>
                <span className={styles.reverseName}>{`${myInfo.firstName} ${myInfo.lastName}`}</span>
              </div>
              <div className={styles.message}>
                <div className={styles.pReverse}>
                  <span className={styles.reverseMessageText}>{message.text}</span>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export { MessageItem };
