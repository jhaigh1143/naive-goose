// @flow strict
import React from "react";
import { StyleSheet, StyleResolver } from "style-sheet";

export default function UserCardTitle(): React$Node {
  return (
    <div className={StyleResolver.resolve([styles.container])}>
      <div className={StyleResolver.resolve([styles.header])}>Realtor</div>
      <div className={StyleResolver.resolve([styles.body])}>
        <div
          className={StyleResolver.resolve([styles.icon])}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)",
          }}
        ></div>
        <div>
          <p className={StyleResolver.resolve([styles.title])}>
            Tiffany Heffner
          </p>
          <p className={StyleResolver.resolve([styles.subtitle])}>
            (555) 555-4321
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: "1rem",
    paddingTop: ".75rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderTopWidth: "1px",
    borderColor: "#e2e8f0",
    borderStyle: "solid",
    backgroundColor: "#f7fafc",
  },
  header: {
    letterSpacing: ".025em",
    textTransform: "uppercase",
    fontSize: ".75rem",
    color: "#718096",
    fontWeight: "700",
  },
  title: {
    color: "#1a202c",
    fontWeight: "700",
  },
  subtitle: {
    color: "#4a5568",
    fontSize: ".875rem",
  },
  body: {
    paddingTop: ".5rem",
    alignItems: "center",
    display: "flex",
  },
  icon: {
    width: "2.5rem",
    marginRight: ".75rem",
    height: "2.5rem",
    borderRadius: "999px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});
