import * as features from "./FeaturesStyled";

const Features = ({ data }) => {
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
    <features.Item key={item.id}>
      <features.IconWrapper>
        <features.Icon className={item.iconURL}></features.Icon>
      </features.IconWrapper>

      <features.ItemTitle>{item.title}</features.ItemTitle>
      <features.ItemText>{item.text}</features.ItemText>
    </features.Item>
  ));

  return (
    <features.Wrapper>
      <features.Heading>
        Love what you do, and you'll do it well
      </features.Heading>
      <features.List>{MainMenu}</features.List>
    </features.Wrapper>
  );
};

export default Features;
