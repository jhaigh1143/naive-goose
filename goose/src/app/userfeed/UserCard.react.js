// @flow strict
import React from "react";
import { StyleSheet, StyleResolver } from "style-sheet";
import UserCardImage from "./UserCardImage.react";
import UserCardTitle from "./UserCardTitle.react";
import UserCardSubtitle from "./UserCardSubtitle.react";
import UserCardFooter from "./UserCardFooter.react";
import type { UserData } from "./Users.react";

export default function UserCard({ user }: { user: UserData }): React$Node {
  const { cover_image, name } = user;
  return (
    <div className={StyleResolver.resolve([styles.maxw6xl, styles.mxauto])}>
      <div className={StyleResolver.resolve([styles.container])}>
        <div className={StyleResolver.resolve([styles.subContainer])}>
          <div className={StyleResolver.resolve([styles.bordered])}>
            <UserCardImage url={cover_image} />
            <UserCardTitle name={name} />
            <UserCardSubtitle />
            <UserCardFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    lineHeight: "1.5",
    font: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  subContainer: {
    maxWidth: "24rem",
    width: "33.33%",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
  },
  bordered: {
    backgroundColor: "#fff",
    boxShadow:
      "0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04)",
    overflow: "hidden",
    borderRadius: ".5rem",
  },
  maxw6xl: {
    maxWidth: "72rem",
    minWidth: "55rem",
  },
  mxauto: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});
