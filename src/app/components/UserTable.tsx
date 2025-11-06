"use client";

import { useEffect, useState } from "react";
import { IUser } from "../types";

function UserTable({ setIsFetching, isFetching }) {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUser = async () => {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    setUsers(data);
  };

  function removeUser(id: string) {
    fetch("http://localhost:8080/users/" + id, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    setIsFetching(!isFetching);
  }

  useEffect(() => {
    fetchUser();
  }, [isFetching]);

  return (
    <table className="table table-hover w-50 mx-auto">
      <thead>
        <tr>
          <th>Id</th>
          <th>FullName</th>
          <th>Age</th>
          <th>isStudent</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.fullName}</th>
              <th>{user.age}</th>
              <th>{user.isStudent ? "yes" : "no"}</th>
              <th>
                <button
                  onClick={() => removeUser(user.id)}
                  className="btn btn-danger"
                >
                  x
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserTable;
