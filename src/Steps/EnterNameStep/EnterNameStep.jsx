import React from 'react';
import { Button } from '../Button/Button';
import styles from './enterNameStep.module.css';
import { MainContext } from '../../App';
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName } from "../../redux/AuthReducer/authReducer";

const EnterNameStep = () => {
  const {onNextStep} = React.useContext(MainContext);
  const dispatch = useDispatch();
  const nextStep = () => {
    dispatch(setFirstName(fullName.split(' ')[0]))
    dispatch(setLastName(fullName.split(' ')[1]))
    onNextStep();
  };
  const name = useSelector((state) => state.auth.fullName)
  const [fullName, setFullName] = React.useState(`${name}`)
  const changeFullName = (event) => {
    setFullName(event.target.value)
  }

  return (
    <div className={styles.main}>
      <h1>Введите имя и фамилию</h1>
      <input value={fullName} onChange={changeFullName} className={styles.input} placeholder="Имя Фамилия"
             type="text" />
      <div>
        <Button onClick={nextStep}>
          Следующий шаг
        </Button>
      </div>
    </div>
  );
};

export { EnterNameStep };
