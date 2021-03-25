import React from "react";
import styles from "../styles/calendar.module.scss";

export default function CalendarHeader({ value, onChange }) {
  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <div className={styles.header}>
      <div className={styles.previous} onClick={() => onChange(prevMonth())}>
        {String.fromCharCode(171)}
      </div>
      <div className={styles.current}>
        {currMonthName()} {currYear()}
      </div>
      <div className={styles.next} onClick={() => onChange(nextMonth())}>
        {String.fromCharCode(187)}
      </div>
      <hr className={styles.line} />
    </div>
  );
}
