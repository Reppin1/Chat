import { Button } from "../Button/Button";
import React from "react";
import styles from "./enterCodeStep.module.css"
import { useHistory } from "react-router-dom";

const EnterCodeStep = () => {
  let history = useHistory()
  const [codes, setCodes] = React.useState(['', '', '', '']);
  // const nextDisabled = codes.some((v) => !v);

  const user = '123'

  const handleChangeInput = (event) => {
    const index = event.target.getAttribute('id');
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling).focus();
    } else {
      onSubmit([...codes, value].join(''));
    }
  };

  const onSubmit = () => {
    if (user) {
      history.push('/main')
    } else {
      alert('Ошибка при активации')
      setCodes(['', '', '', '']);
    }
  }

  return (
    <div className={styles.main}>
      <h1>Введите код</h1>
      <div className={styles.input}>
        {codes.map((el, index) => <input
          className={styles.codes} key={index}
          type="tel"
          placeholder="X"
          maxLength={1}
          id={index}
          onChange={handleChangeInput}
          value={el} />)}
      </div>
      <Button onClick={onSubmit}>
        Следующий шаг
      </Button>
    </div>
  );
};

export { EnterCodeStep };