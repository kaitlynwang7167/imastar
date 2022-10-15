import React from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  Card,
  Divider,
  Grid,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useCallback, useEffect } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import background from "../images/NightSky.png";
import logout1 from "../images/logout.png";
function PersonalHome() {
  const url = window.location.href;
  const username = url.split("/")[4];
  console.log(username);
  const [step, setStep] = useState(0);
  const [stars, setStars] = useState(0);
  const [valid, setValid] = useState(0);
  const [shower, setShower] = useState(0);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function logout() {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(doc(db, "info", username));
      if (snap.exists()) {
        const data = [];
        data.push(snap.data());
        setStars(data[0].star);
        setValid(1);
        setLoading(true);
      } else {
        console.log("No such document");
        setLoading(true);
      }
    };
    getUser();
    setStep(1);
  }, []);

  function goInside() {
    setStep(2);
  }
  if (step === 2) {
    setTimeout(() => {
      navigate("/inside/" + username);
    }, 2000);
    return <div>Going inside...</div>;
  }
  if (loading === false) {
    return <CircularProgress className="centered-content loading-spinner" />;
  }
  if (valid === 1 && step === 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <h3 style={{ color: "white" }}> Welcome {username} </h3>
        <h3 style={{ color: "white" }}>Total number of stars: </h3>
        {stars}
        <Button
          className="inline-button"
          style={{ left: "100px" }}
          variant="outlined"
          onClick={goInside}
        >
          Door
        </Button>
        <Button
          className="inline-button"
          style={{ top: "200px", left: "100px" }}
          variant="outlined"
          onClick={logout}
        >
          Log out
        </Button>
      </div>
    );
  } else if (valid === 0 && step === 1) {
    return (
      <div>
        <h3>Incorrect username</h3>
        <Button className="inline-button" variant="outlined" onClick={logout}>
          Try Again
        </Button>
      </div>
    );
  }
}
export default PersonalHome;
