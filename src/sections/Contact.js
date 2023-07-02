import React from 'react';
import { Box, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';

library.add(faEnvelope);

const Input = styled.input`
  padding: 2%;
  margin: 2%;
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  background: ${(props) =>
    props.theme.colors[props.background] || props.theme.colors.backgroundDark};
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;
const Label = styled.label`
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  border: none;
  border-radius: 3px;
`;
const Textarea = styled.textarea`
  flex: 1;
  padding: 2%;
  min-height: 30vh;
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.primary};
  background: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors.backgroundDark};
  border: none;
  border-radius: 3px;
  resize: none;
  overflow: auto;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

const SubmitButton = styled.button`
  padding: 0.5em;
  width: 100%;
  cursor: pointer;
  font-family: Amatic Sc, Cabin, 'Open Sans', sans-serif;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.primaryLight};
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primaryDark};
    box-shadow: 0 40x 4px rgba(0, 0, 0, 0.2);
  }
`;

const FormCard = styled(Card)`
  width: 100%;
  padding: 1%;
  &:hover {
    top: 0px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const ContactForm = () => (
  <Flex width="100%">
    <Box flex="1 1 auto" fontSize={[2, 3, 4]}>
      <form
        name="Contact Form"
        action="success-form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="Contact Form" />
        <Box m={2}>
          <Flex flexDirection="column" flexWrap="wrap">
            <Flex
              flexWrap="wrap"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Box my={2} mr={2}>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  mr={2}
                >
                  <Label htmlFor="email" color="background">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    fontSize={[2, 3, 4]}
                  />
                </Flex>
              </Box>
              <Box my={2}>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Label htmlFor="name" color="background">
                    Your name :
                  </Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    required
                    fontSize={[2, 3, 4]}
                  />
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box m={2}>
          <Flex
            flexDirection="column"
            alignItems="stretch"
            justifyContent="space-evenly"
          >
            <Label htmlFor="message">Message:</Label>
            <Textarea
              id="message"
              name="message"
              required
              fontSize={[2, 3, 4]}
            />
          </Flex>
        </Box>
        <Box m={2}>
          <SubmitButton type="submit">
            <Box fontSize={[2, 3, 4]}>
              Send <FontAwesomeIcon icon="envelope" />
            </Box>
          </SubmitButton>
        </Box>
      </form>
    </Box>
  </Flex>
);
const Background = () => (
  <div>
    <Triangle
      color="secondary"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertX
    />
  </div>
);
const Contact = () => (
  <Section.Container id="Contact" Background={Background}>
    <Section.Header name="Leave a message" icon="✍️" label="writing" />

    <CardContainer minWidth="70vw">
      <FormCard>
        <Fade bottom delay={100}>
          <ContactForm />
        </Fade>
      </FormCard>
    </CardContainer>
  </Section.Container>
);

export default Contact;
