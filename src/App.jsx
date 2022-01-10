import './App.css';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GrayBlock } from './Steps/GrayBlock/GrayBlock';
import { WelcomeStep } from './Steps/WelcomeStep/WelcomeStep';
import { GitHubStep } from './Steps/GitHubStep/GitHubStep';
import { EnterNameStep } from './Steps/EnterNameStep/EnterNameStep';
import { ChosePhotoStep } from './Steps/ChosePhotoStep/ChosePhotoStep';
import { MainContext } from './Steps/Context/mainContext';
import { RegisterStep } from './Steps/RegisterStep/RegisterStep';
import { EnterCodeStep } from './Steps/EnterCodeStep/EnterCodeStep';
import { UserApi } from './api/createUser';
import { setAuthInfo } from './redux/AuthReducer/authReducer';
import { Login } from './Steps/Login/Login';

const steps = {
  0: WelcomeStep,
  1: Login,
  2: GitHubStep,
  3: EnterNameStep,
  4: ChosePhotoStep,
  5: RegisterStep,
  6: EnterCodeStep,
};

function App() {
  const [step, setStep] = React.useState(0);
  const [redirect, setRedirect] = React.useState(false);
  const dispatch = useDispatch();
  const Step = steps[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  React.useEffect(() => {
    (async () => {
      const user = await UserApi.authMe();
      if (user) {
        if (user.isActive) {
          dispatch(setAuthInfo(user));
          setRedirect(true);
          return null;
        }
        return setStep(6);
      }
      return setStep(0);
    })();
  }, [dispatch]);

  if (redirect) {
    return <Redirect to="/main" />;
  }

  return (
    <div className="App">
      <MainContext.Provider value={{onNextStep}}>
        <GrayBlock>
          <Step onClick={onNextStep} />
        </GrayBlock>
      </MainContext.Provider>
    </div>
  );
}

export default App;
