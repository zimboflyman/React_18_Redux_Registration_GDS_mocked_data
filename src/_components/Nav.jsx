import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "_store";

export { Nav };

function Nav() {
  const auth = useSelector((x) => x.auth.value);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  // only show nav when logged in
  if (!auth) return null;

  return (
    <>
      <nav
        id="app-navigation"
        className="app-navigation js-app-navigation govuk-clearfix"
        role="navigation"
        aria-labelledby="app-navigation-heading"
      >
        {/* <ul className="app-navigation__list app-width-container">
        <li className="app-navigation__list-item ">
          <NavLink to="/" className="govuk-link">
            Home
          </NavLink>
        </li>
      </ul> */}

        <div className="navbar-nav govuk-!-margin-bottom-3">
          <NavLink to="/" className="govuk-link govuk-link--no-underline">
            Home
          </NavLink>
          <NavLink to="/" className="govuk-link govuk-link--no-underline">
            Defendants
          </NavLink>
          <NavLink to="/" className="govuk-link govuk-link--no-underline">
            Case Files
          </NavLink>
          <NavLink to="/" className="govuk-link govuk-link--no-underline">
            Documents
          </NavLink>
          <NavLink to="/" className="govuk-link govuk-link--no-underline">
            Alerts
          </NavLink>
          <NavLink
            onClick={logout}
            className="govuk-link govuk-link--no-underline"
          >
            Log out
          </NavLink>
        </div>
      </nav>
      <hr className="govuk-section-break govuk-section-break--visible"></hr>
    </>
  );
}
