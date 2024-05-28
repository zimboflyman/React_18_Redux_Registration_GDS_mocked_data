function Panel({ title, message, referenceNum }) {
  return (
    <div className="govuk-panel govuk-panel--confirmation">
      {/* <h2 className="govuk-panel__title">{title}</h2> */}
      <div className="govuk-panel__body">
        <div>
          {message}
          <br />
          <strong>{referenceNum}</strong>
        </div>
      </div>
    </div>
  );
}

export { Panel };
