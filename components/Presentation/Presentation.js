import * as presentation from "./PresentationStyled";

const Presentation = ({ data }) => {
  const about = data["our-purpose"];
  return (
    <presentation.Wrapper>
      <presentation.Heading>{about.header2.value}</presentation.Heading>
      <presentation.Text>{about.htmlEditContent.value}</presentation.Text>
    </presentation.Wrapper>
  );
};

export default Presentation;