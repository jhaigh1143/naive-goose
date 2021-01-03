// @flow strict
import React from "react";
import { StyleSheet, StyleResolver } from "style-sheet";

export default function UserCardImage(): React$Node {
  return (
    <div
      className={StyleResolver.resolve([styles.container])}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
      }}
    >
      <div className={StyleResolver.resolve([styles.header])}>
        <svg
          className={StyleResolver.resolve([styles.image])}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
        </svg>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "14rem",
    padding: "1rem",
  },
  image: {
    height: "1.5rem",
    width: "1.5rem",
    color: "#fff",
    display: "block",
    verticalAlign: "middle",
    fill: "currentColor",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
