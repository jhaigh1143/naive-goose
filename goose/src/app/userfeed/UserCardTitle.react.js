// @flow strict
import React from "react";
import { StyleSheet, StyleResolver } from "style-sheet";

export default function UserCardTitle({ name }: { name: string }): React$Node {
  return (
    <div className={StyleResolver.resolve([styles.container])}>
      <p className={StyleResolver.resolve([styles.h3, styles.fontGrey])}>
        Detached house • 5y old
      </p>
      <p className={StyleResolver.resolve([styles.h1])}>{name}</p>
      <p className={StyleResolver.resolve([styles.fontGrey])}>
        742 Evergreen Terrace
      </p>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "1rem",
  },
  h3: {
    letterSpacing: ".025em",
    textTransform: "uppercase",
    fontSize: ".875rem",
    fontWeight: "700",
  },
  h1: {
    color: "#1a202c",
    fontSize: "1.875rem",
    margin: "0",
  },
  fontGrey: {
    color: "#4a5568",
    margin: "0",
  },
});
