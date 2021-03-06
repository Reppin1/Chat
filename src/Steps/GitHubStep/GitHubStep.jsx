import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../Button/Button';
import styles from './gitHubStep.module.css';
import logo from '../../assets/gitHubLogo.png';
import { MainContext } from '../Context/mainContext';
import { authGit } from '../../redux/AuthReducer/authReducer';

const GitHubStep = () => {
  const { onNextStep } = React.useContext(MainContext);
  const dispatch = useDispatch();

  const nextStep = async () => {
    window.open(
      'http://localhost:4000/auth/github',
      'Auth',
      'width=500,height=500,status=yes,toolbar=no,menubar=no,location=no',
    );
  };

  const onMessage = React.useCallback(({ data }) => {
    const user = data;
    if (typeof user === 'string' && user.includes('avatarUrl')) {
      const userInfo = JSON.parse(user).userData;
      dispatch(authGit(userInfo));
      onNextStep();
    }
  }, [dispatch, onNextStep]);

  React.useEffect(() => {
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [onMessage]);

  return (
    <div className={styles.main}>
      <h1 className={styles.h1}>Import data from GitHub?</h1>
      <div>
        <div>
          <img width={70} height={70} src={logo} alt="" />
        </div>
        <Button onClick={nextStep}>
          Import data from GitHub
        </Button>
        <div role="button" tabIndex={0} onClick={onNextStep} className={styles.noImport}>Do not import data</div>
      </div>
    </div>
  );
};

export { GitHubStep };
