import styles from './grayBlock.module.css';

const GrayBlock = ({ children }) => (
  <div className={styles.main}>
    {children}
  </div>
);

export { GrayBlock };
