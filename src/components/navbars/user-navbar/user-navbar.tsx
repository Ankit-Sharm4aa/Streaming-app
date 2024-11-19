"use client";
import React from "react";
import styles from "./userNavbar.module.css";
import Logo from "@/components/logo/logo";
import { left_nav, right_nav, menu_items } from "./data";
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Signout from "@/components/form/signout/signout";
import { useState, useEffect } from "react";

const UserNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles[`left-nav`]}>
        <Link className={styles[`nav2-logo`]} href="/browse/">
          <Logo />
        </Link>
        {left_nav.map((option) => {
          return (
            <Typography key={option.id} className={styles[`left-nav-options`]}>
              <Link className={styles.link} href={option.link}>
                {option.name}
              </Link>
            </Typography>
          );
        })}
        {menu_items.map((items) => {
          return (
            <Typography key={items.id} className={styles[`left-nav-menu`]}>
              {items.name}
              <IconButton className={styles[`dropdown-wrapper`]}>
                <ArrowDropDownIcon fontSize="small" sx={{ color: "white" }} />
              </IconButton>
            </Typography>
          );
        })}
      </div>
      <div className={styles[`right-nav`]}>
        <div className={styles[`search-wrapper`]}>
          <IconButton>
            <SearchOutlinedIcon fontSize="small" sx={{ color: "white" }} />
          </IconButton>
        </div>
        {right_nav.map((option) => {
          return (
            <Typography className={styles[`right-nav-option`]} key={option.id}>
              <Link className={styles.link} href={option.link}>
                {option.name}
              </Link>
            </Typography>
          );
        })}
        <div className={styles[`notification-wrapper`]}>
          <IconButton>
            <NotificationsNoneOutlinedIcon
              fontSize="small"
              sx={{ color: "white" }}
            />
          </IconButton>
        </div>
        <div className={styles[`profile-options`]}>
          <Signout />
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
