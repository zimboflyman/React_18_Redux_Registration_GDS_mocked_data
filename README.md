# Basic GDS registration and login eaxample - React, Redux, GDS

This is the base repo for the react frontend for the webportal. It uses:

- React v18.1
- Redux and the redux toolkit - https://redux.js.org and
  https://redux-toolkit.js.org.
- React-Router-dom - https://reactrouter.com.
- React-hooks-form - https://react-hook-form.com.
- Yup for form validation.
- the GDS (Gov Design System) as a framework for all UI components,

The app runs with a fake backend by default to enable it to run completely in
the browser without a real backend API, to switch to a real backend API you just
have to remove or comment out the 2 lines below the comment // setup fake
backend located in the main index file (/src/index.js). Once your have plugged
in the active API for login and register you should remove the relevant fake
helpers and actions.

## Setup Instructions

1. Install Node.js and npm from https://nodejs.org.
2. Download or clone the project source code.
3. Install all required npm packages by running 'npm install' from the command
   line in the project root folder (where the package.json is located).
4. Start the application by running 'npm start' from the command line in the
   project root folder.
5. The browser should automatically launch the application at
   http://localhost:3000

## Basic documentation

Create-React-App was used to generate the base project structure and the tool is
also used to build and serve the application. For more info about Create React
App see https://create-react-app.dev/.

The project source (/src) is organised into the following folders:

- \_components
  - Components used by pages or by other react components.
- \_helpers
  - Anything that doesn't fit into the other folders and doesn't justify having
    its own folder.
- \_store
  - Redux store and slices that define the global state available. Each slice
    contains actions and reducers that are responsible for updating global
    state.
- account
  - Account page components for register and login
- home
  - Home page components
- users
  - Users page components for CRUD operations

#### Folder naming convention

Each feature has its own folder (accuont, home & users), other shared/common
code such as components, helpers, store etc are placed in folders prefixed with
an underscore \_ to easily differentiate them from features and to group them
together at the top of the folder structure.

#### Javascript code structure

JavaScript files are organised with export statements at the top so it's easy to
see all exported modules when you open a file. Export statements are followed by
functions and other implementation code for each JS module.

#### Barrel files

The index.js file in each folder are barrel files that re-export all of the
modules from that folder so they can be imported using only the folder path
instead of the full path to each module, and to enable importing multiple
modules in a single import (e.g. import { Nav, PrivateRoute } from
'\_components';).

The /\_store/index.js file also configures and exports the centralized Redux
store which is provided to the React app in the main index.js file on startup.

#### Base URL for imports

The baseUrl is set to "src" in the jsconfig.json file to make all import
statements (without a dot '.' prefix) relative to the /src folder of the
project, removing the need for long relative paths like import { history } from
'../../../\_helpers';

#### The GDS framework

Currently the govuk-frontend is installed as part of the dependencies and used
to inject all base CSS. You can continue to use this method but its a bit large
as non of the components are used through the dependency (Just the JS and CSS),
or you can import the relevant CSS files directly into the project and remove
the dependency.

#### Some notes on the temporary / fake backend

Path: /src/\_helpers/fake-backend.js In order to run and test the app without a
real backend API, this uses a fake backend that intercepts the HTTP requests and
sends back "fake" responses. This is done by monkey patching the window.fetch()
function to return fake responses for a specific set of routes.

The project probably doesn't need a users list functionality or the ability to
edit and delete users, so much of this functionality can be removed once the
real API is plugged in. This was simply added for ease of use for this demo
mode.

#### Some notes on fetch(), redux and routiner helpers

Path: /src/\_helpers/fetch-wrapper.js The fetch wrapper is a lightweight wrapper
around the native browser fetch() function used to simplify the code for making
HTTP requests. It returns an object with methods for get, post, put and delete
requests, it automatically handles the parsing of JSON data from responses, and
throws an error if the HTTP response is not successful (!response.ok). If the
response is 401 Unauthorized or 403 Forbidden the user is automatically logged
out.

Path: /src/\_helpers/history.js The history helper is a plain javascript object
to enable access to the React Router navigate() function and location property
from anywhere in the React app including outside components. It's required in
this example to enable navigation on login and logout from the Redux auth slice.

Path: /src/\_store/alert.slice.js The alert slice manages Redux state, actions
and reducers for alert notifications. These alerts are currently piped into the
noraml GDS ErrorSummary component.

Path: /src/\_store/auth.slice.js The auth slice manages Redux state, actions and
reducers for authentication. The file is organised into three sections to make
it easier to see what's going on. The first section calls functions to create
and configure the slice, the second section exports the actions and reducer, and
the third section contains the functions that implement the logic.

## --------------------todo: --------------------

### Update CODEOWNERS

(Optional) Modify the CODEOWNERS file to specify the teams or users authorized
to approve pull requests.

### Dependency Review

If your repository is private with no GitHub Advanced Security license, remove
the `.github/workflows/dependency-review.yml` file.

### Modify the GitHub Standards Badge

Once you've ensured that all the
[GitHub Repository Standards](https://user-guide.operations-engineering.service.justice.gov.uk/documentation/information/mojrepostandards.html)
have been applied to your repository, it's time to update the Ministry of
Justice (MoJ) Compliance Badge located in the README file.

The badge demonstrates that your repository is compliant with MoJ's standards.
Please follow these
[instructions](https://user-guide.operations-engineering.service.justice.gov.uk/documentation/information/add-repo-badge.html)
to modify the badge URL to reflect the status of your repository correctly.

**Please note** the badge will not function correctly if your repository is
internal or private. In this case, you may remove the badge from your README.

### Manage Outside Collaborators

To add an Outside Collaborator to the repository, follow the guidelines detailed
[here](https://github.com/ministryofjustice/github-collaborators).
