import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    margin: 3em;
    paddding: 3em;
    width:100%;
`

const Button = styled.div`
    border: 1px solid black;
    background-color: gray;
    color: black;
    font-size: 3em;
    margin: 0.5em;
    padding: 0.3em;
    text-align: center;
    min-width: 10em;
`

export class HomeButton extends Component{
    render(){
        return (
            <Link style ={{textDecoration: 'none'}}>
                <Button>{this.props.title}</Button>
            </Link>
        );
    }
}

export default HomeButton;
