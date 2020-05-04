import { keyframes } from "styled-components";
import slideInDown from "react-animations/lib/slide-in-down";
import bounceIn from "react-animations/lib/bounce-in";
import rotateIn from "react-animations/lib/rotate-in";

export default {
  fontFamily: "Signika",
  utils: {
    // the duration is passed as parameter
    slideInDown: (duration) =>
      `animation: ${duration}s ${keyframes(slideInDown)};`,
  },
};

export const theme = {
  primaryDark: "#333",
  primaryLight: "#fff",
  secondaryLight: "#f2f2f2",
  primaryAccent: "#b88a2b",
  secondaryAccent: "#ecd5ad",

  fontSize: "18px",
  lineHeight: "1.5",

  mobile: "500px",
  tablet: "1024px",
};
