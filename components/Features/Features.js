import * as feature from "./FeaturesStyled";

const Features = ({ data, features }) => {
  const array = [
    {
      id: 1,
      title: "Digital design",
      text:
        "Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet. Sed a lorem quis neque interdum consequat ut sed sem.",
      iconURL: "fas fa-compact-disc",
    },
    {
      id: 2,
      title: "Web development",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      iconURL: "fas fa-headphones",
    },
    {
      id: 3,
      title: "We love you",
      text:
        "Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      iconURL: "fas fa-guitar",
    },
  ];

  const MainMenu = array.map((item) => (
    <feature.Item key={item.id}>
      <feature.IconWrapper>
        <feature.Icon className={item.iconURL}></feature.Icon>
      </feature.IconWrapper>

      <feature.ItemTitle>{item.title}</feature.ItemTitle>
      <feature.ItemText>{item.text}</feature.ItemText>
    </feature.Item>
  ));

  return (
    <feature.Wrapper>
      <feature.Heading>Love what you do, and you'll do it well</feature.Heading>
      <feature.List>{MainMenu}</feature.List>
    </feature.Wrapper>
  );
};

export default Features;
