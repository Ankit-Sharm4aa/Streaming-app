import React from "react";
import styles from "./userFooter.module.css";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid2";
import { links, footer_copyright } from "./data";
import { Typography } from "@mui/material";

const UserFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <Link
          className={styles[`social-insta`]}
          href="https://www.instagram.com/ank1t_sharma__/"
        >
          <InstagramIcon fontSize="large" />
        </Link>
        <Link
          className={styles[`social-youtube`]}
          href="https://www.youtube.com/@ankit_sharma38"
        >
          <YouTubeIcon fontSize="large" />
        </Link>
      </div>
      <Grid container spacing={2} className={styles[`grid-container`]}>
        {links.map((item) => {
          return (
            <Grid
              key={item.id}
              className={styles[`grid-item`]}
              size={{ xs: 4, sm: 3, md: 3, lg: 3, xl: 3 }}
            >
              <Link href={item.link} className={styles.link}>
                <Typography variant="body1" className={styles.text}>
                  {item.name}
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
      <span>
        {footer_copyright.map((item) => {
          return (
            <Typography variant="body2" key={item.id}>
              {item.desc}
            </Typography>
          );
        })}
      </span>
    </div>
  );
};

export default UserFooter;
