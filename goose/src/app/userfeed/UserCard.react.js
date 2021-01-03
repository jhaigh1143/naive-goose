// @flow strict
import React from "react";
import { StyleSheet, StyleResolver } from "style-sheet";
import UserCardImage from "./UserCardImage.react";
import UserCardTitle from "./UserCardTitle.react";
import UserCardSubtitle from "./UserCardSubtitle.react";
import UserCardFooter from "./UserCardFooter.react";
import type { UserData } from "./BrowseUsers.react";

export default function UserCard({ user }: { user: UserData }): React$Node {
  const { cover_image, name } = user;
  return (
    <div className={StyleResolver.resolve([styles.flex])}>
      <div className={StyleResolver.resolve([styles.subContainer])}>
        <div className={StyleResolver.resolve([styles.bordered])}>
          <UserCardImage url={cover_image} />
          <UserCardTitle name={name} />
          <UserCardSubtitle />
          <UserCardFooter />
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    lineHeight: "1.5",
    font: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  subContainer: {
    maxWidth: "24rem",
    padding: "0.5rem",
  },
  bordered: {
    backgroundColor: "#fff",
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)",
    overflow: "hidden",
    borderRadius: ".5rem",
  },
});
