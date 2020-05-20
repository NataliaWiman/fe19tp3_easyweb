import React from "react";
import styled from "styled-components";
import Skill from "./Progress";

const SkillsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;
`;

const Content = styled.div`
  text-align: center;
  max-width: 25%;
  margin-bottom: 100px;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-transform: uppercase;
    margin-top: 100px;
  }
  p {
    margin-top: 50px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.667;
  }
`;

const skillList = [
  {
    name: "Photography",
    value: 95
  },
  {
    name: "Graphic Design",
    value: 90
  },
  {
    name: "App Development",
    value: 85
  },
  {
    name: "Programming",
    value: 85
  },
  {
    name: "Web Coding",
    value: 80
  }
];

const Skills = () => {
  return (
    <SkillsWrapper id="skills">
      <Content>
        <h2>Expertis Skills</h2>
        <p>
          Dui aliquam quisque. Nec feugiat ut neque odio quo, proin interdum,
          quis elit varius et duis, dui augue vehicula nam tinc.
        </p>
      </Content>

      {skillList.map(({ name, value }, index) => (
        <Skill skill={name} percent={value} key={index} />
      ))}
    </SkillsWrapper>
  );
};

export default Skills;