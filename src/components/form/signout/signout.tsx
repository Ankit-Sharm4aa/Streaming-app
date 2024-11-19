import React from "react";
import { doSocialLogout } from "@/actions/action";
import { button } from "./data";
import styles from "./signout.module.css";
import { Typography } from "@mui/material";

const Signout = () => {
  return (
    <form className={styles.form} action={doSocialLogout}>
      {button.map((text) => {
        return (
          <button className={styles.button} key={text.id}>
            <Typography variant="body1" className={styles[`button-data`]}>
              {text.name}
            </Typography>
          </button>
        );
      })}
    </form>
  );
};

export default Signout;
