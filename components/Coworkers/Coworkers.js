import * as coworkers from "./Coworkers.styled";
import SectionHeader from "./SectionHeader";

const Coworkers = ({ data }) => {
  const array = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
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
        "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      name: "JAMIE LANNISTER",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem.",
      iconURL1: "fas fa-globe",
      iconURL2: "fab fa-twitter",
      iconURL3: "fas fa-envelope",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1520719627573-5e2c1a6610f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      name: "CERSEI LANNISTER",
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
