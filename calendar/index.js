import React, { useState, useEffect } from "react";

import styles from "../styles/calendar.module.scss";

import buildCalendar from "./build";
import handleForm from "../components/Form";
import dayStyles, { beforeToday } from "./styles.js";
import Header from "./header";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  console.log(value._d);
  return (
    <div className={styles.calendar}>
      <Header value={value} onChange={onChange} />
      <div className={styles.body}>
        {calendar.map((week, idx) => (
          <div key={idx}>
            {week.map((day, idx) => (
              <div
                key={idx}
                className={styles.day}
                onClick={() => !beforeToday(day) && onChange(day)}
              >
                <div className={dayStyles(day, value)} onClick={handleForm}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className={styles.dayNames}>
          <hr className={styles.line} />
          {["s", "m", "t", "w", "t", "f", "s"].map((d, idx) => (
            <div className={styles.weeks} key={idx}>
              {d}
            </div>
          ))}
          <hr className={styles.line} />
        </div>
      </div>
    </div>
  );
}
