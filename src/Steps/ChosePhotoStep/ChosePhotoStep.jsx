import { Button } from "../Button/Button";
import styles from "./chosePhotoStep.module.css";
import React from "react";

const ChosePhotoStep = ({onClick}) => {

  const [avatarUrl, setAvatarUrl] = React.useState(
    'https://i.pinimg.com/736x/ac/3e/25/ac3e25c19a979606312463aa6b1cc2fd.jpg',
  );
  const inputFileRef = React.useRef(null);

  const handleChangeImage = (event) => {
    const file = (event.target).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

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
        <Button onClick={onClick}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export { ChosePhotoStep };