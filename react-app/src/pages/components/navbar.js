import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//Picture
import logo from "../images/fakeLogo.png";

const Bar = styled.div`
  text-align: center;
  border-bottom: solid black 2px;
  height: 5em;
`;
const Title = styled.h1`
  display: inline-block;
  vertical-align: top;
  padding: 0 0.5em;
`;
const Menu = styled.nav`
  background-color: gray;
  border: solid 1px black;
  max-width: 80%;
  min-width: 20em;
  position: fixed;
  right: -81%;
  top: 5.1em;

  transition: right 1s cubic-bezier(0, 0.52, 0, 1);

  &.show {
    right: 0;
  }
`;

const ToggleMenu = styled.button`
  position: absolute;
  right: 0;
  height: inherit;
  width: 7em;
  border: none;
  background-color: inherit;

  &:hover {
    background-color: white;
  }
`;

const MenuItems = styled.ul`
  margin: 0;
  padding: 0 0;
`;
const MenuItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0 0;

  &:hover {
    background-color: white;
  }
`;
const MenuLink = styled(Link)`
  width: 7em;
  margin: 0 0;
  padding: 0 0;

  text-decoration: none;
  color: black;

  & > p {
    margin: 0 0;
    line-height: 4em;
  }
`;

const HomeLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export class Navbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
    };
    this.menu = createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  toggleMenu() {
    console.log("hello");
    this.menu.current.classList.toggle("show");
  }

  clicked(e) {
    this.toggleMenu();
  }

  render() {
    return (
      <Bar>
        <HomeLink to="/" onClick={this.clicked}>
          <Title>Creep</Title>
          <img src={logo} alt="Logo" />
          <Title>Catcher</Title>
        </HomeLink>

        <ToggleMenu onClick={this.clicked}>burger</ToggleMenu>
        <Menu ref={this.menu}>
          <MenuItems menuVisibility={this.state.visible}>
            <MenuItem>
              <MenuLink to="/map" onClick={this.clicked}>
                <p>Search on Map</p>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/report" onClick={this.clicked}>
                <p>Report</p>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/guidelines" onClick={this.clicked}>
                <p>Guidelines</p>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/incidents" onClick={this.clicked}>
                <p>My Incidents</p>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/support" onClick={this.clicked}>
                <p>Support</p>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/contact" onClick={this.clicked}>
                <p>Contact</p>
              </MenuLink>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Bar>
    );
  }
}

export default Navbar;
