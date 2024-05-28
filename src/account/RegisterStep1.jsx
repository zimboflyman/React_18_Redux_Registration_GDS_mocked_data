import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { alertActions } from "_store";

import unitsData from "../assets/JSON/units.json";
import userData from "../assets/JSON/areas.json";
import { Details } from "_components/details";
import { SingleCheckBox } from "_components/checkboxes";

function RegisterStep1({ updateStepState }) {
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    level: Yup.string().required("Select your area"),
    role: Yup.string().required("Select your area"),
    areas: Yup.string().required("Select your area"),
    unit: Yup.string().required("Select you unit"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { control, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    //move to the next step in the registration pages
    updateStepState();
    dispatch(alertActions.clear());
  }

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="govuk-fieldset" role="group">
            {/* todo - Build a reusable component for select */}
            <div
              className={`govuk-form-group ${
                errors.role ? "govuk-form-group--error" : ""
              }`}
            >
              <label className="govuk-label" htmlFor="unit">
                Select role
              </label>
              <p id="role-error" className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span>
                {errors.role?.message}
              </p>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`govuk-select ${
                      errors.role ? "is-invalid" : ""
                    }`}
                  >
                    {unitsData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div
              className={`govuk-form-group ${
                errors.level ? "govuk-form-group--error" : ""
              }`}
            >
              <label className="govuk-label" htmlFor="unit">
                Select level
              </label>
              <p id="level-error" className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span>
                {errors.level?.message}
              </p>
              <Controller
                name="level"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`govuk-select ${
                      errors.level ? "is-invalid" : ""
                    }`}
                  >
                    {unitsData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div
              className={`govuk-form-group ${
                errors.areas ? "govuk-form-group--error" : ""
              }`}
            >
              <label className="govuk-label" htmlFor="areas">
                Select area
              </label>
              <p id="area-error" className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span>
                {errors.areas?.message}
              </p>
              <Controller
                name="areas"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`govuk-select ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    // id="areas"
                    // name="areas"
                  >
                    {userData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div
              className={`govuk-form-group ${
                errors.unit ? "govuk-form-group--error" : ""
              }`}
            >
              <label className="govuk-label" htmlFor="unit">
                Select unit
              </label>
              <p id="unit-error" className="govuk-error-message">
                <span className="govuk-visually-hidden">Error:</span>
                {errors.unit?.message}
              </p>
              <Controller
                name="unit"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className={`govuk-select ${
                      errors.username ? "is-invalid" : ""
                    }`}
                  >
                    {unitsData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <Details title={"Terms and conditions"}>
              terms and conditions go here....
            </Details>
            <div
              className="govuk-checkboxes govuk-checkboxes--small govuk-!-margin-bottom-6"
              data-module="govuk-checkboxes"
            >
              <SingleCheckBox
                label={
                  "I have read and accept the data protection and security guidlines above"
                }
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="govuk-button govuk-!-margin-right-4"
              data-module="govuk-button"
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm me-1"></span>
              )}
              Save & Continue
            </button>
            <Link
              to="../login"
              className="govuk-button govuk-button--secondary govuk-!-margin-right-4"
            >
              Cancel
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export { RegisterStep1 };
