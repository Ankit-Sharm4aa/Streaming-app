import styles from "./page.module.css";
import Navbar from "@/components/navbars/navbar-1/navbar";
import Footer from "@/components/footers/footer1/footer";
import React from "react";
import Card from "@mui/material/Card";
import { colors } from "@mui/material";

export default function LandingPage() {
  return (
    <React.Fragment>
      <Navbar />
      <br></br>
      <Footer />
    </React.Fragment>
  );
}
