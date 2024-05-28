import { useEffect } from "react";

import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { alertActions } from "_store";

import { TextInput } from "_components/inputs";
import { Details } from "_components/details";
import { SingleCheckBox } from "_components/checkboxes";

function RegisterStep3({ updateStepState }) {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    // clear alert on location change
    dispatch(alertActions.clear());
  }, [location]);

  // form validation rules
  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("Phone number is required")
      .matches(
        /^\d{11,}$/,
        "Phone number must have at least 11 digits and no letters"
      )
      .matches(/^[0-9]*$/, "Name cannot contain numbers"),
    email: Yup.string()
      .email()
      .required("Email address is required")
      .trim()
      .matches(
        /^[a-z0-9._%+-]+@(?:[a-z0-9.-]+\.)?(co\.uk|gov\.uk)$/,
        "Enter a valid .co.uk or .gov.uk email address"
      )
      .min(5, "Email address must be at least 5 characters long"),
    authPosition: Yup.string().required("Position of Authoriser is required"),
    authName: Yup.string().required("Name of Authoriser is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    updateStepState();
    dispatch(alertActions.clear());
    // redirect to login page and display success alert
    // history.navigate("/account/login");

    // Use this to dispatch the data to the API
    //    try {
    //   await dispatch(userActions.register(data)).unwrap();
    //   //move to the next step in the registration pages
    //   updateStepState();

    //   // redirect to login page and display success alert
    //   // history.navigate("/account/login");
    //   dispatch(
    //     alertActions.success({
    //       message: "Registration successful",
    //       showAfterRedirect: true,
    //     })
    //   );
    // } catch (error) {
    //   dispatch(alertActions.error(error));
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <p className="govuk-body">
            Your contact details are needed for administration purposes. If you
            have a secure email address please enter that in the contact email
            address field
          </p>
        </div>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <fieldset
            className="govuk-fieldset govuk-!-margin-bottom-4"
            role="group"
          >
            {/* note: htmlFor MUST match the corresponding name in the yup validationSchema, for each TextInput */}
            <TextInput
              label={"Phone Number"}
              htmlFor={"phone"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Email Address"}
              htmlFor={"email"}
              register={register}
              errors={errors}
            />
          </fieldset>
        </div>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <p className="govuk-body">
            This application has been authorised by my superior (or I am of
            supervisor grade):
          </p>

          <Details title={"Administrator Access"}>details go here....</Details>

          <div
            className="govuk-checkboxes govuk-checkboxes--small govuk-!-margin-bottom-6"
            data-module="govuk-checkboxes"
          >
            <SingleCheckBox
              label={
                "I have read and accept the data protection and security guidelines above"
              }
            />
          </div>
        </div>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          {/* Address fieldset */}
          <fieldset className="govuk-fieldset">
            <TextInput
              label={"Position of Authoriser"}
              htmlFor={"authPosition"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Name of Authoriser"}
              htmlFor={"authName"}
              register={register}
              errors={errors}
            />
          </fieldset>
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
        </div>
      </div>
    </form>
  );
}

export { RegisterStep3 };
