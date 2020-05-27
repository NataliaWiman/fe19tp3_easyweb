import React from "react";
import * as skill from "./Skills.styled";
import Skill from "./Progress";

const skillList = [
  {
    name: "Photography",
    value: 95,
  },
  {
    name: "Graphic Design",
    value: 90,
  },
  {
    name: "App Development",
    value: 85,
  },
  {
    name: "Programming",
    value: 85,
  },
  {
    name: "Web Coding",
    value: 80,
  },
];

const Skills = () => {
  return (
    <skill.SkillsWrapper id="skills">
      <skill.Content>
        <skill.Heading>Expertis Skills</skill.Heading>
        <p>
          Dui aliquam quisque. Nec feugiat ut neque odio quo, proin interdum,
          quis elit varius et duis, dui augue vehicula nam tinc.
        </p>
      </skill.Content>

      {skillList.map(({ name, value }, index) => (
        <Skill skill={name} percent={value} key={index} />
      ))}
    </skill.SkillsWrapper>
  );
};

export default Skills;
