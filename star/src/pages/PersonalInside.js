import React from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  Card,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useCallback, useEffect } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function PersonalInside() {
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [stars, setStars] = useState(0);
  const [valid, setValid] = useState(0);
  const [shower, setShower] = useState(0);
  let navigate = useNavigate();

  function logout() {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }

  const getUser = async () => {
    const snap = await getDoc(doc(db, "info", username));
    if (snap.exists()) {
      const data = [];
      data.push(snap.data());
      setStars(data[0].star);
    } else {
      console.log("No such document");
    }
  };

  function showerOpen() {}

  return (
    <div>
      Welcome {username}
      <h3>Total number of stars: </h3>
      {stars}
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
}
export default PersonalInside;
