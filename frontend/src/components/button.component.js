import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components"




function Button({name,color, links}) {



    const Abutton = styled.button `
    display: inline-block;
    background-color: ${color};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    display: block;
    `

        return(
            <div>
                <Abutton >
                  <Link to={links}>{name}</Link>
                </Abutton>
            </div>
        )
    
}

export default Button
