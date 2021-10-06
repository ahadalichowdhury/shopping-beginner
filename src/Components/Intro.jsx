import React from 'react'
import styled from 'styled-components'
import woman from '../img/woman.png'


const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`;
const Left = styled.div`
    height: calc(100vh - 50px);
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Right = styled.div`
    height: calc(100vh - 50px);
    width: 40%;
`;

const Info = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

const Button=styled.button`
    padding: 7px;
    background-color: darkblue;
    border-radius: 10px;
    border: none;
    color: white;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;
const Phone = styled.span`
    color: yellowgreen;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 15px;
`;

const Title = styled.h1 `
    width: 60%;
    font-style: 60px;
`;

const Desc = styled.p`
    font-style: 20px;
    width: 60%;
    margin-top: 10px;
`;

const Image = styled.img`
    width: 100%;
`;

function Intro() {
    return (
        <Container>
            <Left><Title>Advantures in creative ads</Title>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio consectetur nemo consequuntur rem est maiores dolorum. Fugit voluptate facilis, magni fuga aliquam inventore consequuntur doloribus nulla, rem expedita, odio hic.</Desc>
                <Info><Button>START PROJECT</Button>
                    <Contact>
                        <Phone>Call Us (+880172870.4205)</Phone>
                        <ContactText>For any question or concern</ContactText>
                    </Contact>
                </Info>

            </Left>
            <Right><Image src={woman}/></Right>
            
        </Container>
    )
}

export default Intro
