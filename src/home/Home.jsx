import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import userData from "../assets/JSON/areas.json";
import unitsData from "../assets/JSON/units.json";

function Home() {
  const auth = useSelector((x) => x.auth.value);
  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper ">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
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
                  XHIBIT portal contains sensitive data.
                </p>
              </div>
            </div>
          </div>
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-l">Home</h1>
            <p className="govuk-body">
              The quick search allows you to search for information, available
              via the XHIBIT portal, by using your knowledge of a case file of a
              defendant.
            </p>
          </div>
          <div className="flex-container govuk-grid-column-full ">
            <div className="search-column govuk-!-padding-4 search-container-home govuk-grid-column-one-half govuk-!-margin-right-4 govuk-!-margin-bottom-4">
              <form
                // action="/login/signin/creds"
                // method="POST"
                id="defendant-search"
              >
                <input type="hidden" name="tes" value=""></input>{" "}
                <input type="hidden" name="" value=""></input>
                <h2 className="govuk-heading-m">Defendant quick search</h2>
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="first-name">
                    First name
                  </label>
                  <input
                    className="govuk-input"
                    id="first-name"
                    name="first-name"
                    type="text"
                  ></input>
                </div>
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="last-name">
                    Last name
                  </label>
                  <input
                    className="govuk-input"
                    id="last-name"
                    name="last-name"
                    type="text"
                  ></input>
                </div>
                <div className="govuk-form-group">
                  <h2 className="govuk-caption-m">Date of birth</h2>
                  {/* <div id="dob-hint" className="govuk-hint">
                    For example, 31 3 1980
                  </div> */}
                  <div className="govuk-date-input" id="dob">
                    <div className="govuk-date-input__item">
                      <div className="govuk-form-group">
                        <label
                          className="govuk-label govuk-date-input__label"
                          htmlFor="dob-day"
                        >
                          Day
                        </label>
                        <input
                          className="govuk-input govuk-date-input__input govuk-input--width-2"
                          id="dob-day"
                          name="dob-day"
                          type="text"
                          autoComplete="bday-day"
                          inputMode="numeric"
                        ></input>
                      </div>
                    </div>
                    <div className="govuk-date-input__item">
                      <div className="govuk-form-group">
                        <label
                          className="govuk-label govuk-date-input__label"
                          htmlFor="dob-month"
                        >
                          Month
                        </label>
                        <input
                          className="govuk-input govuk-date-input__input govuk-input--width-2"
                          id="dob-month"
                          name="dob-month"
                          type="text"
                          autoComplete="bday-month"
                          inputMode="numeric"
                        ></input>
                      </div>
                    </div>
                    <div className="govuk-date-input__item">
                      <div className="govuk-form-group">
                        <label
                          className="govuk-label govuk-date-input__label"
                          htmlFor="dob-year"
                        >
                          Year
                        </label>
                        <input
                          className="govuk-input govuk-date-input__input govuk-input--width-4"
                          id="dob-year"
                          name="dob-year"
                          type="text"
                          autoComplete="bday-year"
                          inputMode="numeric"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="govuk-body">
                  <a href="/path/of/page">Defendant search - more options</a>
                </p>
                <button
                  type="submit"
                  id="continue"
                  className="govuk-button govuk-!-margin-bottom-0"
                  formNoValidate=""
                  data-module="govuk-button"
                  data-prevent-double-click="true"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="search-column govuk-!-padding-4 govuk-grid-column-one-half search-container-home govuk-!-margin-right-4 govuk-!-margin-bottom-4">
              <form id="case-file-search">
                <h2 className="govuk-heading-m">Case file quick search</h2>
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="case-file">
                    Case file ID
                  </label>
                  <input
                    className="govuk-input"
                    id="case-file"
                    name="case-file"
                    type="text"
                  ></input>
                </div>
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="area">
                    Area
                  </label>
                  <select className="govuk-select" id="area" name="area">
                    {userData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="govuk-form-group">
                  <label className="govuk-label" htmlFor="unit">
                    Unit
                  </label>
                  <select className="govuk-select" id="unit" name="unit">
                    {unitsData.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="govuk-body">
                  <a href="/path/of/page">Case file - more options</a>
                </p>
                <button
                  type="submit"
                  id="continue"
                  className="govuk-button govuk-!-margin-bottom-0"
                  formNoValidate=""
                  data-module="govuk-button"
                  data-prevent-double-click="true"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-m">Alerts</h1>
            <p className="govuk-body">
              To change your alert settings or methods, go to{" "}
              <a href="/path/of/page">subscriptions</a> or{" "}
              <a href="/path/of/page">event rules</a>.
            </p>
          </div>
          <div className="govuk-grid-column-full">
            <table className="govuk-table">
              <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                  <th
                    scope="col"
                    className="govuk-table__header govuk-!-width-one-quarter"
                  >
                    Alert - date & time
                  </th>
                  <th
                    scope="col"
                    className="govuk-table__header govuk-!-width-one-quarter"
                  >
                    Alert type
                  </th>
                  <th
                    scope="col"
                    className="govuk-table__header govuk-!-width-one-half"
                  >
                    Narrative
                  </th>
                </tr>
              </thead>
              <tbody className="govuk-table__body">
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">09/01/24 12:33</td>
                  <td className="govuk-table__cell">Event - case file</td>
                  <td className="govuk-table__cell">
                    SWANS-Court 1 (s) S2145493 04/01/24 JOHN SMITH Not admitted
                    (breech) (event code 1134)
                  </td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">09/01/24 12:33</td>
                  <td className="govuk-table__cell">Event - case file</td>
                  <td className="govuk-table__cell">
                    SWANS-Court 1 (s) S2145493 04/01/24 JOHN SMITH Not admitted
                    (breech) (event code 1134)
                  </td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">09/01/24 12:33</td>
                  <td className="govuk-table__cell">Event - case file</td>
                  <td className="govuk-table__cell">
                    SWANS-Court 1 (s) S2145493 04/01/24 JOHN SMITH Not admitted
                    (breech) (event code 1134)
                  </td>
                </tr>
                <tr className="govuk-table__row">
                  <td className="govuk-table__cell">09/01/24 12:33</td>
                  <td className="govuk-table__cell">Event - case file</td>
                  <td className="govuk-table__cell">
                    SWANS-Court 1 (s) S2145493 04/01/24 JOHN SMITH Not admitted
                    (breech) (event code 1134)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <p>Hi {auth?.firstName} - You're logged in!</p>
          <p>
            <Link className="govuk-link" to="/users">
              Manage Users
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export { Home };
