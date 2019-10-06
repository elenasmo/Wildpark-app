import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export default function Navigation({ open }) {
  return (
    <MenuStyled className="Navigation" right width={'200px'} open={open}>
      <NavLinkStyled exact to="/">
        Animals
      </NavLinkStyled>
      <NavLinkStyled to="/events">Events</NavLinkStyled>
    </MenuStyled>
  )
}

const MenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  background: white;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(+100%)')};
  height: 100vh;
  text-align: left;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`

const NavLinkStyled = styled(NavLink)`
  font-size: 1.2rem;
  padding: 15px;
  color: black;
  text-decoration: none;
  transition: color 0.3s linear;
`
