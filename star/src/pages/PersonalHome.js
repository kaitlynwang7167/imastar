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
import background from "../images/1.png";
import a from "../images/0.png";
import c from "../images/2.png";
import d from "../images/3.png";
import e from "../images/4.png";
import f from "../images/5.png";
import g from "../images/6.png";

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
    }, 100);
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
    });
  }
  if (loading === false) {
    return <CircularProgress className="centered-content loading-spinner" />;
  }
  if (valid === 1 && step === 1 && stars === 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
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
  if (valid === 1 && step === 1 && stars === 0) {
    return (
      <div
        style={{
          backgroundImage: `url(${a})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
  if (valid === 1 && step === 1 && stars === 2) {
    return (
      <div
        style={{
          backgroundImage: `url(${c})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
  if (valid === 1 && step === 1 && stars === 3) {
    return (
      <div
        style={{
          backgroundImage: `url(${d})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
  if (valid === 1 && step === 1 && stars === 4) {
    return (
      <div
        style={{
          backgroundImage: `url(${e})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
  if (valid === 1 && step === 1 && stars === 5) {
    return (
      <div
        style={{
          backgroundImage: `url(${f})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
  if (valid === 1 && step === 1 && stars === 6) {
    return (
      <div
        style={{
          backgroundImage: `url(${g})`,
          backgroundSize: "1450px",
          height: "800px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            left: "955px",
            top: "630px",
            height: "80px",
            background: "transparent",
          }}
          onClick={goInside}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            top: "100px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
      </div>
    );
  }
}
export default PersonalHome;
