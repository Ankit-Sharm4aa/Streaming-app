import React from "react";
import Box from "@mui/material/Box";
import Logo from "@/components/logo/logo";
import Typography from "@mui/material/Typography";
import Form from "@/components/form/signin/form";
import styles from "./styles/signin.module.css";
import Footer from "@/components/footers/footer1/footer";

const SignIn: React.FC = () => {
  return (
    <div className={styles[`signin-page`]}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Box className={styles.box}>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Sign In
        </Typography>
        <Form />
      </Box>
      <Footer />
    </div>
  );
};

export default SignIn;
