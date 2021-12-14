import style from './button.module.css';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} type="button" className={style.button}>{children}</button>
);

export { Button };
