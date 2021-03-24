import React, { useState } from "react";

import Calendar from "../calendar";
import moment from "moment";

import styles from "../styles/hero.module.scss";

export default function Home() {
  const [value, setValue] = useState(moment());
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Choose the day for the meeting</h1>
          <p className={styles.subtitle}>
            We encourage you to book your appointment online.
            <span>This will save you time.</span>
          </p>
          <div className={styles.calendarWrapper}>
            <Calendar value={value} onChange={setValue} />
          </div>
        </div>
      </div>
    </>
  );
}
