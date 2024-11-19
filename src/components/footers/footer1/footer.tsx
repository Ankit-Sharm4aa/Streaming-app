import React from "react";
import styles from "./footer.module.css";
import { footer_details } from "./data";
import { links } from "./data";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      {footer_details.map((heading) => {
        return (
          <Typography variant="body1" key={heading.id}>
            {heading.name}? :{" "}
            <a className={styles.link} href="mailto:ankt4124@gmail.com">
              {heading.desc}
            </a>
          </Typography>
        );
      })}
      <Grid container spacing={2} className={styles[`grid-container`]}>
        {links.map((link) => {
          return (
            <Grid
              size={{ xs: 4, sm: 3, md: 3, lg: 3, xl: 3 }}
              className={styles.items}
              key={link.id}
            >
              <Typography variant="body2">
                <a href="" className={styles.link}>
                  {link.name}
                </a>
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Footer;
