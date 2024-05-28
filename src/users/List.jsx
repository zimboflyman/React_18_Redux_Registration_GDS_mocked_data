import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { userActions } from "_store";

// Note - This is temp page used only for testing the dummy / mock registration functionality

function List() {
  const users = useSelector((x) => x.users.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <Link to="add" className="govuk-link">
        Add User
      </Link>
      <table className="">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>First Name</th>
            <th style={{ width: "30%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {users?.value?.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td style={{ whiteSpace: "nowrap" }}>
                <Link to={`edit/${user.id}`}>Edit</Link>
                <button
                  onClick={() => dispatch(userActions.delete(user.id))}
                  style={{ width: "60px" }}
                  disabled={user.isDeleting}
                >
                  {user.isDeleting ? <span></span> : <span>Delete</span>}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { List };
