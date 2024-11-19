"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./content.module.css";

const Content: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles[`content-container`]}>
        <li className={styles.item}>1</li>
        <li className={styles.item}>2</li>
        <li className={styles.item}>3</li>
        <li className={styles.item}>4</li>
        <li className={styles.item}>5</li>
        <li className={styles.item}>6</li>
        <li className={styles.item}>7</li>
        <li className={styles.item}>8</li>
        <li className={styles.item}>8</li>
        <li className={styles.item}>8</li>
        <li className={styles.item}>8</li>
        <li className={styles.item}>8</li>
      </ul>
    </div>
  );
};

export default Content;
