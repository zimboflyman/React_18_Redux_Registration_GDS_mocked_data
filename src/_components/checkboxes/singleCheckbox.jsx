function SingleCheckBox({ label }) {
  return (
    <div className="govuk-checkboxes__item">
      <input
        className="govuk-checkboxes__input"
        id="organisation"
        name="organisation"
        type="checkbox"
        value="hmrc"
      />
      <label
        className="govuk-label govuk-checkboxes__label"
        htmlFor="organisation"
      >
        {label}
      </label>
    </div>
  );
}

export { SingleCheckBox };
