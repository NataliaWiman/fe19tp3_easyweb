import * as presentation from "./PresentationStyled";

const Presentation = ({ data }) => {
  const about = data["our-purpose"];
  const string = about.htmlEditContent.value;
  const strippedString = string.replace(/(<([^>]+)>)/gi, "");
  return (
    <presentation.Wrapper>
      <presentation.Heading>{about.header2.value}</presentation.Heading>
      <presentation.TextBox>
        <presentation.Text>{strippedString}</presentation.Text>
      </presentation.TextBox>
    </presentation.Wrapper>
  );
};
export default Presentation;
