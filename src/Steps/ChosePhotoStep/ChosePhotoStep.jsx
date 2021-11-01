import { Button } from "../Button/Button";
import styles from "./chosePhotoStep.module.css";
import React from "react";
import { MainContext } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../redux/AuthReducer/authReducer";

const ChosePhotoStep = () => {
  const {onNextStep} = React.useContext(MainContext)
  const avatar = useSelector((state) => state.auth.avatarUrl)
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
    dispatch(setAvatar(avatarUrl))
    onNextStep()
  }

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.main}>
      <h1>Выберите фото</h1>
      <div>
        <div>
          {avatarUrl ? <img className={styles.img} src={avatarUrl} alt="" /> : <div className={styles.img}>AK</div>}
        </div>
        <label htmlFor="image" className={styles.p}>
          Загрузить фото
        </label>
        <input id="image" ref={inputFileRef} type="file" hidden />
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