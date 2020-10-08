import React from 'react'
import styled from 'styled-components'


const StyledNavDiv = styled.div`
    background-color: ${pr => pr.theme.jetBlack};
    padding:1%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    nav {
        flex-basis: 100%;
    }
    h2 {
        color: ${pr => pr.theme.timberwolf};
        font-family: 'Sansita Swashed', cursive;
    }
    h1 {
        color: ${pr => pr.theme.timberwolf};
    }
    a {
        color: ${pr => pr.theme.maizeCrayola};
        padding: 0 7%;
        text-decoration: none;
        font-family: 'Secular One', sans-serif;
        text-align: right;
    }
`



function Nav() {



    return (
        <StyledNavDiv>
            <nav>
                <a href='https://www.nasa.gov/'>NASA</a>
                <a href='https://api.nasa.gov/'>NASA - API</a>
                <a href='https://github.com/aprilissy'>MyGitHub</a>
            </nav>
            <h2>April's take on the:</h2>
            <h1>NASA Astronomy Photo of the Day!</h1>
        </StyledNavDiv>
    );
}

export default Nav;