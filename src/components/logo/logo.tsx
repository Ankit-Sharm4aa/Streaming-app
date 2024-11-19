import React from "react";
import Image from "next/image";
import styles from "./logo.module.css";
import company_logo from "../../../public/static/images/television.png";
const Logo: React.FC = () => {
  return (
    <React.Fragment>
      <Image src={company_logo} alt="logo" className={styles.logo}></Image>
    </React.Fragment>
  );
};

export default Logo;
