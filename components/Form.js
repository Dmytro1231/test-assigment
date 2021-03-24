import React from "react";
import styles from "../styles/form.module.scss";

const Form = () => {
  return (
    <div className={styles.container}>
      <label>Month</label>
      <input placeholder="month" />
      <label>Day</label>
      <input placeholder="day" />
    </div>
  );
};

export default Form;
