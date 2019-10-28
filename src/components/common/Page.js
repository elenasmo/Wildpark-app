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
  max-width: 400px;
  @media (min-width: 768px) {
    max-width: 500px;
  }
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 52px auto;
`
const MainStyled = styled.div`
  overflow-y: scroll;
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: transparent;
  color: #686469;
  font-style: bold;
  font-size: 32px;
  padding: 10px;
`
