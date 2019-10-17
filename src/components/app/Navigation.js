import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation({ open, handleClick }) {
  return (
    <MenuStyled className="Navigation" right width={'200px'} open={open}>
      <NavLinkStyled exact to="/" onClick={handleClick}>
        Unsere Tiere
      </NavLinkStyled>
      <NavLinkStyled to="/events" onClick={handleClick}>
        Vorführungen
      </NavLinkStyled>
      <NavLinkStyled to="/map" onClick={handleClick}>
        Parkplan
      </NavLinkStyled>
    </MenuStyled>
  )
}

const MenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  right: ${({ open }) => (open ? 0 : '-300px')};
  height: 100vh;
  text-align: left;
  padding: 10px;
  position: fixed;
  top: 40px;
  margin: 10px;
  transition: right 0.3s ease-in-out;
  z-index: 10;
`

const NavLinkStyled = styled(NavLink)`
  font-size: 1.2rem;
  padding: 15px;
  color: #467335;
  text-decoration: none;
  transition: color 0.3s linear;
`
