import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Bar = styled.div`
text-align: center;
border-bottom: solid black 2px;
height: 5em;
`
const Title = styled.h1`
display: inline-block;
`
const Menu = styled.nav`
background-color: red;
width: 80%;
position: fixed;
right: -80%;
top: 5em;

transition: transform .3s cubic-bezier(0, .52, 0, 1);

&.show {
    right: 0;
}
`

const ToggleMenu = styled.button`
float: right;
height: inherit;
width: 7em;
border:none;
background-color: inherit;

&:hover {
    background-color: red;
}

`

const MenuItems = styled.ul`
margin:none;
`
const MenuItem = styled.li`
list-style-type: none;

&:hover {
    background-color:yellow;
}
`
const MenuLink = styled(Link)`
 width:7em;

`

export class Navbar extends Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.clicked = this.clicked.bind(this);
    }

    toggleMenu() {
        console.log('hello')
        this.setState({
            visible:!this.state.visible
        })
    }

    clicked(e) {
        this.toggleMenu();
      }

    render(){
        
        return(
            <Bar>
                <Title>Creep</Title>
                <Title>Catcher</Title>

                <ToggleMenu onClick={this.clicked}>burger</ToggleMenu>
            <Menu>
                <MenuItems menuVisibility={this.state.visible}>
                    <MenuItem>
                        <MenuLink to="/map"><p>Search on Map</p></MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/report"><p>Report</p></MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/guidelines"><p>Guidelines</p></MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/incidents"><p>My Incidents</p></MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/support"><p>Support</p></MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/contact"><p>Contact</p></MenuLink>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </Bar>
        )
    }
}

export default Navbar