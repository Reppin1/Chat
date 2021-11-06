import styles from './registerStep.module.css'
import { MainContext } from "../../App";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAndSendSMS, setEmail, setPassword } from "../../redux/AuthReducer/authReducer";
import { instance, UserApi } from "../../api/createUser";

const schema = yup.object({
  email: yup.string().email("Неверная почта").required('Это обязательное поле'),
  password: yup.string().min(6, 'Нужно больше 6 символов').required('Это обязательное поле'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Это обязательное поле')
}).required();

const RegisterStep = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth)
  const {onNextStep} = React.useContext(MainContext)
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });
  const onSubmit = async (data) => {
    dispatch(setEmail(data.email))
    dispatch(setPassword(data.password))
    try {
      const userData = {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: data.email,
        password: data.password,
        avatarUrl: userInfo.avatarUrl
      }
      const result = await UserApi.createUser(userData)
      if (result.status === 201) {
        await instance.get(`/auth/code?email=${data.email}`)
        onNextStep();
      }
    } catch (e) {
      alert(`Email: ${data.email} уже используется`)
      console.log(e)
    }
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