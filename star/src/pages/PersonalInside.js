import React from "react";
import {
  Accordion,
  AccordionSummary,
  Button,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useCallback, useEffect } from "react";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import cross from "../images/CrossSection.png";
import logout1 from "../images/logout.png";
import s from "../images/shower.png";
import l from "../images/lamp.png";
import ba from "../images/bag.png";
import bo from "../images/book.png";
import c from "../images/charger.png";
import { SettingsBackupRestore } from "@mui/icons-material";

function PersonalInside() {
  const url = window.location.href;
  const username = url.split("/")[4];
  const [step, setStep] = useState(0);
  const [star, setStar] = useState(0);
  const [valid, setValid] = useState(0);
  const [door, setDoor] = useState(0);
  const [lamp, setLamp] = useState(0);
  const [trophy, setTrophy] = useState(0);
  const [book, setBook] = useState(0);
  const [bag, setBag] = useState(0);
  const [outlet, setOutlet] = useState(0);
  const [shower, setShower] = useState(0);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  function logout() {
    setTimeout(() => {
      navigate("/home");
    }, 100);
  }
  function close() {
    setLamp(0);
    setDoor(0);
    setOutlet(0);
    setTrophy(0);
    setBook(0);
    setShower(0);
    setBag(0);
  }

  useEffect(() => {
    const getUser = async () => {
      const snap = await getDoc(doc(db, "info", username));
      if (snap.exists()) {
        const data = [];
        data.push(snap.data());
        setStar(data[0].star);
        setLoading(true);
      } else {
        console.log("No such document");
        setLoading(true);
      }
    };
    getUser();
    setStep(1);
  }, []);
  useEffect(() => {
    const updateStars = async () => {
      console.log(star);
      updateDoc(doc(db, "info", username), {
        star: star,
      });
      close();
    };
    updateStars();
  }, [star]);

  function submit() {
    setStar(star + 1);
  }

  if (lamp == 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${l})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "60px",
            width: "40px",
            top: "270px",
            left: "485px",
          }}
          onClick={close}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "43px",
            width: "110px",
            top: "510px",
            left: "700px",
          }}
          onClick={submit}
        ></Button>
      </div>
    );
  }
  if (bag == 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${ba})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "60px",
            width: "40px",
            top: "270px",
            left: "485px",
          }}
          onClick={close}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "43px",
            width: "110px",
            top: "510px",
            left: "700px",
          }}
          onClick={submit}
        ></Button>
      </div>
    );
  }
  if (outlet == 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${c})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "60px",
            width: "40px",
            top: "270px",
            left: "485px",
          }}
          onClick={close}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "43px",
            width: "110px",
            top: "510px",
            left: "700px",
          }}
          onClick={submit}
        ></Button>
      </div>
    );
  }
  if (shower == 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${s})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "60px",
            width: "40px",
            top: "270px",
            left: "485px",
          }}
          onClick={close}
        ></Button>
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "43px",
            width: "110px",
            top: "510px",
            left: "700px",
          }}
          onClick={submit}
        ></Button>
      </div>
    );
  }
  if (book == 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${bo})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <Button
          className="inline-button"
          style={{
            background: "transparent",
            height: "60px",
            width: "40px",
            top: "180px",
            left: "350px",
          }}
          onClick={close}
        ></Button>
      </div>
    );
  }
  if (door === 1) {
    setTimeout(() => {
      navigate("/outside/" + username);
    });
  }
  function showerOpen() {
    setShower(1);
  }
  function bookOpen() {
    setBook(1);
  }
  function lampOpen() {
    setLamp(1);
  }
  function trophyOpen() {
    setTrophy(1);
  }
  function bagOpen() {
    setBag(1);
  }
  function outletOpen() {
    setOutlet(1);
  }
  function doorOpen() {
    setDoor(1);
  }
  if (loading === false) {
    return <CircularProgress className="centered-content loading-spinner" />;
  }
  if (step === 1) {
    return (
      <div
        style={{
          backgroundImage: `url(${cross})`,
          backgroundSize: "1400px",
          height: "700px",
        }}
      >
        <h3 style={{ color: "white" }}> Welcome {username} </h3>

        <h3 style={{ color: "white" }}>Total number of stars: {star}</h3>

        {/* logout button */}
        <Button
          className="inline-button"
          style={{
            background: `url(${logout1})`,
            backgroundSize: "100px",
            height: "43px",
            width: "100px",
            bottom: "50px",
            left: "1000px",
          }}
          variant="contained"
          onClick={logout}
        ></Button>
        {/* door button */}
        <Button
          className="inline-button"
          style={{
            left: "780px",
            top: "500px",
            height: "90px",
            width: "90px",
            background: "transparent",
          }}
          onClick={doorOpen}
        ></Button>
        {/* bag button */}
        <Button
          className="inline-button"
          onClick={bagOpen}
          style={{
            left: "620px",
            top: "500px",
            height: "70px",
            background: "transparent",
          }}
        ></Button>
        {/* trophy button */}
        <Button
          className="inline-button"
          onClick={trophyOpen}
          style={{
            left: "315px",
            top: "480px",
            height: "90px",
            background: "transparent",
          }}
        ></Button>
        {/* lamp button */}
        <Button
          className="inline-button"
          onClick={lampOpen}
          style={{
            left: "370px",
            top: "270px",
            height: "90px",
            background: "transparent",
          }}
        ></Button>
        {/* tub button */}
        <Button
          className="inline-button"
          onClick={showerOpen}
          style={{
            left: "85px",
            top: "320px",
            height: "50px",
            width: "90px",
            background: "transparent",
          }}
        ></Button>
        {/* bookcase button */}
        <Button
          className="inline-button"
          onClick={bookOpen}
          style={{
            left: "70px",
            top: "110px",
            height: "70px",
            background: "transparent",
          }}
        ></Button>
        {/* outlet button */}
        <Button
          className="inline-button"
          onClick={outletOpen}
          style={{
            left: "280px",
            top: "320px",
            height: "70px",
            background: "transparent",
          }}
        ></Button>
      </div>
    );
  }
}
export default PersonalInside;
