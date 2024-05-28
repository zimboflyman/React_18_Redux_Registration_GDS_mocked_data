import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "_store";

import { ErrorSummary } from "_components/error_summary";

function Login() {
  const dispatch = useDispatch();
  const authError = useSelector((x) => x.alert.value);
  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ username, password }) {
    return dispatch(authActions.login({ username, password }));
  }

  return (
    <>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full govuk-!-margin-bottom-6">
            <h1 className="govuk-heading-xl">XHIBIT portal sign in</h1>
            <div
              className="govuk-notification-banner"
              role="region"
              aria-labelledby="govuk-notification-banner-title"
              data-module="govuk-notification-banner"
            >
              <div className="govuk-notification-banner__header">
                <p
                  className="govuk-notification-banner__title"
                  id="govuk-notification-banner-title"
                >
                  Important
                </p>
              </div>
              <div className="govuk-notification-banner__content">
                <p className="govuk-body">
                  All queries should initially be raised with your own Helpdesk.
                  If they are unable to resolve, or for any generic Portal
                  queries, please contact the XHIBIT Portal Helpdesk on 0203 989
                  6060 or alternatively please email
                  DTS-ITServiceDesk@justice.gov.uk
                </p>
                <p className="govuk-body">
                  Please note that the SMS and Fax subscription functionalities
                  are unavailable. Please ensure that you have opted to get your
                  alerts and notifications via email.
                </p>
                <p className="govuk-body">
                  All user administration tasks should be directed to your local
                  User Administration representative
                </p>
              </div>
            </div>

            <p className="govuk-body">
              <span className="govuk-phase-banner__text">
                To log into this site you must be registered with the XHIBIT
                portal. If you have not yet registered.{" "}
                <Link to="../register" className="govuk-link">
                  Register now.
                </Link>
              </span>
            </p>
            <p className="govuk-body">
              Enter your user ID and password and click 'Sign in'.
            </p>
          </div>

          <div className="govuk-grid-column-one-half">
            {(Object.keys(errors).length !== 0 || authError) && (
              <>
                <ErrorSummary
                  // ref={errorSummaryRef}
                  errorList={Object.entries(errors).map((error) => ({
                    href: `#${error[0]}`,
                    children: error[1],
                  }))}
                  authError={authError}
                />
              </>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="govuk-fieldset" role="group">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h1 className="govuk-fieldset__heading">Sign in</h1>
                </legend>
                <div
                  className={`govuk-form-group ${
                    errors.username ? "govuk-form-group--error" : ""
                  }`}
                >
                  <label className="govuk-label" htmlFor="U-id">
                    User ID
                  </label>
                  <p id="username-error" className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.username?.message}
                  </p>
                  <input
                    name="username"
                    type="text"
                    {...register("username")}
                    className={`govuk-input ${
                      errors.username ? "is-invalid" : ""
                    }`}
                  ></input>
                </div>
                <div
                  className={`govuk-form-group ${
                    errors.password ? "govuk-form-group--error" : ""
                  }`}
                >
                  <label className="govuk-label" htmlFor="password">
                    Password
                  </label>
                  <p id="username-error" className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.password?.message}
                  </p>
                  <input
                    id="password"
                    name="password"
                    autoComplete="password"
                    type="password"
                    {...register("password")}
                    className={`govuk-input ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  ></input>
                </div>
              </fieldset>
              <button
                disabled={isSubmitting}
                type="submit"
                className="govuk-button"
                data-module="govuk-button"
              >
                {isSubmitting && (
                  // add spinner style here
                  <span className="spinner-border spinner-border-sm me-1"></span>
                )}
                Sign in
              </button>
            </form>
          </div>
          <div className="govuk-grid-column-full">
            <ul className="govuk-footer__inline-list">
              <li className="govuk-footer__inline-list-item">
                <Link to="../register" className="govuk-link">
                  register
                </Link>
              </li>
              <li className="govuk-footer__inline-list-item">
                <Link to="/" className="govuk-link">
                  forgotten password
                </Link>
              </li>
              <li className="govuk-footer__inline-list-item">
                <Link to="/" className="govuk-link">
                  about this page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { Login };
