import React, { useState, useEffect } from "react";

import styles from "../styles/calendar.module.scss";

import buildCalendar from "./build";
import dayStyles, { beforeToday } from "./styles.js";
import Header from "./header";
import Form from "../components/Form";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <>
      <div className={styles.calendarWrapper}>
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
                    <div className={dayStyles(day, value)} onClick={openModal}>
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
      </div>
      <div>
        <Form showModal={showModal} setShowModal={setShowModal} value={value} />
      </div>
    </>
  );
}
