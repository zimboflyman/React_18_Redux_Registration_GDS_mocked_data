function ErrorSummary({ errorList, authError }) {
  // errorList: errors from yup validation
  // authError: authentication errors from redux

  if (!authError && !errorList) return null;

  return (
    <div className="govuk-error-summary" data-module="govuk-error-summary">
      {console.log(errorList)}
      <div>
        <h2 className="govuk-error-summary__title">There is a problem</h2>
        <div className="govuk-error-summary__body">
          {authError ? (
            <ul className="govuk-list govuk-error-summary__list">
              <li>{authError.message}</li>
            </ul>
          ) : (
            <ul className="govuk-list govuk-error-summary__list">
              {errorList
                ? errorList.map((error, index) => {
                    const { children, href } = error;
                    return (
                      <li key={index}>
                        <a href={href}>{children?.message}</a>
                      </li>
                    );
                  })
                : null}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export { ErrorSummary };
