import "./Result.css";

import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import prize from "../../assets/images/omid-armin-8Nppe0yLmn8-unsplash.jpg";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      {score >= 5 && <img src={prize} className="prize-picture"></img>}{" "}
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{
          alignSelf: "center",
          marginTop: 20,
        }}
        href="/"
      >
        Start again
      </Button>
    </div>
  );
};
export default Result;
