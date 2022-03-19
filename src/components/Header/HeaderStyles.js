import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1.5rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.background1};

  @media ${(props) => props.theme.breakpoints.minlg} {
    padding: 2rem 1.5rem;
  }

  @media ${(props) => props.theme.breakpoints.minxl} {
    padding: 2rem;
  }
`;


export const Span = styled.span`
  font-size: 2rem;
  margin-left: 1rem;
  width: max-content;
`;


export const Div1 = styled.div`
  order: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
`;


export const Div2 = styled.div`
  order: 3;
  flex: 1;
  padding-top: 1rem;
  justify-content: space-evenly;
  display: none;

  &.active {
    display: flex;
  }

  li {
    margin-right: 2rem;
    &:last-child {
      margin-right: 0;
    }
  }

  @media ${(props) => props.theme.breakpoints.minmd} {
    order: 2;
    margin-left: auto;
    column-gap: 2rem;
    display: flex;
    flex: 0 1 auto;
    padding-top: 0;

    li {
      margin: 0;
    }
  }
`;


export const Div3 = styled.div`
  order: 2;
  margin-left: auto;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.minmd} {
    margin-left: 3rem;
  }
`;

//Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    border-radius: 25px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    background: ${(props) => props.colorAlt ? 
      'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
      'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
    width: 0;
    height: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;

    &::after {
      width: 50%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;


//DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;


export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


//Social Icons 
export const SocialIcons = styled.a`
  width: 35px;
  height: 35px;
  color: white;
  margin-right: .8rem;
  transition: 0.3s ease;
  border-radius: 50%;
  display: flex;

  svg {
    margin: auto;
    width: 2.5rem;
    height: 2.5rem;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover:not(:last-child),
  &:last-child.active {
    background-color: #212d45;
    transform: scale(1.1);
  }

  @media ${(props) => props.theme.breakpoints.minmd} {

    &:last-child {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.minlg} {
    width: 40px;
    height: 40px;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`