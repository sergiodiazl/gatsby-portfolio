import React from 'react';
import PropTypes from 'prop-types';
import {  Text, Flex,  } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDatabase,faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import Triangle from '../components/Triangle';
import { CardContainer, Card } from '../components/Card';
library.add(fab,faDatabase,faNetworkWired)
const Background = () => (
  <div>
     <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
    
  </div>
);

const Input = styled.input`
  padding: 2%;
  margin: 2%;
  color: ${props =>props.theme.colors[props.color] || props.theme.colors.primary};} 
  background: ${props =>props.theme.colors[props.background] || props.theme.colors.backgroundDark};} 
  border: none;
  border-radius: 3px;
`;
const Label = styled.label`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props =>props.theme.colors[props.color] || props.theme.colors.primary};} 
  border: none;
  border-radius: 3px;
`;
const Textarea = styled.textarea`
flex:1;
  padding: 0.5em;
  margin: 0.5em;
  min-heigth:30vh;
  color: ${props =>props.theme.colors[props.color] || props.theme.colors.primary};}
  background: ${props =>props.theme.colors[props.color] || props.theme.colors.backgroundDark};} 
  border: none;
  border-radius: 3px;
  resize:none;
`;

const SubmitButton=styled.button`
padding: 0.5em;
margin: 0.5em;
min-heigth:30vh;
color: ${props =>props.theme.colors[props.color] || props.theme.colors.primary};}
background-color: ${props =>props.theme.colors[props.color] || props.theme.colors.primaryDark};} 
border: none;
border-radius: 3px;
resize:none;
`;




const FormCard=styled(Card)`
width:100%;
padding:5%;
&:hover {
    top: 0px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;


const ContactForm=()=>(
    <Flex>
     <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <Flex flexWrap='wrap'>
        <Flex>
        <Label htmlFor="email">Your Email:</Label>
        <Input id="email" type="email" name="email"/>
        </Flex>  
        <Flex>
        <Label htmlFor="name">Your Name:</Label>
        <Input id="name" type="name" name="name" />
        </Flex>  
      </Flex>
      <Flex flexWrap='wrap'>
        <Label htmlFor="message">Message:</Label>
        <Textarea id="message" name="message" />
      </Flex >
      <SubmitButton type="submit">Send</SubmitButton>
    </form>
    </Flex>
)
          
        
               
  

const Contact = () => (
  <Section.Container id="Contact" Background={Background}>
    <Section.Header name="Leave me a message" icon="💻" label="writing" />
    
        <CardContainer minWidth="70vw">
         <FormCard>
            <Fade bottom delay={ 100} >
  <ContactForm/>
            </Fade>
         </FormCard> 
        </CardContainer>
      
    
  </Section.Container>
);

export default Contact;
