import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    height: 70px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left= styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
    

    
`;
const MenuItem = styled.li `
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`;

const Button = styled.button`
    border: 2px solid white;
    padding: 5px 7px;
    background-color: #ac3434;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 15px;
    

`;

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>
                        shopon
                    </Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                
                </Left>
                <Button>JOIN TODAY</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar
