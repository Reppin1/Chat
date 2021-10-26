import './App.css';
import { GrayBlock } from "./Steps/GrayBlock/GrayBlock";
import { WelcomeStep } from "./Steps/WelcomeStep/WelcomeStep";
import { GitHubStep } from "./Steps/GitHubStep/GitHubStep";
import { EnterNameStep } from "./Steps/EnterNameStep/EnterNameStep";
import { ChosePhotoStep } from "./Steps/ChosePhotoStep/ChosePhotoStep";
import { useState } from "react";
import { RegisterStep } from "./Steps/RegisterStep/RegisterStep";
import { EnterCodeStep } from "./Steps/EnterCodeStep/EnterCodeStep";

const steps = {
  0: WelcomeStep,
  1: GitHubStep,
  2: EnterNameStep,
  3: ChosePhotoStep,
  4: RegisterStep,
  5: EnterCodeStep,
}

function App() {
  const [step, setStep] = useState(0)
  const Step = steps[step]

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
      <div className="App">
        <GrayBlock>
          <Step onClick={ onNextStep } />
        </GrayBlock>
      </div>
  );
}

export default App;
