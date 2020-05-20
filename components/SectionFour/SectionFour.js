import * as sectionFour from "./SectionFour.styled";
import SectionHeader from "./SectionHeader";

const SectionFour = ({ data }) => {
  const array = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1520074189855-c26f27cc7ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80",
      name: "JON SNOW",
      text:
        "Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet. Sed a lorem quis neque interdum consequat ut sed sem.",
      iconURL: "fas fa-compact-disc",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504343439004-591f4b611a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "CERSEI LANNISTER",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      iconURL: "fas fa-headphones",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1539531544785-b84c104e3310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "JAMIE LANNISTER",
      text:
        "Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
      iconURL: "fas fa-guitar",
    },
  ];

  const Content = array.map((item) => (
    <sectionFour.Item key={item.id}>
      <sectionFour.Image src={item.image}></sectionFour.Image>
      <p>{item.text}</p>
    </sectionFour.Item>
  ));
  return (
    <sectionFour.Container>
      <SectionHeader />
      <sectionFour.List>{Content}</sectionFour.List>
    </sectionFour.Container>
  );
};

export default SectionFour;
