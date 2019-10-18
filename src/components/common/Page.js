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
  color: black;
  font-size: 28px;
  padding: 10px;
  width: 100vw;
  position: relative;
`
