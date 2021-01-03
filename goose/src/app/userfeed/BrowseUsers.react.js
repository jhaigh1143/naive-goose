// @flow strict
import React from "react";
import UserCard from "./UserCard.react";

export type UserData = {| name: string, cover_image: ?string |};

const users: Array<UserData> = [
  {
    name: "Sally",
    cover_image:
      "https://fpt.co.nz/wp-content/uploads/2018/04/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",
  },
  {
    name: "Judith",
    cover_image:
      "https://photos.modelmayhem.com/education_upload/190612/16/5d0186a77d770.jpg",
  },
  {
    name: "Carol",
    cover_image:
      "https://headshots.thelightcommittee.com/wp-content/uploads/2020/07/L-Thomas-headshot-2-819x1024.jpg",
  },
  {
    name: "$750,000",
    cover_image:
      "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  },
];

export default function BrowseUsers(): React$Node {
  return (
    <div>
      <h1>Users</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "flex-start",
          alignContent: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        {users.map((u) => (
          <UserCard key={u.name} user={u} />
        ))}
      </div>
    </div>
  );
}
