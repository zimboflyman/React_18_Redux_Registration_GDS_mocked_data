import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "_store";

function NavHeader() {
  const auth = useSelector((x) => x.auth.value);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  // only show NavHeader when logged in
  if (!auth) return null;

  return (
    <>
      <nav
        id="header-navigation"
        className="govuk-header__navigation"
        role="navigation"
        aria-label="Menu"
      >
        <button
          type="button"
          className="govuk-header__menu-button govuk-js-header-toggle"
          aria-controls="navigation"
          hidden
        >
          Menu
        </button>
        <ul id="navigation" className="govuk-header__navigation-list">
          <li className="govuk-header__navigation-item govuk-header__navigation-item--active">
            <NavLink to="/" className="govuk-link govuk-link--no-underline">
              Feedback
            </NavLink>
          </li>
          <li className="govuk-header__navigation-item">
            <NavLink to="/users" className="govuk-header__link">
              Profile
            </NavLink>
          </li>
          <li className="govuk-header__navigation-item">
            <NavLink
              to="/users"
              className="govuk-link govuk-link--no-underline"
            >
              Help
            </NavLink>
          </li>
          <li className="govuk-header__navigation-item">
            <NavLink
              onClick={logout}
              className="govuk-link govuk-link--no-underline"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr className="govuk-section-break govuk-section-break--visible"></hr>
    </>
  );
}

export { NavHeader };
