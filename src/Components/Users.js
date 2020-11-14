import React from "react";

export const Users = ({ users }) => {
  console.log("users length:::", users.length);
  if (users.length === 0) return null;

  const UserRow = (user, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

  return (
    <div className="row">
      <div className="col-md-12"></div>
      <h2>Users Game</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
