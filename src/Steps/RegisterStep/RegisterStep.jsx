import styles from './registerStep.module.css'
import { Button } from "../Button/Button";

const RegisterStep = ({ onClick }) => {
  return (
    <div className={ styles.main }>
      <h1>Регистрация</h1>
      <div>
        <input className={styles.input} type="text" placeholder="example@gmail.com" />
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Пароль" />
      </div>
      <div>
        <input className={styles.input} type="password" placeholder="Повторите пароль" />
      </div>
      <Button onClick={ onClick }>
        Следующий шаг
      </Button>
    </div>
  );
};

export { RegisterStep };