import styles from './registerStep.module.css'
import { MainContext } from "../../App";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from "react";
import { useDispatch } from "react-redux";
import { setEmail, setPassword } from "../../redux/AuthReducer/authReducer";

const schema = yup.object({
  email: yup.string().email("Неверная почта").required('Это обязательное поле'),
  password: yup.string().min(6, 'Нужно больше 6 символов').required('Это обязательное поле'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Это обязательное поле')
}).required();

const RegisterStep = () => {
  const dispatch = useDispatch()
  const {onNextStep} = React.useContext(MainContext)
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });
  const onSubmit = (data) => {
    dispatch(setEmail(data.email))
    dispatch(setPassword(data.password))
    onNextStep();
  };
  return (
    <div className={styles.main}>
      <h1>Регистрация</h1>
      <div>
        <input {...register("email")} className={styles.input} type="text" placeholder="example@gmail.com" />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <input {...register("password")} className={styles.input} type="password" placeholder="Пароль" />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input {...register("confirmPassword")} className={styles.input} type="password"
               placeholder="Повторите пароль" />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <Button onClick={handleSubmit(onSubmit)}>
        Следующий шаг
      </Button>
    </div>
  );
};

export { RegisterStep };