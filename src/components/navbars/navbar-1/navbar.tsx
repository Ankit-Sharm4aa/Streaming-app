"use client";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "../../logo/logo";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Fade, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { nav_options, menu_options } from "./data";

const ITEM_HEIGHT = 48;

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.nav1}>
      <div className={styles[`left-nav`]}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className={styles[`right-nav`]}>
        <div className={styles[`right-nav-options`]}>
          {nav_options.map((options) => {
            return (
              <Link href={options.link} key={options.id}>
                {options.option}
              </Link>
            );
          })}
          <Link className={styles.link} href="/signin/">
            <button className={styles.button}>Sign In</button>
          </Link>
        </div>
        <div className={styles.menu}>
          <Tooltip title="Menu" TransitionComponent={Fade} followCursor>
            <IconButton
              id="menu"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              },
            }}
          >
            {menu_options.map((item) => (
              <Link href={item.link} key={item.id}>
                <MenuItem onClick={handleClose}>{item.option}</MenuItem>
              </Link>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
