// @flow strict
import React from "react";
import UserCard from "./UserCard.react";

const users: Array<{| name: string |}> = [
  {
    name: "Sally",
  },
  {
    name: "Judith",
  },
  {
    name: "Carol",
  },
];

export default function Users(): React$Node {
  return (
    <div>
      <h1>Users</h1>
      {users.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
      <UserCard />
    </div>
  );
}
