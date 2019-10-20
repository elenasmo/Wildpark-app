import React from 'react'
import styled from 'styled-components/macro'

export default function Page({ pageTitle, children, setOpen }) {
  return (
    <PageStyled>
      <Header>{pageTitle}</Header>
      <MainStyled onClick={() => setOpen(false)}>{children}</MainStyled>
    </PageStyled>
  )
}

const PageStyled = styled.section`
  margin: 0;
`
const MainStyled = styled.div``

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: transparent;
  color: #686469;
  font-style: bold;
  font-size: 30px;
  padding: 20px;
  /* background-size: cover; */
  /* background-image: url('https://res.cloudinary.com/duwqflakd/image/upload/v1571496352/Pfad_gp8hno.png'); */
`
