import { Button } from "../Button/Button";
import styles from "./enterNameStep.module.css"

const EnterNameStep = ({ onClick }) => {
  return (
    <div className={ styles.main }>
      <h1>Введите имя и фамилию</h1>
        <input className={styles.input} placeholder="Имя Фамилия" type="text" />
      <div>
        <Button onClick={onClick}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export { EnterNameStep };