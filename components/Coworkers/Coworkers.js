import * as coworkers from "./Coworkers.styled";
import SectionHeader from "./SectionHeader";

const Coworkers = ({ data }) => {
  const array = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1520074189855-c26f27cc7ac8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1340&q=80",
      name: "JON SNOW",
      text:
        "Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet.",
      iconURL1: "fas fa-globe",
      iconURL2: "fab fa-twitter",
      iconURL3: "fas fa-envelope",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1504343439004-591f4b611a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "CERSEI LANNISTER",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.",
      iconURL1: "fas fa-globe",
      iconURL2: "fab fa-twitter",
      iconURL3: "fas fa-envelope",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1539531544785-b84c104e3310?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      name: "JAMIE LANNISTER",
      text:
        "Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante.",
      iconURL1: "fas fa-globe",
      iconURL2: "fab fa-twitter",
      iconURL3: "fas fa-envelope",
    },
  ];

  const Content = array.map((item) => (
    <coworkers.Item key={item.id}>
      <coworkers.Image src={item.image}></coworkers.Image>
      <h4>{item.name}</h4>
      <p>{item.text}</p>
      <coworkers.IconWrapper>
        <div>
          <i className={item.iconURL1}></i>
        </div>
        <div>
          <i className={item.iconURL2}></i>
        </div>
        <div>
          <i className={item.iconURL3}></i>
        </div>
      </coworkers.IconWrapper>
    </coworkers.Item>
  ));
  return (
    <coworkers.Container>
      <SectionHeader />
      <coworkers.Wrapper>
        <coworkers.Headline>
          WE'RE A TEAM THAT ADORE WHAT WE DO
        </coworkers.Headline>
        <coworkers.List>{Content}</coworkers.List>
      </coworkers.Wrapper>
    </coworkers.Container>
  );
};

export default Coworkers;
