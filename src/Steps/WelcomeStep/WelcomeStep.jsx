import React from 'react';
import style from './welcomeStep.module.css';
import { Button } from '../Button/Button';
import { MainContext } from '../Context/mainContext';

const WelcomeStep = () => {
  const { onNextStep } = React.useContext(MainContext);
  const nextStep = () => {
    onNextStep();
  };

  return (
    <div className={style.main}>
      <h1 className={style.mainText}>Добро пожаловать в чат!</h1>
      <h2 className={style.text}>Но для начала общения нужно зарегистрироваться!</h2>
      <div>
        <Button onClick={nextStep}>
          Следущий шаг
        </Button>
      </div>
    </div>
  );
};

export { WelcomeStep };
