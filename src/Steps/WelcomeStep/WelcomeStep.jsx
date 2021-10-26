import style from './welcomeStep.module.css'
import { Button } from "../Button/Button";

const WelcomeStep = ({ onClick }) => {
  return (
    <div className={style.main}>
      <h1 className={style.mainText}>Добро пожаловать в чат!</h1>
      <h2 className={style.text}>Но для начала общения нужно зарегистрироваться!</h2>
      <div>
        <Button onClick={onClick}>
          Следущий шаг
        </Button>
      </div>
    </div>
  );
};

export { WelcomeStep };