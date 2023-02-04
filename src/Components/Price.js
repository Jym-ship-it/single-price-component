import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Price() {
  const style = {
    mainCon: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    paperMain: {
      borderRadius: "12px",
    },
    titleCon: {
      padding: "45px",
    },
    Title: {
      fontFamily: "Karla",
      fontWeight: "700",
      fontSize: "24px",
      color: "hsl(179, 62%, 43%)",
    },
    subTitle: {
      fontFamily: "Karla",
      fontWeight: "700",
      fontSize: "18px",
      color: "hsl(71, 73%, 54%)",
      marginTop: "18px",
    },
    info: {
      fontFamily: "Karla",
      fontWeight: "400",
      fontSize: "18px",
      width: "645px",
      marginTop: "18px",
    },
    subInfo: {
      display: "flex",
    },
    sub: {
      backgroundColor: "#2ab3b0",
      padding: "45px",
      width: "50%",
      borderBottomLeftRadius: "12px",
    },
    subInfoTitle: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: "700",
      color: "#FFFFFF",
    },
    price : {
        fontFamily : "Karla",
        fontSize : "24px",
        fontWeight : "700",
        marginTop : "18px",
        display : "flex",
        alignItems : "center",
        color : "#FFFFFF"
    },
    priceInfo : {
        fontFamily : "Karla",
        fontSize : "18px",
        marginTop : "8px",
        color : "#FFFFFF"
    },
    why: {
      backgroundColor: "#4abebd",
      padding: "45px",
      width: "50%",
      borderBottomRightRadius: "12px",
    },
    whytitle: {
      fontFamily: "Karla",
      fontSize: "18px",
      fontWeight: "700",
      color: "#FFFFFF",
    },
    whyInfo: {
      fontFamily: "Karla",
      fontSize: "16px",
      color : "hsl(204, 43%, 93%)"
    },
    button : {
        backgroundColor : "hsl(71, 73%, 54%)",
        width : "301px",
        height : "45px",
        marginTop : "20px",
        textTransform : "none",
        fontSize : "18px",
        fontFamily : "Karla",
        fontWeight : "700",
        "&:hover" : {
            backgroundColor : "#4abebd"
        }
    }
  };
  return (
    <Box sx={style.mainCon}>
      <Paper sx={style.paperMain} elevation={8}>
        <Box sx={style.titleCon}>
          <Typography sx={style.Title}>Join our community</Typography>
          <Typography sx={style.subTitle}>
            30 day, hassle-free money back guarantee
          </Typography>
          <Typography sx={style.info}>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills
          </Typography>
        </Box>
        <Box sx={style.subInfo}>
          <Box sx={style.sub}>
            <Typography sx={style.subInfoTitle}>
              Monthly Subscription
            </Typography>
            <Typography sx = {style.price}>
              $29 <Typography style={{marginLeft : "10px" , fontFamily : "Karla" , color : "hsl(204, 43%, 93%)"}}>per month</Typography>
            </Typography>
            <Typography sx = {style.priceInfo}>Full access for less than $1 a day</Typography>
            <Button sx = {style.button}>Sign Up</Button>
          </Box>
          <Box sx={style.why}>
            <Typography sx={style.whytitle}>Why us</Typography>
            <Box style={{ marginTop: "18px" }}>
              <Typography sx={style.whyInfo}>
                Tutorials by industry experts
              </Typography>
              <Typography sx={style.whyInfo}>
                Peer & expert code review
              </Typography>
              <Typography sx={style.whyInfo}>
                Coding exercises Access to our GitHub repos
              </Typography>
              <Typography sx={style.whyInfo}>
                Community forum Flashcard decks
              </Typography>
              <Typography sx={style.whyInfo}> New videos every week</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
