import React from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  Card,
  Divider,
  Grid,
  setRef,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import background from "../images/Signup1.png";
import login1 from "../images/login.png";
import sign1 from "../images/sign.png";
import next1 from "../images/next.png";
import previous1 from "../images/previous.png";

function Home() {
  const [l, setL] = useState(0);
  const [s, setS] = useState(0);
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [stars, setStars] = useState(0);
  const [valid, setValid] = useState(0);
  const [navigateUrl, setNavigateUrl] = useState("");
  let navigate = useNavigate();

  function login() {
    setL(1);
    setStep(1);
  }
  function signUp() {
    setS(1);
    setStep(1);
  }
  function previous() {
    setStep(step - 1);
    setL(0);
    setS(0);
  }
  function next() {
    setStep(step + 1);
  }
  const task = [];
  const star = 0;
  const createUser = async () => {
    await setDoc(doc(db, "users", username), {
      username,
    });
    await setDoc(doc(db, "info", username), {
      task,
      star,
    });
    setStep(2);
    setValid(1);
    setNavigateUrl("/outside/" + username);
  };

  const getUser = async () => {
    const snap = await getDoc(doc(db, "info", username));
    if (snap.exists()) {
      const data = [];
      data.push(snap.data());
      setStars(data[0].star);
      setValid(1);
      setStep(2);
      setNavigateUrl("/outside/" + username);
    } else {
      console.log("No such document");
      setStep(2);
    }
  };

  if (step === 2 && valid === 1) {
    setTimeout(() => {
      navigate(navigateUrl);
    }, 2000);
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        Success Redirecting...
      </div>
    );
  } else if (step === 2 && valid === 0) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <h3>Incorrect username</h3>
        <Button
          className="inline-button"
          style={{
            background: `url(${previous1})`,
            backgroundSize: "100px",
            left: "650px",
            top: "450px",
            height: "43px",
            width: "100px",
          }}
          variant="outlined"
          onClick={previous}
        ></Button>
      </div>
    );
  }

  if (l == 1 && step === 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        {" "}
        <h3>Login</h3>
        <TextField
          id="outlined-multiline-static"
          multiline
          placeholder="Username"
          rows={1}
          sx={{
            width: "150px",
            backgroundColor: "white",
            left: "550px",
            top: "425px",
          }}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button
          className="submit-button"
          variant="contained"
          style={{
            background: `url(${login1})`,
            backgroundSize: "100px",
            left: "600px",
            top: "430px",
            height: "43px",
            width: "100px",
          }}
          onClick={() => {
            getUser();
          }}
        ></Button>
        {stars}
        <Button
          className="inline-button"
          style={{
            background: `url(${previous1})`,
            backgroundSize: "100px",
            left: "300px",
            top: "500px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={previous}
        ></Button>
        {/*<Button
          className="inline-button utility-button"
          style={{
            background: `url(${next1})`,
            backgroundSize: "100px",
            left: "375px",
            top: "500px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={next}
        ></Button>*/}
      </div>
    );
  }
  if (s === 1 && step === 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <h3>Sign Up</h3>
        <TextField
          id="outlined-multiline-static"
          multiline
          placeholder="Username"
          rows={1}
          sx={{
            width: "150px",
            backgroundColor: "white",
            left: "550px",
            top: "425px",
          }}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button
          className="submit-button"
          variant="contained"
          style={{
            background: `url(${sign1})`,
            backgroundSize: "100px",
            left: "600px",
            top: "430px",
            height: "43px",
            width: "100px",
          }}
          onClick={() => {
            createUser();
          }}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: `url(${previous1})`,
            backgroundSize: "100px",
            left: "300px",
            top: "500px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={previous}
        ></Button>
        {/*<Button
          className="inline-button utility-button"
          style={{
            background: `url(${next1})`,
            backgroundSize: "100px",
            left: "375px",
            top: "500px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={next}
        ></Button>*/}
      </div>
    );
  }
  if (step == 0) {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="submit-button"
          style={{
            background: `url(${sign1})`,
            backgroundSize: "100px",
            left: "550px",
            top: "450px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={() => {
            signUp();
          }}
        ></Button>
        <Button
          className="submit-button"
          style={{
            background: `url(${login1})`,
            backgroundSize: "100px",
            left: "650px",
            top: "450px",
            height: "43px",
            width: "100px",
          }}
          variant="contained"
          onClick={() => {
            login();
          }}
        ></Button>
      </div>
    );
  }
}
export default Home;
