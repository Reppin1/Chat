import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import styles from './chosePhotoStep.module.css';
import { MainContext } from '../Context/mainContext';
import { setAvatar } from '../../redux/AuthReducer/authReducer';
import { getInitials } from '../../utils/getInitials';

const ChosePhotoStep = () => {
  const { onNextStep } = React.useContext(MainContext);
  const avatar = useSelector((state) => state.auth.avatarUrl);
  const firstName = useSelector((state) => state.auth.firstName);
  const lastName = useSelector((state) => state.auth.lastName);
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = React.useState(avatar);
  const inputFileRef = React.useRef(null);

  const handleChangeImage = (event) => {
    const file = (event.target).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  const nextStep = () => {
    dispatch(setAvatar(avatarUrl));
    onNextStep();
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Выберите фото</h1>
      <div>
        <div>
          {avatarUrl ? <img className={styles.img} src={avatarUrl} alt="" />
            : <div className={styles.img}>{getInitials(firstName, lastName)}</div>}
        </div>
        <label htmlFor="image" className={styles.p}>
          Загрузить фото
          <input id="image" ref={inputFileRef} type="file" hidden />
        </label>
      </div>
      <div>
        <Button onClick={nextStep}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export { ChosePhotoStep };
