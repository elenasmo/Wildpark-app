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
  background: #444;
  color: white;
  font-size: 30px;
  padding: 7px;
`
