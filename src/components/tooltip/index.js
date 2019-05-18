import React from "react";
import styles from "./style.css";

const Tooltip = props => (
  <div className={`${styles.tooltip} ${props.isVisible ? styles.show : ""}`}>
    <p>{props.children}</p>
  </div>
);

export default Tooltip;
