import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { userActions, alertActions } from "_store";

import { TextInput } from "_components/inputs";

function RegisterStep2({ updateStepState, setUserID }) {
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    // Acceptance criteria needs to be confirmed for which fields need validation
    birthPlace: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .matches(/^[^\d]+$/, "Name cannot contain numbers")
      .required(),
    school: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .required(),
    reference: Yup.string().required("Reference is required"),

    address1: Yup.string().required("Address Line 1 is required"),
    town: Yup.string().required("Reference is required"),
    postcode: Yup.string().required("postcode is required"),

    // Only these bottom 4 are currently used for mock up registration and creating a user in local state
    lastName: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .matches(/^[^\d]+$/, "Name cannot contain numbers")
      .required(),
    firstName: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .matches(/^[^\d]+$/, "Name cannot contain numbers")
      .required(),
    username: Yup.string().required("UserID is required"),
    password: Yup.string()
      .required()
      .min(6, "Password must be at least 6 characters"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  async function onSubmit(data) {
    dispatch(alertActions.clear());

    const username = data?.username;
    setUserID(username);

    try {
      await dispatch(userActions.register(data)).unwrap();
      //move to the next step in the registration pages
      updateStepState();

      dispatch(
        alertActions.success({
          message: "Registration successful",
          showAfterRedirect: true,
        })
      );
    } catch (error) {
      dispatch(alertActions.error(error));
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <p className="govuk-body">
            Please complete the information below. Mandatory fields are marked *
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
              label={"Surname"}
              htmlFor={"lastName"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"First Name"}
              htmlFor={"firstName"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Place of Birth"}
              htmlFor={"birthPlace"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"First School"}
              htmlFor={"school"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Person Reference"}
              htmlFor={"reference"}
              register={register}
              errors={errors}
            />

            <TextInput
              label={"UserID"}
              htmlFor={"username"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Password"}
              htmlFor={"password"}
              register={register}
              errors={errors}
            />
          </fieldset>

          {/* Address fieldset */}
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
              <h2 className=" govuk-heading-s">Work Address</h2>
            </legend>
            {/* Postcode lookup - tie this to a 3rd party postcode lookup */}
            <TextInput
              label={"Postcode"}
              htmlFor={"addressLookup"}
              register={register}
              errors={errors}
              hint={"Type a part of address or postcode to begin"}
            />
            <button
              type="button"
              className="govuk-button govuk-!-margin-right-4"
              data-module="govuk-button"
            >
              Find Address
            </button>
            <TextInput
              label={"Address Line 1"}
              htmlFor={"address1"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Address Line 2"}
              htmlFor={"address2"}
              register={register}
              errors={errors}
            />
            <TextInput
              label={"Town or City"}
              htmlFor={"town"}
              register={register}
              errors={errors}
              widthCss={"govuk-!-width-two-thirds"}
            />
            <TextInput
              label={"County (optional)"}
              htmlFor={"county"}
              register={register}
              errors={errors}
              widthCss={"govuk-!-width-two-thirds"}
            />
            <TextInput
              label={"Postcode"}
              htmlFor={"postcode"}
              register={register}
              errors={errors}
              widthCss={"govuk-!-width-one-third"}
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

export { RegisterStep2 };
