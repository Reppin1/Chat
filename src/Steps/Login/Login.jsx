import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.css';
import { Button } from '../Button/Button';
import { MainContext } from '../Context/mainContext';
import { authLogin } from '../../redux/AuthReducer/authReducer';

const Login = () => {
  const {onNextStep} = React.useContext(MainContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.email);
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const skipLogin = () => {
    onNextStep();
  };

  React.useEffect(() => {
    if (user) {
      history.push('/main');
    }
  }, [user, history]);

  const login = async (data, event) => {
    event.preventDefault();
    await dispatch(authLogin(data));
  };

  return (
    <div className={styles.main}>
      <h2>У вас уже есть аккаунт?</h2>
      <input {...register('email')} className={styles.input} type="text" placeholder="example@gmail.com" />
      <input {...register('password')} className={styles.input} type="password" placeholder="Пароль" />
      <div>
        <Button onClick={handleSubmit(login)}>
          Войти
        </Button>
        <div role="button" tabIndex={0} className={styles.register} onClick={skipLogin}>Зарегестрироваться</div>
      </div>
    </div>
  );
};

export { Login };
