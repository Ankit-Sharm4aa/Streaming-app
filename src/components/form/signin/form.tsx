import React from "react";
import { doSocialLogin } from "@/actions/action";
import Image from "next/image";
import { button_data } from "./data";
import styles from "./form.module.css";

const Form: React.FC = () => {
  return (
    <form action={doSocialLogin} className={styles[`form-container`]}>
      {button_data.map((button) => {
        return (
          <button
            key={button.id}
            type="submit"
            name="action"
            value={button.name.toLowerCase()}
            className={styles[`button`]}
          >
            <div className={styles[`button-context`]}>
              <Image
                src={button.icon}
                alt="logo"
                className={styles[`signin-options`]}
              ></Image>
              Continue with {button.name}
            </div>
          </button>
        );
      })}
    </form>
  );
};

export default Form;
