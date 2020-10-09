import React from 'react'
import styled from 'styled-components'


const StyledNavDiv = styled.div`
    background-color: ${pr => pr.theme.jetBlack};
    padding:1%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    nav {
        flex-basis: 100%;
        display:flex;
        justify-content:center;
    }
    h2 {
        color: ${pr => pr.theme.timberwolf};
        font-family: 'Sansita Swashed', cursive;
        padding-right: 1%;
    }
    h1 {
        color: ${pr => pr.theme.timberwolf};
        margin: 1%;
    }
    a {
        color: ${pr => pr.theme.maizeCrayola};
        padding: 1% 7% 0;
        text-decoration: none;
        font-family: 'Secular One', sans-serif;
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