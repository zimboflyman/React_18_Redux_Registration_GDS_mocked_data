import { Link } from "react-router-dom";

import { Panel } from "_components/panel";

function RegisterStep4({ updateStepState, userID }) {
  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half govuk-!-margin-bottom-4">
          <Panel
            title={"Registration complete"}
            message={"Your user ID is"}
            referenceNum={userID}
          />
        </div>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Next steps</h2>
          <p className="govuk-body govuk-!-font-weight-bold">
            What you need to do next
          </p>
          <p className="govuk-body">
            Make a note of your User ID, you will need it to sign into the
            XHIBIT Portal once your registration has been approved.
          </p>
          <p className="govuk-body">
            You must call the XHIBIT Portal Help Desk to approve your
            registration. They will provide you with a password.
          </p>
          <p className="govuk-body govuk-!-margin-bottom-1">
            Telephone: 020 3989 6060
          </p>
          <p className="govuk-body">
            Email:{" "}
            <Link className="govuk-link">DTS-ITServiceDesk@justice.gov.uk</Link>
          </p>
          <p className="govuk-body">
            You will then be able to sign in to the XHIBIT Portal. You will be
            asked to change your password the first time you sign in.
          </p>
          <p className="govuk-body">
            If you lose or forget your User ID you will need to contact your
            administrator.
          </p>
        </div>
      </div>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-half">
          <Link to="../login" className="govuk-link govuk-!-margin-right-4">
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
}

export { RegisterStep4 };
