import React from "react";
import styles from "../styles/form.module.scss";
import { FaTimes } from "react-icons/fa";

const Form = ({ showModal, setShowModal, value }) => {
  console.log(value._d);
  return (
    <>
      {showModal ? (
        <div className={styles.container}>
          <div className={styles.block__form}>
            <div className={styles.wrapper}>
              <FaTimes
                className={styles.close__modal}
                onClick={() => setShowModal((prev) => !prev)}
              />
              <label>
                Month
                <input placeholder={value.format("MMMM")} />
              </label>
              <label>
                Day
                <input
                  placeholder={value.format("D") + "th" + value.format("dddd")}
                />
              </label>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Form;
