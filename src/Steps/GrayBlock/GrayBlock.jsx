import styles from './grayBlock.module.css'

const GrayBlock = ({ children }) => {
  return(
    <div className={styles.main}>
      {children}
    </div>
  )
};

export { GrayBlock }