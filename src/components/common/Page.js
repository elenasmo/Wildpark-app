import React from 'react'
import styled from 'styled-components/macro'

export default function Page({ pageTitle, children }) {
  return (
    <PageStyled>
      <Header>{pageTitle}</Header>
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.section`
  margin: 0;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: #467335;
  font-size: 25px;
  padding: 7px;
  width: 100vw;
  position: relative;
  /* box-shadow: 0 10px 10px #0002;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url('https://res.cloudinary.com/duwqflakd/image/upload/v1571325562/backgroundTest_ruiree.png');

  :after {
    background: lightgreen;
    opacity: 0.3;
    content: '';
    height: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  } */
`
