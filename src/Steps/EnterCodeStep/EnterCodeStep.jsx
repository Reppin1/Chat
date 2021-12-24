import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';
import styles from './enterCodeStep.module.css';
import { instance } from '../../api/createUser';

const EnterCodeStep = () => {
  const history = useHistory();
  const [codes, setCodes] = React.useState(['', '', '', '']);

  const onSubmit = async (code) => {
    try {
      await instance.get(`/auth/code/activate?code=${code}`);
      history.push('/main');
    } catch (e) {
      alert('Ошибка при активации');
      setCodes(['', '', '', '']);
    }
  };

  const handleChangeInput = async (event) => {
    const index = event.target.getAttribute('id');
    const { value } = event.target;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    if (event.target.nextSibling) {
      (event.target.nextSibling).focus();
    } else {
      await onSubmit([...codes, value].join(''));
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Введите код</h1>
      <div className={styles.input}>
        {codes.map((el, index) => (
          <input
            className={styles.codes}
            key={index}
            type="tel"
            placeholder="X"
            maxLength={1}
            id={index}
            onChange={handleChangeInput}
            value={el}
          />
        ))}
      </div>
      <Button onClick={onSubmit}>
        Следующий шаг
      </Button>
    </div>
  );
};

export { EnterCodeStep };
