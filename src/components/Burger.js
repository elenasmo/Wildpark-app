import React from 'react'
import styled from 'styled-components'

export function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 12;

  &:focus {
    outline: none;
  }

  div {
    width: 32px;
    height: 5px;
    background: ${({ open }) => (open ? 'grey' : 'grey')};
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
