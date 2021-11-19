import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(Link)`
    border: 1px solid black;
    background-color: gray;
    text-decoration: none;
    font-size: 3em;
    padding: 0.5em 4em;
`

export class HomeButton extends Component{
    render(){
        return (
        <div>
            <Button>{this.props.title}</Button>
        </div>
        );
    }
}

export default HomeButton;
