import React from 'react'
import styled from "styled-components";


const Logo = () => {
  return (
    <Image src="https://app.easyweb.se/images/logo_white.svg" alt="Company Logo" />
  )
}

export default Logo

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
         