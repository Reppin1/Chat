import styles from "./login.module.css";
import { Button } from "../Button/Button";
import React from "react";
import { MainContext } from "../../App";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { authLogin } from "../../redux/AuthReducer/authReducer";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const {onNextStep} = React.useContext(MainContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.auth.email)
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const skipLogin = () => {
    onNextStep()
  }

  React.useEffect(() => {
    if(user) {
      history.push('/main')
    }
  }, [user])

  const login = async (data, event) => {
    event.preventDefault()
    await dispatch(authLogin(data))
  }

  return (
    <div className={styles.main}>
      <h2>У вас уже есть аккаунт?</h2>
      <input {...register("email")} className={styles.input} type="text" placeholder="example@gmail.com" />
      <input {...register("password")} className={styles.input} type="password" placeholder="Пароль" />
      <div>
        <Button onClick={handleSubmit(login)}>
          Войти
        </Button>
        <div className={styles.register} onClick={skipLogin}>Зарегестрироваться</div>
      </div>
    </div>
  );
};

export { Login };