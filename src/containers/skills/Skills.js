import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import About from "./../about/about";
export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            More About Me
          </h1>
          <About theme={theme}/>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
