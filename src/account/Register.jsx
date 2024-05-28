import { useState } from "react";

import { RegisterStep1 } from "./RegisterStep1";
import { RegisterStep2 } from "./RegisterStep2";
import { RegisterStep3 } from "./RegisterStep3";
import { RegisterStep4 } from "./RegisterStep4";

function Register() {
  const [stepState, setStepState] = useState(1);
  const [userID, setUserID] = useState();

  const handleNextStep = () => {
    setStepState((prevComponent) => {
      if (prevComponent === 4) {
        return 1;
      } else {
        return prevComponent + 1;
      }
    });
  };

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-xl">Register for an account</h1>
          {stepState !== 4 && (
            <div className="govuk-grid-row govuk-!-margin-bottom-4">
              <div className="govuk-grid-column-one-third">
                <p
                  className={`govuk-body register-step ${
                    stepState === 1 ? "register-step-active" : ""
                  }`}
                >
                  Step 1
                </p>
              </div>
              <div className="govuk-grid-column-one-third">
                <p
                  className={`govuk-body register-step ${
                    stepState === 2 ? "register-step-active" : ""
                  }`}
                >
                  Step 2
                </p>
              </div>
              <div className="govuk-grid-column-one-third">
                <p
                  className={`govuk-body register-step ${
                    stepState === 3 ? "register-step-active" : ""
                  }`}
                >
                  Step 3
                </p>
              </div>
            </div>
          )}

          {stepState === 1 && (
            <RegisterStep1 updateStepState={handleNextStep} />
          )}
          {stepState === 2 && (
            <RegisterStep2
              updateStepState={handleNextStep}
              setUserID={setUserID}
            />
          )}
          {stepState === 3 && (
            <RegisterStep3 updateStepState={handleNextStep} />
          )}
          {stepState === 4 && (
            <RegisterStep4 updateStepState={handleNextStep} userID={userID} />
          )}
        </div>
      </div>
    </div>
  );
}

export { Register };
