function TextInput({ label, htmlFor, register, errors, widthCss, hint }) {
  return (
    <div
      className={`govuk-form-group ${widthCss} ${
        errors[htmlFor] ? "govuk-form-group--error" : ""
      }`}
    >
      <label className="govuk-label" htmlFor={htmlFor}>
        {label}
      </label>
      <p id={`${htmlFor}-error`} className="govuk-error-message">
        <span className="govuk-visually-hidden">Error:</span>
        {errors[htmlFor]?.message}
      </p>
      {hint && (
        <div id="event-name-hint" className="govuk-hint">
          {hint}
        </div>
      )}

      <input
        // name={htmlFor}
        type="text"
        {...register(`${htmlFor}`)}
        className={`govuk-input ${errors[htmlFor] ? "is-invalid" : ""}`}
      />
    </div>
  );
}

export { TextInput };
