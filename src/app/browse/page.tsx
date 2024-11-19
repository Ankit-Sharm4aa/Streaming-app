import React from "react";
import Navbar2 from "@/components/navbars/user-navbar/user-navbar";
import UserFooter from "@/components/footers/user-footer/user-footer";
import BgCanvas from "@/components/bgCanvas/bgCanvas";
import Content from "@/components/content/content";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import styles from "./page.module.css";
import { heading } from "./data";
import Image from "next/image";
import { Typography } from "@mui/material";

const Dashboard: React.FC = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");
  return (
    <>
      <div className={styles.nav}>
        <Navbar2 />
      </div>
      <div className={styles.canvas}>
        <BgCanvas />
      </div>
      <div className={styles[`content-container`]}>
      {heading.map((i) => {
        return (
          <div key={i.id}>
            <Typography variant="h5"  sx={{ margin: " 1rem 0rem" }}>
              {i.name}
            </Typography>
            <div className={styles.content}>
              <Content />
            </div>
          </div>
        );
      })}
      </div>

      <UserFooter />
    </>
  );
};

export default Dashboard;
