import './App.css';
import React from 'react';
import { GrayBlock } from './Steps/GrayBlock/GrayBlock';
import { WelcomeStep } from './Steps/WelcomeStep/WelcomeStep';
import { GitHubStep } from './Steps/GitHubStep/GitHubStep';
import { EnterNameStep } from './Steps/EnterNameStep/EnterNameStep';
import { ChosePhotoStep } from './Steps/ChosePhotoStep/ChosePhotoStep';
import { RegisterStep } from './Steps/RegisterStep/RegisterStep';
import { EnterCodeStep } from './Steps/EnterCodeStep/EnterCodeStep';
import { UserApi } from "./api/createUser";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthInfo } from "./redux/AuthReducer/authReducer";

const steps = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: ChosePhotoStep,
  4: RegisterStep,
  5: EnterCodeStep,
};

export const MainContext = React.createContext(null);

function App() {
  const [step, setStep] = React.useState(0);
  const [redirect, setRedirect] = React.useState(false);
  const dispatch = useDispatch()
  const Step = steps[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  React.useEffect(async () => {
    const user = await UserApi.authMe()
    if(user) {
      if(user.isActive) {
        dispatch(setAuthInfo(user))
        setRedirect(true)
        return
      } else {
        return setStep(5)
      }
    }
    return setStep(0)
  }, [])

  if(redirect) {
    return <Redirect to="/main" />
  }

  return (
    <div className="App">
      <MainContext.Provider value={{ onNextStep }}>
        <GrayBlock>
          <Step onClick={onNextStep} />
        </GrayBlock>
      </MainContext.Provider>
    </div>
  );
}

export default App;
